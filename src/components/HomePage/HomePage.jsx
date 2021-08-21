import {useHistory} from 'react-router-dom';

function HomePage () {
    // Sets useHistory to a variable
    const history = useHistory();

    // Handles click 
    const onClick = () => {
        // Sends user to Feeling Form component
        history.push('/feelingform')
    } // end on click
    return (
        <div id="pageOne">
            <h2>Please use 1 through 5 to describe your feedback.</h2>
            <h2>1 feeling less strongly, 5 feeling most strongly.</h2>
            <br></br>
            <h3>Click START to begin the survey.</h3>
            <button className="pageBtn" onClick={onClick}>START</button>
        </div>
    )
} // end HomePage

export default HomePage;