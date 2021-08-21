import { useHistory } from 'react-router-dom';

function ContentForm() {
    // Sets useHistory to a variable
    const history = useHistory();

    // Handles click 
    const onClick = () => {
        // Sends user to Supported Form component
        history.push('/supportedform')
    } // end on click
    return (
        <div id="pageOne">
            <h1>How well do you feel supported?</h1>
            <input
                type="number"
     
            />
            <br></br>
            <button className="pageBtn" onClick={onClick}>NEXT</button>
        </div>
    )
} // end HomePage

export default ContentForm;