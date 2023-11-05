import './roommate.css';

function Roommate() {
  return (
    <div className = "roommates">
	<div className = "roommateOne-container roommatecontainer">
    	Lauren
      <img className="status" src="../status_sleep.png" alt="a status"></img>
    </div>
    <div className = "roommateTwo-container roommatecontainer">
    	Denise  
      <img className="status" src="../status_sleep.png" alt="a status"></img>
    </div>
    <div className = "roommateThree-container roommatecontainer">
    	Pitbull
      <img className="status" src="../status_sleep.png" alt="a status"></img>
    </div>
</div>
  );
}

export default Roommate;
