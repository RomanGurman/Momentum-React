import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
        text-align: center;
        padding: 10px;
        margin: 150px;
        line-height: 1em;
        left: 10px;
        right: 10px;
        color: white;
        font-size: 45px;
        font-weight: bold; 
        position: fixed;
`;
export default class Clock extends React.Component {
    state = {
        time: this.currentTime(),
        name: "Roman"
    }
  
    currentTime() {
        return new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
    };
    componentDidMount() {
        this.interval = setInterval(() => 
            this.setState({ 
                time: this.currentTime(),
                welcome: this.enterWelcome() 
        }), 2000)
    };

    enterWelcome() {
        const currentHour = new Date().toLocaleTimeString(navigator.language, { hour: '2-digit'});
        if (currentHour > 11 && currentHour < 19) {
            return 'afternoon';
        } else if (currentHour < 5 || currentHour > 18) {
            return 'evening';
        } else {
            return 'morning'
        }
      }
    render() {
        return (
            <div>
                <Wrapper>
                    <div>
                        <h1>{this.state.time}</h1>
                        <h3>Good {this.state.welcome}, {this.state.name}</h3>
                        <h4>What your main focus for today?</h4>
                    </div>
                </Wrapper>
            </div>
        )
    }
}
