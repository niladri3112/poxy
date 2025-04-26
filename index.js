const express = require('express');
const axios = require('axios'); // Importing axios
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/proxy', async (req, res) => {
    const url = req.query.url;
    console.log('Received URL:', url);  // Log the URL

    if (!url) {
        return res.status(400).send('Missing URL');
    }

    try {
        // Using axios to fetch the URL
        const response = await axios.get(url);
        res.set('Content-Type', 'application/xml');
        res.send(response.data);  // Sending the response data
    } catch (error) {
        console.error('Error fetching URL:', error);
        res.status(500).send('Failed to fetch URL');
    }
});

app.listen(PORT, () => {
    console.log(`CORS Proxy Server running at http://localhost:${PORT}`);
});
