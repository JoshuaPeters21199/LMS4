import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTrash } from 'react-icons/fa';

function DeleteButton({bodyText,title, noText, confirmText, iconClass,itemKey,callback}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleConfirm = () => {
        setShow(false);
        callback(itemKey);
    }

    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant='primary' onClick={handleShow}>
                <FaTrash className={iconClass} />
            </Button>
            <Modal show={show} onHide={handleClose} data-bs-theme='dark' backdrop='static'
            // className={show ? 'modal show' : 'modal hide'}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='modal-title'>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p className='modal-body'>{bodyText}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>{noText}</Button>
                    <Button variant="danger" onClick={handleConfirm}>{confirmText}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
  
export default DeleteButton;
