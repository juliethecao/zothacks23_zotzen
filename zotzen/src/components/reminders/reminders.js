import './reminders.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, {useState} from 'react';
const Reminders = () => {
    const [reminders, setReminders] = useState([
        {
            description: "Fix door to 3rd floor",
            author: "Phil"
        },
        {
            description: "Install fan in kitchen",
            author: "Tsunami"
        }
    ]);

    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');

    const[input, setInput] = useState({
        description: "",
        author: "",
    });

    const scription = (description) => {
        setInput({
            ...input,
            description: description,
        })
        console.log(input);
    }
    const thor = (author) => {
        setInput({
            ...input,
            author: author,
        }); //this is probably wrong
        console.log(input);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // this.reminders.push({
        //     description: event.target.description,
        //     author: event.target.author,
        // });
        console.log("Yo, is this even getting through");
        console.log(reminders);
        setReminders([...reminders, 
            input
        ]);
        //console.log(reminders);
        
        console.log("keys: " + Object.keys(reminders));
        console.log("Values:" + Object.values(reminders));
    }


    return (
        <div className="reminders">
            <div className="reminders-title">
                <h2>reminders</h2>
            </div>
            <div className="reminders-list">
            {reminders.map((reminder) => (
                <div className="reminder">
                    <p>{reminder.description} - {reminder.author}</p>
                </div>
            ))}       
            </div>
            <Popup trigger={<IconButton color="primary"><AddCircleIcon /></IconButton>} modal nested>
                <form onSubmit={handleSubmit}>
                    <label for="description">
                        <p>Description:</p>
                        <input type="text" name="description" onChange={event => scription(event.target.value)}></input>
                    </label>
                    <label for="author">
                        <p>Author:</p>
                        <input type="text" name="author" onChange={event => thor(event.target.value)}></input>
                    </label>
                    <IconButton type="submit" color="primary"><AddCircleIcon /></IconButton>
                </form>
            </Popup>
        </div>
    );
}



export default Reminders;