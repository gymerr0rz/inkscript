import {
  ChevronDown,
  Cloud,
  CreditCard,
  Github,
  LifeBuoy,
  LogOut,
  Settings,
  Users,
} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthHeader, useSignOut } from 'react-auth-kit';
import SERVER_URL from '../../config/config';
import { Skeleton } from '@mui/material';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const User = () => {
  const [username, setUsername] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const header = useAuthHeader();
  const signOut = useSignOut();
  const handleTrash = () => {
    signOut();
    window.location.reload();
  };

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios.get(`${SERVER_URL}/user/getUser`).then((user) => {
      setUsername(user.data.username);
      setDisplayName(user.data.username);
      setProfilePicture(user.data.profile_image);
    });
  }, []);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex w-full justify-between px-5 items-center h-24 ">
            <div className="flex gap-2 items-center">
              <div>
                {profilePicture ? (
                  <Avatar>
                    <AvatarImage
                      {...{
                        src: `${SERVER_URL}/${profilePicture}`,
                        alt: '',
                      }}
                    />
                    <AvatarFallback>ERROR</AvatarFallback>
                  </Avatar>
                ) : (
                  <Skeleton
                    variant="circular"
                    sx={{ bgcolor: '#414040' }}
                    height="100%"
                  />
                )}
              </div>
              <div>
                <h1>{username}</h1>
              </div>
            </div>
            <ChevronDown color="#fff" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleTrash}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default User;
