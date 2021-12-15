import User from "../models/user.js";

const registerUser = (req, res) => {
  let user = new User({
    userID: req.body.userID,
    Name: {
      firstName: req.body.userData?.fname,
      lastName: req.body.userData?.lname,
    },
    email: req.body.email,
    age: req.body.userData?.age,
    location: req.body.userData?.loc,
    tests: [],
  });
  user.save((err) => {
    if (!err) res.send("done");
    else res.send("failed");
  });
};

const getUserByID = (req, res) => {
  User.findOne({ userID: req.params.userID }, { Name: 1, tests: 1 }, (err, usr) => {
    if (err) console.log(err);
    else if (!usr) {
      res.send("user404");
    } else res.send(usr);
  });
};

export default {
  registerUser,
  getUserByID,
};
