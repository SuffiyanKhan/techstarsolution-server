import express from 'express';
import { addPortfolioController, getAllPortfolioController } from '../controllers/portfolio.controller.js';

const portfolioRoting=express.Router();


portfolioRoting.post('/add-portfolio',addPortfolioController)
portfolioRoting.get('/get-portfolio',getAllPortfolioController)


export default portfolioRoting;