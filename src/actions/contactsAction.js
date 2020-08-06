import axios from 'axios'
import {
  GET_CONTACTS, 
  GET_CONTACTS_SUCCESS, 
  GET_CONTACTS_FAILURE, 
  RESET_CONTACTS, 
  AUTH_TOKEN,
  DEFAULT_COMPANY_ID } from '../constants'

export const getContacts = () => ({type: GET_CONTACTS})
export const getContactsSuccess = (contacts) => ({type: GET_CONTACTS_SUCCESS, payload: contacts})
export const getContactsFailure = () => ({type: GET_CONTACTS_FAILURE})
export const resetContacts = () => ({type: RESET_CONTACTS})


export function fetchContacts(countryId, queryStr, pageNo) {
  return async dispatch => {
    if(pageNo === 1) dispatch(resetContacts())
    dispatch(getContacts())

    const params = {
      companyId: DEFAULT_COMPANY_ID,
      page: pageNo,
    }
    const config = {
      headers: { Authorization: `Bearer ${AUTH_TOKEN}`},
      params: params
    }

    console.log(config);
    try {
      const response = await axios.get('https://api.dev.pastorsline.com/api/contacts.json', config)
      console.log(response.json())
    } catch(error) {
      dispatch(getContactsFailure())
    }
  }
}
