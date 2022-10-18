import mongoose from "mongoose";
import app from "./app.js";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const mongoUri = process.env.MONGODB_URI;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    autoIndex: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`App running on port ${process.env.PORT}`)
    );
  })
  .catch((error) => {
    console.log(
      "Mongodb connection error. Plz make sure your mongodb is running." + error
    );
  });
