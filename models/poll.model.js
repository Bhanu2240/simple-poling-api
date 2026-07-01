const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
    },
    votes: {
        type: Number,
        default: 0,
    },
});

const pollSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
            trim: true,
        },
        options: {
            type: [optionSchema],
            validate: {
                validator: function (value) {
                    return value.length >= 2;
                },
                message: "A poll must have at least two options.",
            },
        },
    },
    {
        timestamps: true,
    }
);

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;