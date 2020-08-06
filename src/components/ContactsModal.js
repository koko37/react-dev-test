import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Modal, Form } from 'react-bootstrap'

import { updateSearchKeyword, updateEvenFilter } from '../actions/filterActions'

import styles from "../styles/Modal.module.css"

const mapStateToProps = (state) => ({
  searchKeyword: state.filter.searchKeyword,
  isOnlyEven: state.filter.isOnlyEven
})

const mapDispatchToProps = (dispatch) => ({
  updateSearch: (s) => dispatch(updateSearchKeyword(s)),
  updateOnlyEvenFilter: (b) => dispatch(updateEvenFilter(b))
})

const ContactsModal = ({title, isOpen, searchKeyword, isOnlyEven, updateSearch, updateOnlyEvenFilter, children}) => {
  const [openState, setOpenState] = useState(isOpen)
  const handleCloseModal = () => setOpenState(false)
  const onSearchKeyChange = (e) => updateSearch(e.target.value)
  const onFilterEvenChange = (e) => updateOnlyEvenFilter(e.target.checked)
  
  return (
    <Modal show={isOpen} size="lg" backdrop="static" onHide={handleCloseModal} centered>
      <Modal.Header className="d-flex justify-content-between align-items-center">
        <Modal.Title>{title}</Modal.Title>
        <Form>
          <Form.Control type="text" placeholder="Search contacts" value={searchKeyword} onChange={onSearchKeyChange}/>
        </Form>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Form.Check type="checkbox" label="Only even" checked={isOnlyEven} onChange={onFilterEvenChange}/>
        <div>
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
          <Link to="/">
            <Button variant="secondary" className={styles.buttonC}>
              Close
            </Button>
          </Link>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsModal)
