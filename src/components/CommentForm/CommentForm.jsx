import { useHistory } from 'react-router-dom';

function CommentForm() {
    // Sets useHistory to a variable
    const history = useHistory();

    // Handles click 
    const onClick = () => {
        // Sends user to Review component
        history.push('/review')
    } // end on click
    return (
        <div id="pageFive">
            <h1>Any comments you want to leave?</h1>
            <input
                type="text"
                placeholder="Comments"

            />
            <br></br>
            <button className="pageBtn" onClick={onClick}>NEXT</button>
        </div>
    )
} // end SupportedForm

export default CommentForm;