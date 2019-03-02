import find from "lodash/find";
import isNull from "lodash/isNull";
import filter from "lodash/filter";

const endpointUrl = "http://localhost:3001";

export const getUser = (email, password) => {
  new Promise((resolve, reject) => {
    return fetch(`${endpointUrl}/login`)
      .then(res => {
        console.log(res);
        return resolve(res);
      })
      .catch(error => {
        console.log(error);
        return reject(error);
      });
  });
};
