const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    uid: Number,
    uname: String,
    dname: String,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false },
    created_at:  { type: Boolean, default: false },
    last_update:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Mine', UserSchema);

