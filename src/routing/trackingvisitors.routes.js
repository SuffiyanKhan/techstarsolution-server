import express from 'express';
import { getAllLogsFromTrackingController } from '../controllers/trackinglogs.controller.js';

const trackingVisitorsRoutes= express.Router();

trackingVisitorsRoutes.get('/getAllLogsFromTracking',getAllLogsFromTrackingController)



export default trackingVisitorsRoutes;