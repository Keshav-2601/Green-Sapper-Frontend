import { MongoClient } from 'mongodb';

exports.handler = async function(event, context) {
    console.log("event data is ",event);
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  try {
    await client.connect();
    const db = client.db();
    const contacts = db.collection('Contact_Table');

    const { name, email, message } = JSON.parse(event.body);

    await contacts.insertOne({ name, email, message });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Contact saved successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error: error.message })
    };
  } finally {
    await client.close();
  }
};
