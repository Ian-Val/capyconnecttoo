const express = require('express');
const path = require('path');
const app = express();
const port = 5000

const { events } = require('./data');

app.use(express.static('./public'));

app.get('/api/events', (req, res) => {
    const newEvents = events.map((event) => {
        const { title, location, start_time, end_time } = event;
        return { title, location, start_time, end_time };
    })
    res.json(newEvents)
})

app.get('/api/events/:eventID', (req, res) => {
    const singleEvent = events.find(event => event.event_id === req.params.eventID)

    if (!singleEvent) {
        return res.status(404).send('404 Product Does Not Exist')
    }
    return res.json(singleEvent)
})

app.all('*', (req, res) => {
    res.status(404).send('404 Resource Not Found');
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening on port ${port}...`);
})