import React from 'react';
import styled from 'styled-components';
import List from './list';
import Clock from './clock';
import Focus from './focus';
import Link from './link';
// import Toggler from './toggler';


const WrapperPicture = styled.div`
    height: 100vh;
    width: 100vw;
    background: url("https://images.pexels.com/photos/188029/pexels-photo-188029.jpeg?cs=srgb&dl=albania-bay-beach-188029.jpg&fm=jpg") no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
`;

// const Desktop = styled.div`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     margin-top: -350px;
//     margin-left: -350px;
//     display: flex;
//     flex-direction: column;
//     justify-content:center;
//     align-items: center;
//     width: 650px;
//     height: 650px;
//     overflow: hidden;
// `

export default class Wrapper extends React.Component {
    state = {

    };
    render() {
        return (
            <WrapperPicture>
                <Focus />
                <Clock />
                <List />
                <Link />
                {/* <Toggler /> */}
            </WrapperPicture>

        )
    }
}