import React from 'react';
import styled from 'styled-components';

 const MaterialButton = styled.button`
    position: relative;
    display: block;
    margin: 30px auto;
    overlfow: hidden;

    border-width: 0;
    outline: none;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.6);

    background-color: #2ecc71;
    color: #ecf0f1;

    transition: background-color .3s;

    :hover, :focus {
        background-color: #27ae60;
    }

    * {
        position: relative
    }

     span {
        display: block
        padding: 12px 24px
    }

    :before {
        content: "";

        position: absolute;
        top: 50%;
        left: 50%;

        display: block;
        width: 0;
        padding-top: 0;

        border-radius: 100%;

        background-color: rgba(236, 240, 241, .3);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    :active:before {
        width: 120%;
        padding-top: 120%;
        
        transition: width .2s ease-out, padding-top .2s ease-out;
    }
 `


 const Button = ({children, onClick}) => {
     return (
        <MaterialButton onClick={onClick}><span>{children}</span></MaterialButton>
     );
 }

 export default Button;