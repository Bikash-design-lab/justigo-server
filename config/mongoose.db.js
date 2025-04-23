const mongoose = require("mongoose")

const ConnectToDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected sucessfully.")
    }
    catch(error){
        console.log("Fails to connect to DB",error)
    }
}

module.exports = {ConnectToDB}

// const mongoose = require("mongoose");

// const ConnectToDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("DB connected successfully.");
//   } catch (error) {
//     console.log("Fails to connect to DB", error.message);
//   }
// };

// module.exports = { ConnectToDB };


