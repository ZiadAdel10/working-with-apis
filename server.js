const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    age: 30,
    birtName: "Shéyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },

  "chance the rapper": {
    age: 30,
    birtName: "Chancelor Johnathan Bennett",
    birthLocation: "Chicago, Illinois",
  },

  dylan: {
    age: 29,
    birtName: "Dylan",
    birthLocation: "Dylan",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (request, response) => {
  const rapperName = request.params.rapperName.toLowerCase();
  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers["dylan"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}! You better go catch it`);
});
