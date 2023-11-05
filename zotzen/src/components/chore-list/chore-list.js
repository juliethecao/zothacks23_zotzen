import { useState } from "react";
import './chore-list.css';
import Checkbox from '@mui/material/Checkbox';
const ChoreList = () => {
    let chores = [
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
    ];
    
    ;
    
    return (
        <div className="chore-list">
            <div className="chore-title">
                <h2>chores</h2>
            </div>
            {chores.map((chore) => (
                <Chore id={chore.id} description={chore.description}/>
            ))}
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
