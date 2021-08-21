import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function SupportedForm() {
    // Sets useHistory to a variable
    const history = useHistory();
    // Sets useDispatch to a variable
    const dispatch = useDispatch();
    // Sets state of feeling to be transferred to reducer
    const [support, setSupport] = useState('');

    // Grabs user data 
    const handleInputChange = (event) => {
        setSupport(event.target.value)
    }; // end handleInputChange

    // Handles click 
    const onClick = () => {
        if (isNaN(support) || support < 1 || support > 5) {
            alert("Input not valid");
            return;
        }
        dispatch({
            type: "ADD_SUPPORT",
            payload: support
        });

        // Sends user to Comment Form component
        history.push('/commentform')
    } // end on click
    return (
        <div id="pageFour">
            <h1>How well are you being supported?</h1>
            <input
                type="number"
                value={support}
                onChange={handleInputChange}

            />
            <br></br>
            <button className="pageBtn" onClick={onClick}>NEXT</button>
        </div>
    )
} // end SupportedForm

export default SupportedForm;