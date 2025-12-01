const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    jarat: {
      type: String,
      required: true,
    },
    induloallomas: {
      type: String,
      required: true,
    },
    celallomas: {
      type: String,
      required: true,
    },
    allomasok: [
      {
        type: String,
        required: true,
      },
    ],
    idopontok: [
      {
        type: String,
        required: true,
      },
    ],
    kedvezmeny: [
      {
        type: String,
        required: true,
      },
    ],
    kortablak: [
      {
        type: String,
        required: true,
      },
    ],
    idotartam: {
      type: String,
      required: true,
    },
    klima: {
      type: String,
      default: false,
    },
    helyjegy: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
