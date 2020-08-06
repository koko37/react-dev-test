import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Spinner } from 'react-bootstrap'
import ContactsModal from './ContactsModal'
import CustomScrollbars from './CustomScrollbars'

import { updateCountry, updatePageNo } from '../actions/filterActions'
import { fetchContacts } from '../actions/contactsAction'

const mapStateToProps = (state) => ({
  filterState: state.filter,
  contactsState: state.contacts
})

const mapDispatchToProps = (dispatch) => ({
  setCountry: (countryId) => dispatch(updateCountry(countryId)),
  setPage: (pageNo) => dispatch(updatePageNo(pageNo)),
  fetchData: (countryId, searchKey, pageNo) => dispatch(fetchContacts(countryId, searchKey, pageNo))
})

const Contacts = ({countryId, title, showModal, contactsState, filterState, selectActiveContact, fetchData, setCountry, setPage}) => {
  useEffect(() => {
    setCountry(countryId)
    fetchData(countryId, filterState.searchKeyword, filterState.page)
  }, [])

  // callback being invoked when scroll reached to the bottom
  const onReachedToBottom = () => {
    // setPage(page ++)
  }
  
  return (
/*
    <ContactsModal title={title} isOpen={true}>
      {!contactsState.loading && !contactsState.hasErrors && (
        <CustomScrollbars onReachedBottom={onReachedToBottom} style={{height: 300}}>
          { contactsState.data.map( (contact) => 
            (<p key={contact.id}>{contact.first_name} {contact.last_name} {contact.email}</p>))}
        </CustomScrollbars>
      )}
      {contactsState.loading && (
        <center>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </center>
        
      )}
      {contactsState.hasErrors && (
        "Error!"
      )}
    </ContactsModal>
    */

    <ContactsModal title={title} isOpen={showModal}>
      <CustomScrollbars onReachedBottom={onReachedToBottom} style={{height: 300}}>
        { contactsState.data.map( (contact) => 
          ( <div key={contact.id} className="d-flex justify-content-between">
              <p>{contact.id}</p>
              <p onClick={() => selectActiveContact(contact)}><strong>{contact.first_name} {contact.last_name}</strong></p>
              <p>{contact.email}</p>
              <p>{contact.phone_number}</p>
          </div> ))}
      </CustomScrollbars>
    </ContactsModal>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
