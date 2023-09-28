import { Trash } from 'lucide-react';
import {
  ProfileContainer,
  ProfileStyling,
  ProfileImage,
  UpdatePicture,
  UpdateInfo,
  ProfileText,
  UpdateUsername,
  ImageContainer,
  SaveButton,
} from '../../../styles/settings/profile/Profile.styled';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuthHeader } from 'react-auth-kit';
import { useState } from 'react';
import SERVER_URL from '../../../config/config';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';

const ProfileSettings = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState(null);
  const [bio, setBio] = useState(null);
  const header = useAuthHeader();

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios.get(`${SERVER_URL}/user/getUser`).then((user) => {
      console.log(user.data);
      setUser(user.data);
    });
  }, []);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('profile_image', selectedFile);

    axios
      .post(`${SERVER_URL}/user/uploadProfileImage`, formData)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUsername = (event) => {
    const target = event.target.value;
    setUsername(target);
  };

  const handleBio = (event) => {
    const target = event.target.value;
    setBio(target);
  };

  const handleSaveChanges = () => {
    axios
      .post(`${SERVER_URL}/user/changeSettings`, {
        bio,
        username,
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ProfileContainer>
        <h1>Profile Picture</h1>
        <ProfileStyling>
          <ImageContainer>
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                {...{
                  src: `${SERVER_URL}/${user.profile_image}`,
                  alt: '',
                }}
              />
              <AvatarFallback>ERROR</AvatarFallback>
            </Avatar>
          </ImageContainer>
          <UpdateInfo>
            <UpdatePicture>
              <input type="file" onChange={handleFileSelect} />
              <Trash />
            </UpdatePicture>
            <p>Must be JPEG, PNG, or GIF and cannot exceed 10MB. </p>
            <button onClick={handleFormSubmit}>Save Changes</button>
          </UpdateInfo>
        </ProfileStyling>
      </ProfileContainer>

      <ProfileContainer>
        <h1>Profile Settings</h1>
        <p>Change identifying details for your account</p>
        <ProfileText>
          <h1>Username</h1>
          <UpdateUsername>
            <input
              type="text"
              placeholder={user.username}
              onChange={(e) => handleUsername(e)}
            />
            <p>You may update your username</p>
          </UpdateUsername>
        </ProfileText>
      </ProfileContainer>

      <ProfileContainer>
        <ProfileText>
          <h1>Bio</h1>
          <UpdateUsername>
            <input
              type="text"
              placeholder={user.bio}
              onChange={(e) => handleBio(e)}
            />
            <p>
              Description for the About panel on your channel page in under 300
              characters
            </p>
          </UpdateUsername>
        </ProfileText>
      </ProfileContainer>
      <SaveButton onClick={() => handleSaveChanges()}>Save Changes</SaveButton>
    </>
  );
};

export default ProfileSettings;
