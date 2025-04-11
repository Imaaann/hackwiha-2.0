import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("App now listening on port" + 3000);
});
