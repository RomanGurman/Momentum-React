import React from 'react';
import styled from 'styled-components';
import '../index.css'

const NavWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`;
export default class Nav extends React.Component {
    state = {

    };
    handleChange({target}){
        if (target.checked){
            target.setAttribute('checked', true);
            target.parentNode.style.textDecoration = "line-through";
        } else {
            target.removeAttribute('checked');
            target.parentNode.style.textDecoration = "";
        }
    }
    render() {
        return (
            <div>
                <NavWrapper>
                <div>
                  <input type='checkbox'
                           onClick={this.handleChange}></input>
                    <span>{this.props.content}</span>
                </div>
                <div>
                    <button onClick={() => {this.props.func(this.props.id)}  } >+</button>
            </div>
            </NavWrapper>
            </div>
        )
    }
}
