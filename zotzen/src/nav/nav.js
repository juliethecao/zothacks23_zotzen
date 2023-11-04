import './nav.css';

function Nav() {
  return (
    <div className="nav">
        <div className="logo-container">
            <img className="logo-pic" src="../logo.png" alt="A perfectly generic logo"></img>
        </div>
        <div className="roommates">
            <div className="roommate">roommate 1</div> {/* component later */}
            <div className="roommate">roommate 2</div> 
            <div className="roommate">roommate 3</div> 
        </div>
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
