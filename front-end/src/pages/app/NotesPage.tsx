import NotesView from '../../components/notes/NotesView';
import Navbar from '../../components/navbar/Navbar';
import { NotesContainer } from '../../styles/notes/NotesPage.styled';

const NotesPage = () => {
  return (
    <>
      <NotesContainer>
        {/* <Navbar /> */}
        <NotesView />
      </NotesContainer>
    </>
  );
};

export default NotesPage;
