import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Button from './Button';

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


class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            modalOn: false
        }
    }

    showModal = () => {
        this.setState({modalOn: true});
    }
    
    hideModal = () => {
        this.setState({modalOn: false});
    }

    render() {
        const {name, gender, dob} = this.props;
        return (
            <Tile>
                <Modal show={this.state.modalOn} handleClose={this.hideModal}>
                    <h1>{name}</h1>
                    <p><strong>DOB: </strong>{dob}</p>
                    <p><strong>Gender: </strong>{gender}</p>
                </Modal>
                <h2>{name}</h2>
                <Button type="button" onClick={this.showModal}>open</Button>
            </Tile>
    
        );
    }
}

export default Card;