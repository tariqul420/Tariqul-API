const express = require("express");
const cors = require("cors");
const contact = require("./API/contact.json");
const experience = require("./API/experience.json");
const skill = require("./API/skill.json");
const social = require("./API/social.json");
const works = require("./API/works.json");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Tariqul Islam All API");
});

app.get("/contact", (req, res) => {
    res.send(contact);
});

app.get("/experience", (req, res) => {
    res.send(experience);
});

app.get("/skill", (req, res) => {
    res.send(skill);
});

app.get("/social", (req, res) => {
    res.send(social);
});

app.get("/works", (req, res) => {
    res.send(works);
});

app.get("*", (req, res) => {
    res.send('API NOT FOUND');
});

app.listen(port, () => {
    console.log("\x1b[1m\x1b[35m🌼 Tariqul\x1b[0m");
});
