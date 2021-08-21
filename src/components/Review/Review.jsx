import { useHistory } from 'react-router-dom';

function ReviewForm() {
    // Sets useHistory to a variable
    const history = useHistory();

    // Handles click 
    const onClick = () => {
        // Sends user to Home Page component
        history.push('/home')
    } // end on click
    return (
        <div id="pageSix">
            <h1>Review Your Feedback</h1>


            <br></br>
            <button className="pageBtn" onClick={onClick}>SUBMIT</button>
        </div>
    )
} // end ReviewForm

export default ReviewForm;