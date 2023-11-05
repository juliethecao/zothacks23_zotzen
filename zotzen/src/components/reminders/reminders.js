import './reminders.css'
const Reminders = () => {
    let reminders = [
        {
            description: "Fix door to 3rd floor",
            author: "Phil"
        },
        {
            description: "Install fan in kitchen",
            author: "Tsunami"
        }
    ];

    return (
        <div className="reminders">
            <div className="reminders-title">
                <h2>reminders</h2>
            </div>
            {reminders.map((reminder) => (
                <div className="reminder">
                    <p>{reminder.description} - {reminder.author}</p>
                </div>
            ))}       
        </div>
    );
}

export default Reminders;