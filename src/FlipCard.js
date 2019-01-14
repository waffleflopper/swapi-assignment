import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: inline-block;
    width: 300px;
    height: 300px;
    perspective: 500px;
    margin: 1em;
    :hover .content {
        transform: rotateY(180deg);
        transition: transform 0.5s;
    }

    font-family: 'Acme', sans-serif;
`

const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);

    transition: transform 1s;
    transform-style: preserve-3d;
`
const FrontSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%
    width: 100%;
    background: white;
    color: #03446A;
    text-align: center;
    font-size: 50px;
    border-radius: 5px;
    backface-visibility: hidden;
`
const BackSide = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%
    width: 100%;
    background: rgb(5, 112, 173);
    color: white;
    text-align: center;
    border-radius: 5px;
    transform: rotateY(180deg);
    backface-visibility: hidden;
`

const Title = styled.div`
    display: flex;
    background: white;
    width: 100%;
    font-size: 30px;
    color: #03446A;
    justify-content: center;
    padding: .5em;
`

const BackContent = styled.div`
    flex-grow: 1;
    justify-content: left;
    padding: 1em;
    height: 100%;
    text-align: left;
    p {
        text-transform: capitalize;
    }
`

const FlipCard = (props) => {
    const data = props.data;
    //className = "content" needed for hover effect
    return (

        <Card>
            <Content className="content">
                <BackSide>
                    <Title>{data.name}</Title>
                    <BackContent>
                        <p><strong>Height:</strong> {data.height}cm</p>
                        <p><strong>Mass:</strong> {data.mass}kg</p>
                        <p><strong>Hair Color:</strong> {data.hair_color}</p>
                        <p><strong>Eye Color:</strong> {data.eye_color}</p>
                        <p><strong>Gender:</strong> {data.gender}</p>
                    </BackContent>
                </BackSide>
                <FrontSide>
                    {data.name}
                </FrontSide>
                
            </Content>
        </Card>

    );
}

export default FlipCard;