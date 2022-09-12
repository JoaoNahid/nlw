import express from "express";

const app = express();

app.get('/adds', () => {
  console.log("Acessou adds");
})

app.listen(3333)