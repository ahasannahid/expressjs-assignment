const express = require('express');
const router= express.Router();



const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const titleController = require('../Controllers/titleController');


router.get('/create-blog',blogController.create);
router.get('/read-blog',blogController.read);
router.get('/delete-blog',blogController.delete);
router.get('/update-blog',blogController.update);


router.get('/create-blog-details',blogDetailsController.create);
router.get('/read-blog-details',blogDetailsController.read);
router.get('/delete-blog-details',blogDetailsController.delete);
router.get('/update-blog-details',blogDetailsController.update);


router.get('/create-comment',commentController.create);
router.get('/read-comment',commentController.read);
router.get('/delete-comment',commentController.delete);
router.get('/update-comment',commentController.update);


router.get('/create-message',messageController.create);
router.get('/read-message',messageController.read);
router.get('/delete-message',messageController.delete);
router.get('/update-message',messageController.update);


router.get('/create-portfolio',portfolioController.create);
router.get('/read-portfolio',portfolioController.read);
router.get('/delete-portfolio',portfolioController.delete);
router.get('/update-portfolio',portfolioController.update);


router.get('/create-product',productController.create);
router.get('/read-product',productController.read);
router.get('/delete-product',productController.delete);
router.get('/update-product',productController.update);


router.get('/create-profit',profitController.create);
router.get('/read-profit',profitController.read);
router.get('/delete-profit',profitController.delete);
router.get('/update-profit',profitController.update);

router.get('/create-project',projectController.create);
router.get('/read-project',projectController.read);
router.get('/delete-project',projectController.delete);
router.get('/update-project',projectController.update);


router.get('/create-service',serviceController.create);
router.get('/read-service',serviceController.read);
router.get('/delete-service',serviceController.delete);
router.get('/update-service',serviceController.update);


router.get('/create-title',titleController.create);
router.get('/read-title',titleController.read);
router.get('/delete-title',titleController.delete);
router.get('/update-title',titleController.update);


module.exports=router;

