import mongoose from "mongoose";

const Connection = async () => {
<<<<<<< HEAD
  const URL = `mongodb+srv://touqeer:Ansari@cluster0.9bh5jgq.mongodb.net/?retryWrites=true&w=majority`;
=======
  const URL = `Upload MONGODB URL`;
>>>>>>> 26d772683594c32516c09e97b913c9dfd61cd3e3

  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
