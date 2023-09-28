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
      <TasksContent className="tasks-content" key={i}>
        <TasksMenu>
          <div className="abc">
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
        </TasksMenu>
        <TasksDate>
          <Skeleton
            variant="text"
            sx={{ fontSize: '1rem', bgcolor: '#414040' }}
            width="300px"
            animation="wave"
          />
        </TasksDate>
      </TasksContent>
    );
  }

  return tasksContent;
};

export default Loading;
