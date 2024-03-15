import app from "./app";
import mongoose from "mongoose";
require("dotenv").config();

const port = 5000;

async function main() {
  try {
    await mongoose.connect(process.env.DB_URl as string);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();