import mongoose from "mongoose";

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
        votedIPs: [
          {
           type: [String],
             default: [],
          },
        ],
    },
  
    {
        timestamps: true,
    }
);

const Poll = mongoose.model("Poll", pollSchema);

export default Poll;