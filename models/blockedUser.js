const mongoose = require("mongoose");

const blockedUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    reason: {
        type: String,
        default: "Blocked by admin"
    },

    blockedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model(
    "BlockedUser",
    blockedUserSchema
);