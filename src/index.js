import 'babel-polyfill';
import express from "express";
import createStore from "./helpers/createStore";
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    // Some logic to initialize
    // and load data into the store

    res.send(renderer(req, store))
})

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
