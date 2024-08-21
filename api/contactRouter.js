import express from 'express'
import ContactController from './contactController.js';
const contactrouter=express.Router();
const contactcontroller=new ContactController();
contactrouter.post('/',(res,req)=>{
  contactcontroller.getcontact(res,req);
})

export{contactrouter};