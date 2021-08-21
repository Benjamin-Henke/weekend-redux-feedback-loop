import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function CommentForm() {
    // Sets useHistory to a variable
    const history = useHistory();
    // Sets useDispatch to a variable
    const dispatch = useDispatch();
    // Sets state of feeling to be transferred to reducer
    const [comment, setComment] = useState('');

    // Grabs user data 
    const handleInputChange = (event) => {
        setComment(event.target.value)
    }; // end handleInputChange

    // Handles click 
    const onClick = () => {
        dispatch({
            type: "ADD_COMMENT",
            payload: comment
        })
        // Sends user to Review component
        history.push('/review')
    } // end on click
    return (
        <div id="pageFive">
            <h1>Any comments you want to leave?</h1>
            <input
                type="text"
                placeholder="Comments"
                value={comment}
                onChange={handleInputChange}

            />
            <br></br>
            <button className="pageBtn" onClick={onClick}>NEXT</button>
        </div>
    )
} // end SupportedForm

export default CommentForm;