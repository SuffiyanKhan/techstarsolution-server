import express from 'express';
import { getAddBillingData, saveBillingData, updateBillingDataController } from '../controllers/billing.controllers.js';

const billingRouting= express.Router();

billingRouting.post('/savebillingdata', saveBillingData);
billingRouting.get('/getAddBillingData', getAddBillingData);
billingRouting.post('/updateBillingData', updateBillingDataController);

export default billingRouting