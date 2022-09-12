import { Router } from 'express';
import {BookController} from './controllers/bookController'

const router = Router();

router.get('/', BookController.index)

export default router;