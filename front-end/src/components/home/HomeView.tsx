import Pomodoro from '../pomodoro/Pomodoro';
import Weather from '../weather/Weather';

const HomeView = () => {
  return (
    <div className=" p-6 grid grid-cols-3 gap-5">
      <Weather />
      <Pomodoro />
    </div>
  );
};

export default HomeView;
