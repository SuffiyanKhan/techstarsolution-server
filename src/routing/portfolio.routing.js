import express from 'express';
import { addPortfolioController } from '../controllers/portfolio.controller.js';

const portfolioRoting=express.Router();


portfolioRoting.post('/add-portfolio',addPortfolioController)


export default portfolioRoting;