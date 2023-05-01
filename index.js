const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = (times) => {
  for (const time of times) {
    let date = new Date(time.risetime);

    console.log(`Next pass at ${date} for ${time.duration} seoncds.`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
