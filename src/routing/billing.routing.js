import express from 'express';
import { getAddBillingData, saveBillingData } from '../controllers/billing.controllers.js';

const billingRouting= express.Router();

billingRouting.post('/savebillingdata',saveBillingData);
billingRouting.get('/getAddBillingData',getAddBillingData);


export default billingRouting