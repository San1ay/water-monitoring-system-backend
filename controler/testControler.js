import User from "../models/user.js";
const newTest = (req, res) => {
  let { userID, name, temp, tempScale = "C", waterLevel, phValue, turbidity } = req.body;

  waterLevel = parseFloat(waterLevel).toFixed(2);
  turbidity = parseFloat(turbidity).toFixed(2);
  phValue = parseInt(phValue);
  temp = parseFloat(temp).toFixed(2);
  let tempInCelcius = temp;

  if (tempScale === "K") tempInCelcius = temp - 273.15;
  else if (tempScale == "F") tempInCelcius = ((temp - 32) / 1.8).toFixed(2);

  //TODO : Implement formula
  let wqi = 1,
    rating = "test",
    confidence = 1,
    season = "test",
    quality = "good";

  let test = {
    sampleData: {
      name,
      temp,
      tempScale: tempScale === "K" ? "K" : `°${tempScale}`,
      turbidity,
      waterLevel,
      phValue,
    },
    calculatedResult: {
      wqi,
      rating,
      confidence,
      season,
      quality,
    },
  };

  User.findOne({ userID }).then((user) => {
    user.tests.push(test);
    user.save((err) => {
      if (!err) res.send(test);
      else res.send("failed");
    });
  });

  // test.save((err, test) => {
  //   User.findOne({ uid: userID }, (err, user) => {
  //     user.tests.push(test);
  //     user.save((err) => {});
  //   });
  // });
  // console.log(req.body);
  // res.send(req.body)
};

// done on frontend

// const getTestByID = (req, res) => {
// let { userID, testID } = req.body;
// User.find(
//   { userID, "tests._id": testID },
//   { "tests.sampleData.$": 1, "tests.calculatedResult.$": 1, _id: 0 },
//   (err, tst) => {
//     if (err) console.log(err);
//     else if (!tst) res.send("unavailable");
//     else res.send(tst);
//   }
// );
// };

export default {
  newTest,
  // getTestByID,
};
