const endpointUrl = "http://localhost:5000";

export const getPredictedData = (state, district,block,year) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpointUrl}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ state,district,block,endYear:year })
    })
      .then(res => {
        const text = res.text();
        return text.then(value => {
          console.log(value);
          return resolve(JSON.parse(value));
        });
      })
      .catch(error => {
        console.log(error);
        return reject(error);
      });
  });
};

