const mongoose = require('mongoose');
const MouniSchema = mongoose.Schema({
    cid: Number,
    caddress: String,
    cpassword:String,
    cdob: Date,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('State', MouniSchema);

