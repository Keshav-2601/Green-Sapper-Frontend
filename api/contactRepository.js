import { getdb } from "./mongodbconnection.js";
export default class contactRepository{
    static async getdata(data){
        try {
            const db=getdb();
            const collection=db.collection('Contact_Table');
            await collection.insertOne(data);
            return res.status(200).send('data is successfully added');
        } catch (error) {
            console.log('no data availabel',error);
        }
    }
}