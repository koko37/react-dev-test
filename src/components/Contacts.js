import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ContactsModal from './ContactsModal'
import CustomScrollbars from './CustomScrollbars'

import { updateCountry, updatePageNo } from '../actions/filterActions'
import { fetchContacts } from '../actions/contactsAction'

const mapStateToProps = (state) => ({
  page: state.filter.pageNo,
  searchKeyword: state.filter.searchKeyword,
  isOnlyEven: state.filter.isOnlyEven,
  
  contacts: state.contacts.data,
  loading: state.contacts.loading,
  hasErrors: state.contacts.hasErrors,
})

const mapDispatchToProps = (dispatch) => ({
  setCountry: (countryId) => dispatch(updateCountry(countryId)),
  setPage: (pageNo) => dispatch(updatePageNo(pageNo)),
  fetchData: (countryId, searchKey, pageNo) => dispatch(fetchContacts(countryId, searchKey, pageNo))
})

const Contacts = ({countryId, title, contacts, page, searchKeyword, isOnlyEven, loading, hasErrors, fetchData, setCountry, setPage}) => {
  useEffect(() => {
    setCountry(countryId)
    
    fetchData(countryId, searchKeyword, page)
  }, [])

  // callback being invoked when scroll reached to the bottom
  const onReachedToBottom = () => {
    // setPage(page ++)
  }

  return (
    <ContactsModal title={title} isOpen={true}>
      {!loading && !hasErrors && (
        <CustomScrollbars onReachedBottom={onReachedToBottom} style={{height: 300}}>
          { contacts.map( (contact) => 
            (<p key={contact.id}>{contact.first_name} {contact.last_name} {contact.email}</p>))}
        </CustomScrollbars>
      )}
      {loading && (
        "Loading..."
      )}
      {hasErrors && (
        "Error!"
      )}
    </ContactsModal>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
