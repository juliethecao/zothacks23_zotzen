import './nav.css';
import Roommate from '../components/roommate/roommate.js';

function Nav() {
  return (
    <div className="nav">
        <div className="logo-container">
            <img className="logo-pic" src="../logo.png" alt="A perfectly generic logo"></img>
        </div>
          <Roommate></Roommate>
        <div className="profile">
            <div>me, myself, and i</div>
            {/* Profile pic */}
            {/* Username */}
            {/* Maybe some selectable Status symbols */}
        </div>
    </div>
  );
}

export default Nav;
