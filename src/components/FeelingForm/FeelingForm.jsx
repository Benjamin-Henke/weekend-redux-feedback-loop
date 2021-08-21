import { useHistory } from 'react-router-dom';

function FeelingForm() {
    // Sets useHistory to a variable
    const history = useHistory();

    // Handles click 
    const onClick = () => {
        // Sends user to Content Form component
        history.push('/contentform')
    } // end on click
    return (
        <div id="pageTwo">
            <h1>How are you feeling today?</h1>
            <input
            type = "number"
            />
            <br></br>
            <button className="pageBtn" onClick={onClick}>NEXT</button>
        </div>
    )
} // end FeelingForm

export default FeelingForm;