import React from 'react';
import styled from 'styled-components';
import FlipCard from './FlipCard';

const Section = styled.section`
    text-align: center;
`

const CardSection = (props) => {
    const people = props.people;
    const cardData = people.map((person, i) => {
        return (<FlipCard 
        key={i}
        data={people[i]}
        />);
    })


    return (
        <Section>
            {cardData}
        </Section>
    );
}

export default CardSection;