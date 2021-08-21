import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewForm() {
    // Sets useHistory to a variable
    const history = useHistory();
    // Sets useDispatch to a variable
    const dispatch = useDispatch();

    // Grab data from the store
    const feelingForm = useSelector(store => store.feelingReducer);

    // Handles click 
    const onClick = () => {
        // Sends user to Home Page component
        history.push('/home')

        // Clears user data
        dispatch({
            type: "ON_SUBMIT"
        })
    } // end on click
    return (
        <div id="pageSix">
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feelingForm}</p>
            <p>Understanding:</p>
            <p>Support:</p>
            <p>Comments:</p>


            <br></br>
            <button className="pageBtn" onClick={onClick}>SUBMIT</button>
        </div>
    )
} // end ReviewForm

export default ReviewForm;