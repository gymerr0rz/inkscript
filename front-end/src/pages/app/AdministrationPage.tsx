import SettingsPage from '../../components/settings/SettingsView';
import { NotesContainer } from '../../styles/notes/NotesPage.styled';

const AdministrationPage = () => {
  return (
    <>
      <NotesContainer>
        {/* <Navbar /> */}
        <SettingsPage />
      </NotesContainer>
    </>
  );
};

export default AdministrationPage;
