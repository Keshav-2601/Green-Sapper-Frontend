import contactcontroller from '../contact/contact.controller.js';
import { mongodbconnection } from '../config/monggodb.js';

const contactControl = new contactcontroller();

export default async function handler(req, res) {
    try {
        // Ensure the database connection is established
        await mongodbconnection();

        // Check the request method
        if (req.method === 'POST') {
            console.log('Received request:', req.body);
            await contactControl.get(req, res);
        } else {
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error("Error in POST /api/contact:", error);
        res.status(500).json({ error: { code: '500', message: 'A server error has occurred' } });
    }
}

// import express from 'express';
// import { contactrouter } from './contactRouter';
// import { mongodbconnection } from './mongodbconnection';
// const server=express.server();
// server.use('/',contactrouter);

// server.lister(3200,(res,req)=>{
//     console.log('server is running');
//     mongodbconnection()
// }
// )
