import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function ContentForm() {
    // Sets useHistory to a variable
    const history = useHistory();
    // Sets useDispatch to a variable
    const dispatch = useDispatch();
    // Sets state of feeling to be transferred to reducer
    const [content, setContent] = useState('');

    // Grabs user data 
    const handleInputChange = (event) => {
        setContent(event.target.value)
    }; // end handleInputChange

    // Handles click 
    const onClick = () => {
        if (isNaN(content) || content < 1 || content > 5) {
            alert("Input not valid");
            return;
        }
        dispatch({
            type: "ADD_CONTENT",
            payload: content
        });

        // Sends user to Supported Form component
        history.push('/supportedform')
    } // end on click
    return (
        <div id="pageThree">
            <h1>How well are you understanding the content?</h1>
            <input
                type="number"
                value={content}
                onChange={handleInputChange}
            />
            <br></br>
            <button className="pageBtn" onClick={onClick}>NEXT</button>
        </div>
    )
} // end ContentForm

export default ContentForm;