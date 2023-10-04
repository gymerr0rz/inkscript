import { Skeleton } from '@mui/material';
import {
  TasksContent,
  TasksDate,
  TasksMenu,
} from '../../styles/tasks/TasksView.styled';
import { CheckCircle } from 'lucide-react';

const Loading = () => {
  const tasksContent = [];

  for (let i = 0; i < 4; i++) {
    tasksContent.push(
      <div
        className="tasks-content w-full bg-bg p-5 rounded-xl gap-5 flex flex-col"
        key={i}
      >
        <div className="flex">
          <div className="flex gap-2">
            <Skeleton variant="circular" sx={{ bgcolor: '#414040' }}>
              <CheckCircle color="#8D8D8D" />
            </Skeleton>
            <Skeleton
              variant="text"
              sx={{ fontSize: '1rem', bgcolor: '#414040' }}
              width="300px"
              animation="wave"
            />
          </div>
        </div>
        <div>
          <Skeleton
            variant="text"
            sx={{ fontSize: '1rem', bgcolor: '#414040' }}
            width="300px"
            animation="wave"
          />
        </div>
      </div>
    );
  }

  return tasksContent;
};

export default Loading;
