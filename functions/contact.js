const { MongoClient } = require('mongodb');

exports.handler = async function(event, context) {
    const headers = {
        'Access-Control-Allow-Origin': '*', // Allow all origins
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: 'This was a preflight call!',
        };
    }

    const client = new MongoClient(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        await client.connect();
        const db = client.db('greensapper');
        const contacts = db.collection('Contact_Table');

        const { name, email, message } = JSON.parse(event.body);

        await contacts.insertOne({ name, email, message });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'Contact saved successfully' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ message: 'Internal Server Error', error: error.message })
        };
    } finally {
        await client.close();
    }
};
