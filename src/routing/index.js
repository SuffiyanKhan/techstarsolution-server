import express from 'express';
import authRouting from './auth.routing.js';
import billingRouting from './billing.routing.js';
import traningRouting from './traning.routing.js';
import contactRouting from './contact.routing.js';
import coursesRouting from './courses.routing.js';
import recordedclassesvideosrouting from './recordedclassesvideos.routing.js';
import accesspartnersRouting from './accesspartner.routing.js';
import trackingVisitorsRoutes from './trackingvisitors.routes.js';
import projectCategoryRoute from './projectCategory.routing.js';
import portfolioRoting from './portfolio.routing.js';
import newprojectsRouting from './newprojects.routing.js';

const routes = express.Router();

routes.use('/api', authRouting);
routes.use('/billing', billingRouting);
routes.use('/traning', traningRouting);
routes.use('/contact', contactRouting);
routes.use('/course', coursesRouting);
routes.use('/revideo', recordedclassesvideosrouting);
routes.use('/accesstop',accesspartnersRouting);
routes.use('/tracking',trackingVisitorsRoutes);
routes.use('/portfolio',portfolioRoting);
routes.use('/projectCategory',projectCategoryRoute);
routes.use('/newprojects',newprojectsRouting);

export default routes