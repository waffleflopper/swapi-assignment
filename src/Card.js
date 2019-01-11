import React from 'react';
import styled from 'styled-components';

const Tile = styled.section`
    display: inline-block;
    margin: 1.5em;
    padding: .5em;
    
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