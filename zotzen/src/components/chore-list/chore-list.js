import './chore-list.css'
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
    
    return (
        <div className="chore-list">
            {chores.map((chore) => (
                <div className="chore">
                    <input type="checkbox"></input>    
                    <div className="chore-details">
                        <p>{chore.description}</p> 
                        <p>{chore.id}</p>
                    </div>
                </div> 
            ))}
        </div>
    )
}

export default ChoreList;