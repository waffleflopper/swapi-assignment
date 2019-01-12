import React from 'react';
import './Modal.css';
import Button from './Button';

const Modal = ({handleClose, show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <Button onClick={handleClose}>close</Button>
            </section>
        </div>
    );
}


export default Modal