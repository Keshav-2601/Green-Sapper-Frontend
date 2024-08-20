import contactcontroller from '../contact/contact.controller.js';
import { mongodbconnection } from '../config/monggodb.js';

const contactControl = new contactcontroller();

export default async function handler(req, res) {
    // Ensure the database connection is established before handling requests
    if (!global.mongoClient) {
        await mongodbconnection();
    }

    // Check the request method
    if (req.method === 'POST') {
        try {
            console.log('Received request:', req.body);
            await contactControl.get(req, res);
        } catch (error) {
            console.log("Error in POST /api/contact:", error);
            res.status(500).send('Internal Server Error');
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
