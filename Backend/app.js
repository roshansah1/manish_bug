const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const userRouter = require("./routes/user-routes");
const orderRouter = require("./routes/order-routes");
const cors = require('cors');
const app = express();
// Middleware
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books
app.use("/users", userRouter); // localhost:5000/users
app.use("/orders", orderRouter); // localhost:5000/orders

mongoose.connect(
    "mongodb+srv://admin:GhmqwankBepbeP2k@cluster0.kmnoihv.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(()=>console.log("connected to database"))
.then(() => {
    app.listen(5000);
}).catch((err)=>console.log(err))















// 