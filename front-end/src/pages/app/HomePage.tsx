import HomeView from '../../components/home/HomeView';
import { NotesContainer } from '../../styles/notes/NotesPage.styled';

const HomePage = () => {
  return (
    <>
      <NotesContainer>
        {/* <Navbar /> */}
        <HomeView />
      </NotesContainer>
    </>
  );
};

export default HomePage;
