//schema conditions
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  user_id:{type:Schema.Types.ObjectId,ref:'User'},
Aadharnumber: String,
Address: String,
clgname: String
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);