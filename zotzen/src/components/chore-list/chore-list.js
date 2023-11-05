import './chore-list.css';
import Checkbox from '@mui/material/Checkbox';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, {useState} from 'react';

const ChoreList = () => {
    
    const [chores, setChores] = useState([
        {
            id: "wjavande",
            description: "repair electric kettle"
        },
        {
            id: "azerty",
            description: "rearrange common room furniture"
        },
        {
            id: "dvorak",
            description: "set up stereo system for dorm party"
        }

    ]);

    const [description, setDescription] = useState('');
    const [id, setId] = useState('');

    const[input, setInput] = useState({
        description: "",
        id: "",
    });

    const scription = (description) => {
        setInput({
            ...input,
            description: description,
        })
        console.log(input);
    }
    const d = (id) => {
        setInput({
            ...input,
            id: id,
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
        console.log(chores);
        setChores([...chores, 
            input
        ]);
        //console.log(reminders);
        
        console.log("keys: " + Object.keys(chores));
        console.log("Values:" + Object.values(chores));
    }



    
    return (
        <div className="chore-list">
            <div className="chore-title">
                <h2>chores</h2>
            </div>
            {chores.map((chore) => (
                <Chore id={chore.id} description={chore.description}/>
            ))}
            <Popup trigger={<IconButton color="primary"><AddCircleIcon/></IconButton>} modal nested>
                <form onSubmit={handleSubmit}>
                    <label for="description">
                        <p>Description:</p>
                        <input type="text" name="description" onChange={event => scription(event.target.value)}></input>
                    </label>
                    <label for="author">
                        <p>Author:</p>
                        <input type="text" name="id" onChange={event => d(event.target.value)}></input>
                    </label>
                    <IconButton type="submit" color="primary"><AddCircleIcon /></IconButton>
                </form>
            </Popup>
        </div>
    )
}

const Chore = (props) => {
    const [StrikeThroughCSS, setStrikeThroughCSS] = useState(false)
    return (<div className="chore">
        <Checkbox color="success" onClick={() => 
            setStrikeThroughCSS((prev) => !prev)}
        /> {/* https://mui.com/material-ui/react-checkbox/ */}
        <div className="chore-details">
            <p style={
                {
                textDecoration: StrikeThroughCSS ? "line-through" : "none"
            }}>{props.description}</p> 
            <p style={
                {
                    textDecoration: StrikeThroughCSS ? "line-through" : "none"
                }}>{props.id}</p>
        </div>
    </div> 
    );
}

export default ChoreList;
