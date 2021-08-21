import { useHistory } from 'react-router-dom';

function SupportedForm() {
    // Sets useHistory to a variable
    const history = useHistory();

    // Handles click 
    const onClick = () => {
        // Sends user to Comment Form component
        history.push('/commentform')
    } // end on click
    return (
        <div id="pageFour">
            <h1>How well are you being supported?</h1>
            <input
                type="number"

            />
            <br></br>
            <button className="pageBtn" onClick={onClick}>NEXT</button>
        </div>
    )
} // end SupportedForm

export default SupportedForm;