import express from 'express';
import { addPortfolioController, deletePortfolioController, getAllPortfolioController } from '../controllers/portfolio.controller.js';

const portfolioRoting=express.Router();


portfolioRoting.post('/add-portfolio',addPortfolioController)
portfolioRoting.get('/get-portfolio',getAllPortfolioController)
portfolioRoting.delete('/delete-portfolio/:id',deletePortfolioController)

export default portfolioRoting;