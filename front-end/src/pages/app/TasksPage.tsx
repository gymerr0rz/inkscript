import TasksView from '../../components/tasks/TasksView';
import { NotesContainer } from '../../styles/notes/NotesPage.styled';

const TasksPage = () => {
  return (
    <>
      <NotesContainer>
        {/* <Navbar /> */}
        <TasksView />
      </NotesContainer>
    </>
  );
};

export default TasksPage;
