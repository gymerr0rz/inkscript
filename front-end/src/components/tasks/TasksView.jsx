import { Search, Plus, CheckCircle, MoreVertical } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  TasksContainer,
  TasksTop,
  TasksSearch,
  TasksBottom,
  TasksTopText,
  TasksManager,
  TasksTitle,
  TasksContent,
  TasksMenu,
  TasksDate,
  TasksTitleCompleted,
  TaskScroll,
  ChangeInput,
} from '../../styles/tasks/TasksView.styled';
import { useAuthHeader } from 'react-auth-kit';
import ShowOptions from './show_options/ShowOptions';
import SERVER_URL from '../../config/config';

const TasksView = () => {
  const [tasks, setTasks] = useState([]);
  const [showOptions, setShowOptions] = useState([]);
  const [edit, setEdit] = useState({});
  let [newTaskCount, setNewTaskCount] = useState(0);
  let [completedTask, setCompletedTask] = useState(0);
  const [search, setSearch] = useState(null);
  const [completeTask, setCompleteTask] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [newTitle, setNewTitle] = useState();
  const [completedTitle, setCompleteTitle] = useState();
  const header = useAuthHeader();

  function getTasks(header) {
    axios.get(`${SERVER_URL}/user/getTasks`).then((response) => {
      const newTasks = response.data;
      setTasks([...tasks, ...newTasks]);
      newTasks.forEach((task) => {
        if (task.origin === 'new_tasks') {
          console.log('Added count to new task!');
          setNewTaskCount((prevCount) => prevCount + 1);
        } else if (task.origin === 'completed') {
          console.log('Added count to completed task!');
          setCompletedTask((prevCount) => prevCount + 1);
        }
      });
    });
  }

  useEffect(() => {
    getTasks(header);
  }, []);

  const handleCloseOptions = () => {
    setShowOptions({});
  };

  const handleClick = (e) => {
    const newTask = document.getElementById('newBtn');
    newTask === e.currentTarget
      ? setAddTask((prevState) => !prevState)
      : setCompleteTask((prevState) => !prevState);
  };

  const handleOptions = (taskId) => {
    setShowOptions((prevState) => {
      const nextState = {};
      for (const id in prevState) {
        nextState[id] = id === taskId ? !prevState[id] : false;
      }
      nextState[taskId] = !prevState[taskId];
      return nextState;
    });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    axios
      .get(`${SERVER_URL}/user/getTasks?search=` + e.target.value)
      .then((response) => {
        const newTasks = response.data;
        setTasks([...newTasks]);
      });
  };

  const handleEdit = (e) => {
    setEdit({
      target: e.currentTarget.innerText,
      change: true,
    });

    console.log(edit);
  };

  const handleNewKey = (e) => {
    e.keyCode === 13
      ? axios
          .post(`${SERVER_URL}/user/createTask`, {
            title: newTitle,
            origin: 'new_tasks',
          })
          .then((response) => {
            console.log(response);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          })
      : console.log('Enter not clicked');
  };

  const handleComplete = (e) => {
    e.keyCode === 13
      ? axios
          .post(`${SERVER_URL}/user/createTask`, {
            title: completedTitle,
            origin: 'completed',
          })
          .then((response) => {
            console.log(response);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          })
      : console.log('Enter not clicked');
  };

  const handleEditChange = (e) => {
    console.log(e);
  };

  const handleEditSubmit = (e) => {
    e.keyCode === 13
      ? axios.post(`${SERVER_URL}/user/modifyTask`, {
          title: e.currentTarget.value.split('\n').join(''),
        })
      : console.log('Enter not clicked');
  };

  return (
    <>
      <TasksContainer>
        <TasksTop>
          <TasksTopText>My Tasks</TasksTopText>
          <TasksSearch>
            <Search />
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => handleSearch(e)}
            />
          </TasksSearch>
        </TasksTop>
        <TasksBottom>
          <TasksManager>
            <TasksTitle>
              <div className="title">
                <h1>New Tasks</h1>
                <div>{newTaskCount}</div>
              </div>
              <button id="newBtn" onClick={(e) => handleClick(e)}>
                <Plus id="newPlus" />
                ADD
              </button>
            </TasksTitle>
            <TaskScroll>
              {addTask ? (
                <TasksContent
                  className="tasks-content"
                  draggable="true"
                  onMouseLeave={handleCloseOptions}
                >
                  <TasksMenu>
                    <div className="abc">
                      <CheckCircle color="#8D8D8D" />
                      <input
                        type="text"
                        placeholder="Write a task name"
                        onKeyDown={(e) => handleNewKey(e)}
                        onChange={(e) => setNewTitle(e.target.value)}
                      />
                    </div>
                  </TasksMenu>
                  <TasksDate>
                    <br />
                  </TasksDate>
                </TasksContent>
              ) : null}

              {tasks.map((task) =>
                task.origin === 'new_tasks' ? (
                  <TasksContent
                    className="tasks-content"
                    draggable="true"
                    onMouseLeave={handleCloseOptions}
                  >
                    <TasksMenu>
                      <div className="abc">
                        <CheckCircle color="#8D8D8D" />
                        {task.title === edit.target && edit.change ? (
                          <ChangeInput
                            type="text"
                            placeholder={task.title}
                            onChange={(e) => handleEditChange(e)}
                            onKeyDown={(e) => handleEditSubmit(e)}
                          />
                        ) : (
                          <h1 onClick={(e) => handleEdit(e)}>{task.title}</h1>
                        )}
                      </div>
                      <MoreVertical
                        className="vertical"
                        onClick={() => handleOptions(task.title)}
                      />
                    </TasksMenu>
                    <TasksDate>
                      <p>{task.date}</p>
                    </TasksDate>
                    {showOptions[task.title] && (
                      <ShowOptions title={task.title} />
                    )}
                  </TasksContent>
                ) : null
              )}
            </TaskScroll>
          </TasksManager>
          <TasksManager>
            <TasksTitleCompleted>
              <div className="title">
                <h1>Completed</h1>
                <div>{completedTask}</div>
              </div>
              <button id="completeBtn" onClick={(e) => handleClick(e)}>
                <Plus />
                ADD
              </button>
            </TasksTitleCompleted>
            <TaskScroll>
              {completeTask ? (
                <TasksContent
                  className="tasks-content"
                  draggable="true"
                  onMouseLeave={handleCloseOptions}
                >
                  <TasksMenu>
                    <div className="abc">
                      <CheckCircle color="#8D8D8D" />
                      <input
                        type="text"
                        placeholder="Write a task name"
                        onChange={(e) => setCompleteTitle(e.target.value)}
                        onKeyDown={(e) => handleComplete(e)}
                      />
                    </div>
                  </TasksMenu>
                  <TasksDate>
                    <br />
                  </TasksDate>
                </TasksContent>
              ) : null}
              {tasks.map((task) =>
                task.origin === 'completed' ? (
                  <TasksContent
                    className="tasks-content"
                    draggable="true"
                    onMouseLeave={handleCloseOptions}
                  >
                    <TasksMenu>
                      <div className="abc">
                        <CheckCircle color="#8bffc0" />
                        <h1>{task.title}</h1>
                      </div>
                      <MoreVertical
                        className="vertical"
                        onClick={() => handleOptions(task.title)}
                      />
                    </TasksMenu>
                    <TasksDate>
                      <p>{task.date}</p>
                    </TasksDate>
                    {showOptions[task.title] && (
                      <ShowOptions title={task.title} />
                    )}
                  </TasksContent>
                ) : null
              )}
            </TaskScroll>
          </TasksManager>
        </TasksBottom>
      </TasksContainer>
    </>
  );
};

export default TasksView;
