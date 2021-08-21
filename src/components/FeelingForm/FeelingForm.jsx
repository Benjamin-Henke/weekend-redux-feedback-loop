import {useState} from 'react';
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';

function FeelingForm() {
    // Sets useHistory to a variable
    const history = useHistory();
    // Sets useDispatch to a variable
    const dispatch = useDispatch();
    // Sets state of feeling to be transferred to reducer
    const [feeling, setFeeling] = useState('');

    // Grabs user data 
    const handleInputChange = (event) => {
        setFeeling(event.target.value)
    }; // end handleInputChange

    // Handles click 
    const onClick = () => {
        dispatch({
            type: "ADD_FEELING",
            payload: feeling
        });

        // Sends user to Content Form component
        history.push('/contentform');
    } // end on click
    return (
        <div id="pageTwo">
            <h1>How are you feeling today?</h1>
            <input
            type = "number"
            value={feeling}
            onChange={handleInputChange}
            />
            <br></br>
            <button className="pageBtn" onClick={onClick}>NEXT</button>
        </div>
    )
} // end FeelingForm

export default FeelingForm;