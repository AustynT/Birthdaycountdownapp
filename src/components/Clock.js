import React, {Component } from 'react';

class Clock extends Component{
    constructor(props){
        super(props)

        this.state = {
            timeRemaining: {}
        }

    }


    render(){
        const data = this.state.timeRemaining

        return(
            <div>
                <div>DAYS {data.days}</div>
                <div>HOURS {data.hours}</div>
                <div>MINUTES {data.minutes}</div>
                <div>SECONDS {data.seconds}</div>
            </div>
        )
    }

    componentDidMount(){
        this.birthday = this.props.birthdayFormState.startDate.toString();
        alert(this.birthday)
    }
}

export default Clock;