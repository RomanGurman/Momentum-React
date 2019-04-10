import React from 'react';
import Nav from './nav';
import styled from 'styled-components';
import '../index.css'

const LinkWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 10px;
    padding: 10px;
    position: fixed;
    left: 5px;
`;
const Button = styled.button`
    border: none;
    background: transparent;
    font-size: 107%;
`;
export default class Link extends React.Component {
    state = {
        content: "",
        tasks: [],
        open: false
    };

    toggleOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }

    changeInput = (event) => {
        let value = event.target.value;
        this.setState({
            content: value,
            isClicked: true 
        })
    };

    addTask = (event) => {
        this.state.tasks.push({ id: Date.now(), content: this.state.content });
        this.setState({
            tasks: this.state.tasks,
            content: ""
        })
        this.changeInput(event);
    };
    deleteTask = (id) => {
        const tasks = this.state.tasks.filter((task) => task.id !== id)
        this.setState({
            tasks: tasks,
            content: ""
        })
    };
      handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          this.addTask(event);
        }
      };
    render() {
        return (
            <div>
                <LinkWrapper>
                    <div className={`nav-wrapper ${this.state.open ?'nav-wrapper--open' : null}`}>
                            <a href="https://www.google.com/" class="local">Chrome Tab</a>
                            <a href="https://accounts.google.com/" class="local2">Apps</a>
                        <div>
                            <input  onChange={this.changeInput} placeholder = "New Link"
                                    onKeyPress={this.handleKeyPress}
                                    value={this.state.content}
                            /> 
                        </div>
                        <div>
                            {
                                this.state.tasks.map((task,index) => {
                                    return (
                                        <Nav id = {task.id} key={task.id} content={task.content} 
                                        func = {this.deleteTask}  >
                                        {task.content}
                                        </Nav>
                                    )
                                })
                            }
                        </div>                                            
                    </div>  
                    <Button onClick = {this.toggleOpen}>Links</Button> 
                </LinkWrapper>
            </div>
        )
    }
}
