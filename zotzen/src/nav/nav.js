import './nav.css';
import Roommate from '../components/roommate/roommate.js';
import Profile from '../components/profile/profile.js';

function Nav() {
  return (
    <div className="nav">
        <div className="logo-container">
            <img className="logo-pic" src="../logo.png" alt="A perfectly generic logo"></img>
            <div className="zotzen">
                  zotzen
              </div>
        </div>
          <Roommate></Roommate>
        <div className="profile">
            <Profile></Profile>
        </div>
    </div>
  );
}

export default Nav;
