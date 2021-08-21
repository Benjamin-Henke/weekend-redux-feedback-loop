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
            <h1>Click START to begin the survey.</h1>
            <button className="pageBtn" onClick={onClick}>START</button>
        </div>
    )
} // end HomePage

export default HomePage;