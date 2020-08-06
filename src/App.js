import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

import Contacts from './components/Contacts'
import Contact from './components/Contact'
import styles from "./styles/Modal.module.css"
import { COUNTRY_ALL, COUNTRY_US} from './constants'

const App = () => {
  const [showContacts, setShowContacts] = useState(true)
  const [showContactDetail, setShowContactDetail] = useState(false)
  const [activeContact, setActiveContact] = useState(null)
  
  const onSelectedActiveContact = (contact) => {
    setShowContacts(false)
    setActiveContact(contact)
    setShowContactDetail(true)
  }

  const onCloseDetail = () => {
    setShowContactDetail(false)
    setShowContacts(true)
  }

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

        {(activeContact !== null) && ( <Contact contact={activeContact} showContactDetail={showContactDetail} onCloseContact={onCloseDetail} /> )}

        <Switch>
          <Route exact path="/all-contacts">
            <Contacts title="All Contacts" countryId={COUNTRY_ALL} showContacts={showContacts} selectActiveContact={onSelectedActiveContact} />
          </Route>
          <Route exact path="/us-contacts">
            <Contacts title="US Contacts" countryId={COUNTRY_US}  showContacts={showContacts} selectActiveContact={onSelectedActiveContact} />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
