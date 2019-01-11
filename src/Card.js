import React from 'react';
import styled from 'styled-components';

const Tile = styled.section`
    display: inline-block;
    background: #fff;
    border-radius: 2px;
    height: 300px;
    margin: 1rem;
    position: relative;
    width: 300px
    
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    :hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25),
                    0 10px 10px rgba(0,0,0,0.22);
    }
`

const Card = ({name, gender, dob}) => {
    return (
        <Tile>
            <h2>{name}</h2>
            {gender} || {dob}
        </Tile>
    )
}

export default Card;