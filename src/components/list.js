import React from 'react';
import Task from './task';
import styled from 'styled-components';
import '../index.css'

const ListWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 10px;
    padding: 10px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    cursor: pointer;
`;
const Button = styled.button`
    border: none;
    background: transparent;
    font-size: 107%;
`;
export default class List extends React.Component {
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
                <ListWrapper>
                    <div className={`task-wrapper ${this.state.open ?'task-wrapper--open' : null}`}>
                            <p>No todos yet</p>
                            <p>Add a todo to get started</p>
                        <div>
                            <input  onChange={this.changeInput} placeholder = "New ToDo"
                                    onKeyPress={this.handleKeyPress}
                                    value={this.state.content}
                            /> 
                        </div>
                        <div>
                            {
                                this.state.tasks.map((task,index) => {
                                    return (
                                        <Task id = {task.id} key={task.id} content={task.content} 
                                        func = {this.deleteTask}  >
                                        {task.content}
                                        </Task>
                                    )
                                })
                            }
                        </div>                                            
                    </div>  
                    <Button onClick = {this.toggleOpen}>toDo</Button> 
                </ListWrapper>
            </div>
        )
    }
}
