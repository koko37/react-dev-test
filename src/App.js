import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

import Contacts from './components/Contacts'
import styles from "./styles/Modal.module.css"

const App = () => {
  const COUNTRY_ALL = 0
  const COUNTRY_US  = 226

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
          <Route exact path="/all-contacts">
            <Contacts title="All Contacts" countryId={COUNTRY_ALL} />
          </Route>
          <Route exact path="/us-contacts">
            <Contacts title="US Contacts" countryId={COUNTRY_US} />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
