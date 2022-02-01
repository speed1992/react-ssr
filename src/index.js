import 'babel-polyfill';
import express from "express";
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import createStore from "./helpers/createStore";
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData() : null
    })

    res.send(renderer(req, store))
})

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
