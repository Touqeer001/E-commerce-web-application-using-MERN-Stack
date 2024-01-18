import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb+srv://touqeer:Ansari@cluster0.9bh5jgq.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
