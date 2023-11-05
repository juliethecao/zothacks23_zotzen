import GoogleCalendar from '../components/calendar/GoogleCalendar';
import './home.css';
import ChoreList from '../components/chore-list/chore-list.js';
import Reminders from '../components/reminders/reminders.js';

function Home() {
  return (
    <div className="home">
      <div className="background-window"><GoogleCalendar></GoogleCalendar></div>
      <div className="right-bar">
        <ChoreList />
        <Reminders />
      </div>
    </div>
  );
}

export default Home;
