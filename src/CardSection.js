import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Section = styled.section`
    text-align: center;
`

const CardSection = ({people}) => {
    console.log("cardSection", people);
    const cardData = people.map((person, i) => {
        return (<Card 
        key={i}
        name={people[i].name}
        gender={people[i].gender}
        dob={people[i].birth_year}
        />);
    })


    return (
        <Section>
            {cardData}
        </Section>
    );
}

export default CardSection;