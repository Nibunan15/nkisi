import { Router } from 'express';
import { dbState } from '../config/db.js';

const router = Router();
router.get('/', (_req, res) => {
  const db = dbState();
  res.status(db === 'connected' ? 200 : 503).json({ success: db === 'connected', status: 'ok', db, uptime: Math.round(process.uptime()) });
});
export default router;
