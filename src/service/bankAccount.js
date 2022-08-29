import axios from "axios";

export const getBankAccount = () => {
  return axios.get('https://api.sampleapis.com/fakebank/accounts')
};

export const getDetailBankAccount = (id) => {
  return axios.get(`https://api.sampleapis.com/fakebank/accounts/${id}`)
};