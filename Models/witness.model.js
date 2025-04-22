const mongoose = require("mongoose");

const witnessSchema = new mongoose.Schema({
  crimeId: { type: mongoose.Schema.Types.ObjectId, ref: "CrimeReports", required: true },
  name: { type: String, required: true },
  statement: { type: String, required: true },
  contactInfo: { type: String, required: true },
  isAnonymous: { type: Boolean, default: false }
}, {
  versionKey: false,
  timestamps: true
});

const WitnessModel = mongoose.model("Witness", witnessSchema);

module.exports = { WitnessModel };



// Witness Schema:-
// {
//   _id,
//   crimeId: ObjectId,
//   name,
//   statement,
//   contactInfo,
//   isAnonymous: Boolean
// }



