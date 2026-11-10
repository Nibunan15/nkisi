import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import * as ctrl from '../controllers/enquiryController.js';
import { validate } from '../middleware/validate.js';
import { validateObjectId } from '../middleware/validateObjectId.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { validateEnquiry } from '../validators/enquiryValidator.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Please wait a few minutes and try again.' },
});

// Public — used by the Contact and Work-with-us forms
router.post('/', submitLimiter, validate(validateEnquiry), asyncHandler(ctrl.create));

// Admin — manage stored enquiries (header: x-admin-key)
router.get('/', requireAdmin, asyncHandler(ctrl.list));
router.get('/:id', requireAdmin, validateObjectId(), asyncHandler(ctrl.getOne));
router.patch('/:id', requireAdmin, validateObjectId(), asyncHandler(ctrl.updateStatus));
router.delete('/:id', requireAdmin, validateObjectId(), asyncHandler(ctrl.remove));

export default router;
