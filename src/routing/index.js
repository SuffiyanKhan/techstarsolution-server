import express from 'express';
import authRouting from './auth.routing.js';
import billingRouting from './billing.routing.js';
import traningRouting from './traning.routing.js';
import contactRouting from './contact.routing.js';
import coursesRouting from './courses.routing.js';
import recordedclassesvideosrouting from './recordedclassesvideos.routing.js';

const routes = express.Router();

routes.use('/api', authRouting);
routes.use('/billing', billingRouting);
routes.use('/traning', traningRouting);
routes.use('/contact', contactRouting)
routes.use('/course', coursesRouting)
routes.use('/revideo', recordedclassesvideosrouting)

export default routes