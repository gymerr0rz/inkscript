import {
  Search,
  Plus,
  CheckCircle,
  MoreVertical,
  Edit,
  Delete,
  Verified,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TasksDate } from '../../styles/tasks/TasksView.styled';
import { useAuthHeader } from 'react-auth-kit';
import SERVER_URL from '../../config/config';
import Loading from '../loading/Loading';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface ITask {
  origin: string;
  title: string;
  date: string;
  _id: string;
}

const TasksView = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskCount, setNewTaskCount] = useState<number>(0);
  const [completedTask, setCompletedTask] = useState<number>(0);
  const [search, setSearch] = useState<string | null>(null);
  const [completeTask, setCompleteTask] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [newTitle, setNewTitle] = useState<string>();
  const [completedTitle, setCompleteTitle] = useState<string>();
  const header = useAuthHeader();

  const updateTasks = () => {
    axios.get(`${SERVER_URL}/user/getTasks`).then((response) => {
      const newTasks: ITask[] = response.data;
      setTasks(() => [...newTasks]);
      setNewTaskCount(0);
      setCompletedTask(0);
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
  };

  const loadTasks = () => {
    axios.get(`${SERVER_URL}/user/getTasks`).then((response) => {
      const newTasks: ITask[] = response.data;
      setTasks((prevTasks) => [...prevTasks, ...newTasks]);
      setNewTaskCount(0);
      setCompletedTask(0);
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
  };

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    loadTasks();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTask = document.getElementById('newBtn');
    newTask === e.currentTarget
      ? setAddTask((prevState) => !prevState)
      : setCompleteTask((prevState) => !prevState);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    axios
      .get(`${SERVER_URL}/user/getTasks?search=` + e.target.value)
      .then((response) => {
        const newTasks: ITask[] = response.data;
        setTasks(newTasks);
      });
  };

  const handleEdit = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.innerText);
  };

  const handleNewKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const el = e.target as HTMLInputElement;
    const origin = el.getAttribute('data-origin');

    if (!origin) return console.log('Origin not found.');

    if (e.keyCode === 13) {
      axios
        .post(`${SERVER_URL}/user/createTask`, {
          title: newTitle,
          origin: origin,
        })
        .then((response) => {
          console.log(response);
          updateTasks();
          el.value = '';
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('Enter not clicked');
    }
  };

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    const origin = el.getAttribute('data-id');
    axios
      .delete(`${SERVER_URL}/user/deleteTask/${origin}`)
      .then((response) => {
        console.log(response);
        updateTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        className="w-full h-full flex flex-col bg-[#121215] overflow-auto
      "
      >
        <div className="border-b border-[#848486]/20 flex justify-start items-center gap-5 w-full p-10">
          <h1 className="font-bold text-white text-2xl whitespace-nowrap">
            My Tasks
          </h1>
          <div className="w-full h-10 bg-[#2b2c2e] p-5 flex justify-between items-center rounded-lg gap-2">
            <Search className="text-white" size={15} />
            <input
              type="text"
              placeholder="Search Tasks..."
              onChange={(e) => handleSearch(e)}
              className="bg-transparent w-full outline-none text-white"
            />
          </div>
        </div>
        <div className="w-full h-full flex p-10  gap-10 items-start text-white">
          <div className="flex justify-start flex-col items-center gap-5">
            <div className="flex w-full h-10 items-center justify-between">
              <div className="flex items-center h-full gap-2">
                <h1 className="text-3xl font-bold">New Tasks</h1>
                <div className="text-main  w-[50px] h-[50px] rounded-xl flex justify-center items-center border border-main bg-[#202123] font-bold">
                  {newTaskCount}
                </div>
              </div>
              <button
                id="newBtn"
                className="text-main py-3 px-5 font-bold gap-2 rounded-xl flex justify-center items-center border border-main bg-[#202123]"
                onClick={(e) => handleClick(e)}
              >
                <Plus id="newPlus" />
                ADD
              </button>
            </div>
            <div className="flex gap-5 flex-col">
              {addTask ? (
                <div
                  className="w-full bg-bg px-5 py-2 flex justify-center items-center rounded-md"
                  draggable="true"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="flex gap-2 w-full">
                      <CheckCircle
                        color="#8D8D8D"
                        className="max-h-[50px] min-h -[50px]"
                      />
                      <input
                        type="text"
                        placeholder="Write a task name"
                        className="bg-transparent   w-full outline-none "
                        onKeyDown={(e) => handleNewKey(e)}
                        onChange={(e) => setNewTitle(e.target.value)}
                        data-origin="new-tasks"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              {tasks.length !== 0 ? (
                tasks.map((task) => {
                  if (task.origin === 'new_tasks') {
                    return (
                      <div className="tasks-content w-full bg-bg p-5 rounded-xl gap-5 flex flex-col">
                        <div className="max-w-[500px] flex justify-between items-start">
                          <div className="abc flex gap-2 justify-start items-start">
                            <CheckCircle
                              color="#8D8D8D"
                              className="min-w-[20px] max-w-[20px]"
                            />
                            <h1 onClick={(e) => handleEdit(e)}>{task.title}</h1>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <MoreVertical className="vertical" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                <span>Edit</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={(e) => handleDelete(e)}
                                data-id={task._id}
                              >
                                <Delete className="mr-2 h-4 w-4" />
                                <span>Delete</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Verified className="mr-2 h-4 w-4" />
                                <span>Set As Completed</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className="text-white/50">
                          <p>{task.date}</p>
                        </div>
                      </div>
                    );
                  }
                })
              ) : (
                <Loading />
              )}
            </div>
          </div>
          <div className="flex justify-start flex-col items-center gap-5">
            <div className="flex w-full h-10 items-center justify-between">
              <div className="flex items-center h-full gap-2">
                <h1 className="text-3xl font-bold">Completed</h1>
                <div className="text-main  w-[50px] h-[50px] rounded-xl flex justify-center items-center border border-main bg-[#202123] font-bold">
                  {completedTask}
                </div>
              </div>
              <button
                id="newBtn"
                className="text-main py-3 px-5 font-bold gap-2 rounded-xl flex justify-center items-center border border-main bg-[#202123]"
                onClick={(e) => handleClick(e)}
              >
                <Plus id="newPlus" />
                ADD
              </button>
            </div>
            <div className="flex gap-5 flex-col">
              {completeTask ? (
                <div
                  className="w-full bg-bg px-5 py-2 flex justify-center items-center rounded-md"
                  draggable="true"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="flex gap-2 w-full">
                      <CheckCircle
                        color="#8D8D8D"
                        className="max-h-[50px] min-h -[50px]"
                      />
                      <input
                        type="text"
                        placeholder="Write a task name"
                        className="bg-transparent   w-full outline-none "
                        onKeyDown={(e) => handleNewKey(e)}
                        onChange={(e) => setNewTitle(e.target.value)}
                        data-origin="completed"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              {tasks.length !== 0 ? (
                tasks.map((task) => {
                  if (task.origin === 'completed') {
                    return (
                      <div className="tasks-content w-full bg-bg p-5 rounded-xl gap-5 flex flex-col">
                        <div className="max-w-[500px] flex justify-between items-start">
                          <div className="abc flex gap-2 justify-start items-start">
                            <CheckCircle
                              color="#51bd6c"
                              className="min-w-[20px] max-w-[20px]"
                            />
                            <h1 onClick={(e) => handleEdit(e)}>{task.title}</h1>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <MoreVertical className="vertical" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                <span>Edit</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={(e) => handleDelete(e)}
                                data-id={task._id}
                              >
                                <Delete className="mr-2 h-4 w-4" />
                                <span>Delete</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Verified className="mr-2 h-4 w-4" />
                                <span>Set As Completed</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className="text-white/50">
                          <p>{task.date}</p>
                        </div>
                      </div>
                    );
                  }
                })
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksView;
