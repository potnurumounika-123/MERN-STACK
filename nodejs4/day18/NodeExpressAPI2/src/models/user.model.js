const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    tid: Number,
    tage: Number,
    tname: String,
    taddress: String,
    tphone: Number,
    temail: String,
    tdob: Date,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false },
    created_at:  { type: Boolean, default: false },
    last_update:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Topper', UserSchema);

