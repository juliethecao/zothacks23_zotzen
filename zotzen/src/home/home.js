// import GoogleCalendar from '../components/calendar/GoogleCalendar';
import ChoreList from '../components/chore-list/chore-list.js';
import Reminders from '../components/reminders/reminders.js';
import './home.css';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Home() {
  const [input, setInput] = useState('');
  const [stickies, setStickies] = useState([]);

  const handleInput = event => {
    const {name, value} = event.target;
    setInput(value);
    console.log(name, value, input);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hiaofajlsdkfjasd")
    console.log(stickies);
    setStickies([...stickies, input]);
    console.log(stickies);
  }

  return (
    <div className="home">
      {/* <div className="background-window"><GoogleCalendar></GoogleCalendar></div> */}
      <div className="background-window">
        <h2>feed</h2>
        <form class="submission" onSubmit={handleSubmit}>
          <TextField class="textfield" placeholder="type a message" onChange={handleInput} fullWidth></TextField>
          <Button class="stickybutton" type="submit" variant="contained" color="success">submit</Button>
        </form>
        <div class="stickies">
          {stickies.toReversed().map((sticky) => (
            <Card class="sticky">
              <CardContent>
                {sticky}
              </CardContent>
            </Card>
          ))} 
        </div>
      </div> 
      {/* var label = document.createElement("Label");
    label.innerHTML = "New label"; */}
      <div className="right-bar">
        <ChoreList />
        <Reminders />
      </div>
    </div>
  );
}

export default Home;
