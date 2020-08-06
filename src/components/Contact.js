import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import styles from "../styles/Modal.module.css"

const Contact = ({contact, show, onCloseContact}) => {

  return (
    <Modal show={show} size="lg" backdrop="static" onHide={onCloseContact} centered>
      <Modal.Header>
        <Modal.Title>Contact Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div>
            <p>id: {contact.id}</p>
            <p>Full name: {contact.first_name} {contact.last_name}</p>
            <p>email: {contact.email}</p>
            <p>phoneNumber: {contact.phone_number}</p>
          </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="secondary" className={styles.buttonC} onClick={onCloseContact}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    )
}

export default Contact
