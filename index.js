import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config.js";
import userRoute from "./routes/userRoutes.js";
import authRoute from "./routes/authRoutes.js";
import productRoute from "./routes/productRoutes.js";
import cartRoute from "./routes/cartRoutes.js";
import orderRoute from "./routes/orderRoutes.js";
import stripeRoute from "./routes/stripe.js";
import requestRoute from "./routes/requestRoutes.js";

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB is connected"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors({origin: ["*"]}));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/cart", cartRoute);
app.use("/api/products", productRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/request", requestRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is connected");
});
