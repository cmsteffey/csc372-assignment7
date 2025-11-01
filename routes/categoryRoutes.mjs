import express from 'express';
import * as categoryController from '../controllers/categoryController.mjs';
const router = express.Router();
router.get('/categories', categoryController.getCategories);
router.get('/category/:category', categoryController.getAllInCategory);
export default router;