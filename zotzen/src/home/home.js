import GoogleCalendar from '../components/calendar/GoogleCalendar';
import './home.css';
import ChoreList from '../components/chore-list/chore-list.js'

function Home() {
  return (
    <div className="home">
      <ChoreList></ChoreList>
      <GoogleCalendar></GoogleCalendar>
    </div>
  );
}

export default Home;
