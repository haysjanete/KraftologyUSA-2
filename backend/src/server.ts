import express from "express";
import cors from "cors";
import { sample_cups, sample_tags } from "./data";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/cups", (req, res) => {
    res.send(sample_cups);
})

app.get("/api/cups/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const cups = sample_cups.filter(cup => cup.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    res.send(cups);
})

app.get("/api/cups/tags", (req, res) => {
    res.send(sample_tags);
})

app.get("/api/cups/tag/:tagName", (req,res) => {
    const tagName = req.params.tagName;
    const cups = sample_cups
    .filter(cup => cup.tags?.includes(tagName));
    res.send(cups);
})

app.get("/api/cups/:cupId", (req,res) => {
    const cupId = req.params.cupId;
    const cup = sample_cups.find(cup => cup.id == cupId);
    res.send(cup);
})

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})