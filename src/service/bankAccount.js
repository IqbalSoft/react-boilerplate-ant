import axios from "axios";

export const getBankAccount = (params) => {
  return axios.get('https://api.sampleapis.com/fakebank/accounts', params)
};
