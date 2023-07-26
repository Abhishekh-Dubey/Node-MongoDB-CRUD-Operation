// const express = require("express");
// const app = express();
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://avskdby:dancer77660@cluster0.szhk7uk.mongodb.net/Acadmy?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("hi i am hear"))
  .catch((err) => console.log(err));

const User = require("./modals/db");
// -----insert------
// const creatDocument = async () => {
//   try {
//     const dataSend1 = new User({
//       _id: 4,
//       name: "abhi",
//       ctype: "React deveplor",
//       video: 40,
//     });
//     const dataSend2 = new User({
//       _id: 3,
//       name: "dubey",
//       ctype: "React deveplor",
//       video: 40,
//     });
//     const result = await User.insertMany([dataSend1, dataSend2]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// creatDocument();
// app.listen(9000, (req, res) => console.log("listening...."));

// -----update------
// const updateDoc = async (_id) => {
//   try {
//     const result = await User.findByIdAndUpdate(
//       { _id },
//       {
//         $set: {
//           name: "Abh",
//         },
//       },
//       {
//         new: true,
//         useFindAndModify: false,
//       }
//     );
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// updateDoc(4);

// -----delete------
const deleteDoc = async (_id) => {
  try {
    const result = await User.deleteOne({ _id });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
deleteDoc(4);
