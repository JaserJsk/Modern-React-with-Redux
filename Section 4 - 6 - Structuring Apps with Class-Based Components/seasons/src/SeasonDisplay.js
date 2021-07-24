import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    // The 'summer' and 'winter' must be the same as in getSeason() method!
    summer: {
        text: 'Lets hit the beach!',
        iconImg: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly!',
        iconImg: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconImg} = seasonConfig[season];

    return (
        <div className={ `season-display ${season}` }>
            <i className={`icon-left massive ${iconImg} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconImg} icon`} />
        </div>
    );
};

export default SeasonDisplay;