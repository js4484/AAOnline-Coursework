import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};
    }

    tick() {
        this.setState({ time: new Date() });
    }

    componentDidMount() {
        // debugger;
        const interval = setInterval(this.tick.bind(this), 1000);
        this.id = interval;

    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    

    render () {
        
        const parsedTime = (time) => {
            let pT = "";
            if (this.state.time.getHours() < 10) {
                pT += "0";
            };
                
            pT += this.state.time.getHours();
            pT += ":";
            
            if (this.state.time.getMinutes() < 10) {
                pT += "0";
            };
            pT += this.state.time.getMinutes();
            pT += ":";

            if (this.state.time.getSeconds() < 10) {
                pT += "0";
            };
            pT += this.state.time.getSeconds();

            return pT;
        };
        const output = parsedTime(this.state.time);
        const dT = "date";
        
        return (
            <div className="outer-clock">
                <div className="clock-title"><h1>Clock</h1></div>
                
                <div className="clock">
                    <div className="time">
                        <div>Time:</div>
                        <div>{output}</div> 
                    </div>
                    <div className="date">
                        <div>Date:</div>
                        <div>{dT}</div>
                    </div>
                    
                </div>
            </div>
            
        );
    }
    
}

export default Clock;