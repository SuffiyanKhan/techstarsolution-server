import express from 'express';
import { addDataOfAccessPartnersControllers, deleteaccesstopartnersControllers, getAllDataOfContolers, loginaccesspartnersControllers, updateaccesspartnersControllers } from '../controllers/accesstopartners.controllers.js';

const accesspartnersRouting=express.Router();


accesspartnersRouting.post('/addDataOfAccessPartners',addDataOfAccessPartnersControllers); 
accesspartnersRouting.get('/getAllData',getAllDataOfContolers);
accesspartnersRouting.post('/loginaccesspartners',loginaccesspartnersControllers);
accesspartnersRouting.post('/updateaccesspartners',updateaccesspartnersControllers);
accesspartnersRouting.delete('/deleteaccesstopartners/:id',deleteaccesstopartnersControllers)



export default accesspartnersRouting;