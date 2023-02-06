import axios from 'axios';

const tokens = {
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY0NzYxOTA3MSwianRpIjoiY2E5MDg1YjllNzEwNDVjMmFiYjEzMGI0MTgyNzcyYzEiLCJ1c2VyX2lkIjoyfQ.fE7NOm_-jS6NDcxfkP1UCPlOOht7aZpw2ySfE9tJvrU",
  "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3NjE5MDcxLCJqdGkiOiI2ZDU3ODM3MWU5ZTM0NDg2ODIxODY5MDNhYTE1NzVkZCIsInVzZXJfaWQiOjJ9.6mngpbRMvHMlFvJMcXzQX_urQadzaVAZVTZRowt2NsE"
}

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `JWT ${tokens.access}`
  }
})


export default instance;