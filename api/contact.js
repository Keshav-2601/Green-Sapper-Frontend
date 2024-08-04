const { MongoClient } = require('mongodb');

module.exports = async (req, res) => {
    const headers = {
        'Access-Control-Allow-Origin': '*', // Allow all origins
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
    };

    if (req.method === 'OPTIONS') {
        res.set(headers).status(200).send('This was a preflight call!');
        return;
    }

    const client = new MongoClient(process.env.MONGODB_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    });

    try {
        await client.connect();
        const db = client.db('greensapper');
        const contacts = db.collection('Contact_Table');

        const { name, email, message } = req.body;

        await contacts.insertOne({ name, email, message });

        res.set(headers).status(200).json({ message: 'Contact saved successfully' });
    } catch (error) {
        res.set(headers).status(500).json({ message: 'Internal Server Error', error: error.message });
    } finally {
        await client.close();
    }
};
