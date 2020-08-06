import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import ContactsModal from './ContactsModal'
import CustomScrollbars from './CustomScrollbars'

import { updateCountry, updatePageNo } from '../actions/filterActions'
import { fetchContacts } from '../actions/contactsAction'

const mapStateToProps = (state) => ({
  contactsState: state.contacts,
  pageNo: state.filter.pageNo,
  searchKeyword: state.filter.searchKeyword,
  onlyEven: state.filter.isOnlyEven
})

const mapDispatchToProps = (dispatch) => ({
  setCountry: (countryId) => dispatch(updateCountry(countryId)),
  setPage: (pageNo) => dispatch(updatePageNo(pageNo)),
  fetchData: (countryId, searchKey, pageNo) => dispatch(fetchContacts(countryId, searchKey, pageNo))
})

const Contacts = ({countryId, title, showContacts, 
  pageNo, searchKeyword, onlyEven,
  contactsState, 
  selectActiveContact, 
  fetchData, setCountry, setPage}) => {
  
  useEffect(() => {
    setCountry(countryId)
    }, [])
  
  useEffect(() => {
    fetchData(countryId, searchKeyword, pageNo)
  }, [countryId, searchKeyword, pageNo])

  // callback being invoked when scroll reached to the bottom
  const onReachedToBottom = () => {
    setPage(pageNo+1)
  }
  
  var data = []
  if(onlyEven) {
    data = contactsState.data.filter(contact => contact.id % 2 === 0)
  } else {
    data = contactsState.data
  }

  return (
    <ContactsModal title={title} isOpen={showContacts} isLoading={contactsState.loading}>
      {!contactsState.hasErrors && (
        <CustomScrollbars onReachedBottom={onReachedToBottom} style={{height: 300}}>
          { data.map( (contact, id) => 
          ( <div key={id} className="d-flex" onClick={() => selectActiveContact(contact)} >
              <p className="mr-3">{contact.id}</p>
              <p className="mr-3"><strong>{contact.first_name} {contact.last_name}</strong></p>
              <p className="mr-3">{contact.email}</p>
              <p>{contact.phone_number}</p>
          </div> ))}
        </CustomScrollbars>
      )}
      {contactsState.hasErrors && (
        "Error!"
      )}
    </ContactsModal>
/*
    <ContactsModal title={title} isOpen={showContacts}>
      <CustomScrollbars onReachedBottom={onReachedToBottom} style={{height: 300}}>
        { contactsState.data.map( (contact, id) => 
          ( <div key={id} className="d-flex justify-content-between">
              <p>{contact.id}</p>
              <p onClick={() => selectActiveContact(contact)}><strong>{contact.first_name} {contact.last_name}</strong></p>
              <p>{contact.email}</p>
              <p>{contact.phone_number}</p>
          </div> ))}
      </CustomScrollbars>
    </ContactsModal>
*/    
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
