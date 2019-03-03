const endpointUrl = "http://127.0.0.1:5000";

export const getGroundWaterPredictions = (state, district, block, endYear) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpointUrl}/predict`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ state, district, block, year: endYear })
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
