import React from 'react';
import './Table.css';
import styled from 'styled-components';
import Modal from './Modal';
import Button from './Button';

const Padding = styled.section`
    width: 100%;
    height: 100%;
    margin-top: 4em;
`


const Table = (props) => {
    const people = props.people;
    const tableData = people.map((p, i) => {
        return (
            
            <tr>
                <td>{people[i].name}</td>
                <td>{people[i].gender}</td>
                <td><Button type="button" onClick="">More</Button></td>
            </tr>
        )
    });

    return(
        <Padding>
        <table className=".responsive-table">
            <thead>
                <th>Name</th>
                <th>Gender</th>
                <th>...</th>
            </thead>
            {tableData}
        </table>
        </Padding>
        //Tablehead

        //iterated rows

    );
}

export default Table;