import React from 'react';
import styled from 'styled-components';
import CreateList from './createList';


const FocusWrapper  = styled.div`
    display: block;
    margin-right: 550px;
    margin-bottom: 40px;
    padding: 30px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 40px;
    color: white;
    line-height: 0.1em;
    text-align: center;
`;


const Input = styled.input`
    border: none;
    border-bottom: 2px solid lightgrey;
    width: 450px;
    background: transparent;
    position: fixed;
    padding-bottom: 6px;
    bottom: 10%;
    right: 33%;
    text-align: center;
`;


export default class Focus extends React.Component {
    state = {
        content: "",
        tasks: [],
    };
    
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
                <FocusWrapper>
                    <div>
                            {
                                this.state.tasks.map((task, index) => {
                                    return (
                                        <CreateList id = {task.id} key = {task.id} content = {task.content}  
                                        func = {this.deleteTask} >
                                            {task.content}
                                        </CreateList>
                                    )
                                })
                            }
                            </div>
                    <p>{this.state.name}</p>
                    <Input type="text"
                        onChange={this.changeInput}
                        onKeyPress={this.handleKeyPress}
                        value={this.state.content}
                    // style ={{background: "transparent",
                    // top:"0px",
                    // left:"0px",
                    // right:"0px",
                    // color: "inherit",
                    // width: "700px",
                    //     }}
                    />
                     <div className="container">
                    <p className="text-move">“Today's accomplishments were yesterday's impossibilities.”</p>
                    </div>
                </FocusWrapper>
            </div>
        )
    }
}