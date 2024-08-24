// /api/dbConnect.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;



export default async function handler(req, res) {
  if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local');
  }

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable to persist the MongoClient across hot-reloads
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }
  console.log('exporting servess api');
  try {
    const client = await clientPromise;
    const db = client.db("greensapper");

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    const collection = db.collection('Contact_Table');

    const result = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date()
    });

    res.status(201).json({ message: 'Contact information added successfully', result });
  } catch (error) {
    console.error('Error occurred:', error);  // Log detailed error
    res.status(500).json({ error: 'Unable to connect to database', details: error.message });  // Send detailed error message
  }
}
