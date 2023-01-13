import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    img: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Request", RequestSchema);
