import React from 'react';
import styled from 'styled-components';


const StickyNav = styled.div`
    display: block;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 90x;
    width: 100%;
    background: #03446A;
    z-index: 2;
    padding-left: 10px;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.1);

    color: white;
    font-size: 80px;
    font-family: 'Anton', sans-serif;
`


const TopNav = () => {
    return (
        <StickyNav>Zero To Mastery: Star Wars API</StickyNav>
    );
}

export default TopNav;