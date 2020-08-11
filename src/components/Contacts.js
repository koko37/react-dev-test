import React, { useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import ContactsModal from './ContactsModal'
import CustomScrollbars from './CustomScrollbars'
import { updateCountry, incrementPageNo } from '../actions/filterActions'
import { fetchContacts } from '../actions/contactsAction'

const getContacts = (state) => state.contacts.data
const evenFilter = (state) => state.filter.isOnlyEven
const filterEvenContacts = createSelector(
  [getContacts, evenFilter],
  (contacts, onlyEven) => {
    if(onlyEven) return contacts.filter(contact => contact.id % 2 === 0)
    return contacts
  }
)

const mapStateToProps = (state) => ({
  contactsState: state.contacts,
  contactsData: filterEvenContacts(state),
  pageNo: state.filter.pageNo,
  searchKeyword: state.filter.searchKeyword,
  loading: state.contacts.loading,
  hasErrors: state.contacts.hasErrors
})

const mapDispatchToProps = (dispatch) => ({
  setCountry: (countryId) => dispatch(updateCountry(countryId)),
  nextPage: () => dispatch(incrementPageNo()),
  fetchData: (countryId, searchKey, pageNo) => dispatch(fetchContacts(countryId, searchKey, pageNo))
})

const Contacts = ({countryId, title, showContacts, 
  pageNo, searchKeyword, contactsData,
  loading, hasErrors,
  selectActiveContact, 
  fetchData, setCountry, nextPage}) => {
  
  const setCountryCallback = useCallback(() => setCountry(countryId), [countryId, setCountry])
  useEffect(() => {
    setCountryCallback()
  }, [setCountryCallback])
  
  useEffect(() => {
    fetchData(countryId, searchKeyword, pageNo)
  }, [countryId, searchKeyword, pageNo, fetchData])

  // callback being invoked when scroll reached to the bottom
  const onReachedToBottom = useCallback(() => {
    nextPage()
  }, [nextPage])

  return (
    <ContactsModal title={title} isOpen={showContacts} isLoading={loading}>
      {!hasErrors && (
        <CustomScrollbars onReachedBottom={onReachedToBottom} style={{height: 300}}>
          { contactsData.map( (contact, id) => 
          ( <div key={id} className="d-flex" onClick={() => selectActiveContact(contact)} >
              <p className="mr-3">{contact.id}</p>
              <p className="mr-3"><strong>{contact.first_name} {contact.last_name}</strong></p>
              <p className="mr-3">{contact.email}</p>
              <p>{contact.phone_number}</p>
          </div> ))}
        </CustomScrollbars>
      )}
      {hasErrors && (
        "Error!"
      )}
    </ContactsModal>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
