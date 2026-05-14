import React from "react";

const SecondsCounter = (props) => {
    const unit = Math.floor(props.seconds / 1) % 10;
    const ten = Math.floor(props.seconds / 10) % 10;
    const hundred = Math.floor(props.seconds / 100) % 10;
    const thousand = Math.floor(props.seconds / 1000) % 10;
    const tenThousand = Math.floor(props.seconds / 10000) % 10;
    const hundredThousand = Math.floor(props.seconds / 100000) % 10;

    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="six">{hundredThousand}</div>
            <div className="five">{tenThousand}</div>
            <div className="four">{thousand}</div>
            <div className="three">{hundred}</div>
            <div className="two">{ten}</div>
            <div className="one">{unit}</div>
        </div>
    );
};

export default SecondsCounter;