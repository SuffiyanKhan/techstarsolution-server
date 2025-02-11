import express from 'express';
import { addDataOfAccessPartnersControllers, getAllDataOfContolers, loginaccesspartnersControllers } from '../controllers/accesstopartners.controllers.js';

const accesspartnersRouting=express.Router();


accesspartnersRouting.post('/addDataOfAccessPartners',addDataOfAccessPartnersControllers); 
accesspartnersRouting.get('/getAllData',getAllDataOfContolers)
accesspartnersRouting.post('/loginaccesspartners',loginaccesspartnersControllers)



export default accesspartnersRouting;