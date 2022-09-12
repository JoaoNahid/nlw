import express from "express";

const app = express();

app.get('/ads', () => {
  console.log("Acessou adds");
})

app.listen(3333)