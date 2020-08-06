import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import ContactsModal from './components/ContactsModal'

import styles from "./styles/Modal.module.css"

const ModalA = () => {
  return (
    <ContactsModal title="All Contacts" isOpen={true}>
      All Contacts will be here.
    </ContactsModal>
  )
}

const ModalB = () => {
  return (
    <ContactsModal title="US Contacts" isOpen={true}>
      US Contacts will be here.
    </ContactsModal>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Container className="text-center">
        <Link to="/all-contacts">
          <Button variant="primary" className={styles.buttonA}>
            All Contacts
          </Button>
        </Link>
        <Link to="/us-contacts">
          <Button variant="primary" className={styles.buttonB}>
            US Contacts
          </Button>
        </Link>

        <Switch>
          <Route exact path="/all-contacts" component={ModalA} />
          <Route exact path="/us-contacts" component={ModalB} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
