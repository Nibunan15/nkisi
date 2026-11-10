import * as service from '../services/enquiryService.js';
import { validateStatusUpdate } from '../validators/enquiryValidator.js';
import { ApiError } from '../utils/ApiError.js';
import { STATUSES, SOURCES } from '../utils/constants.js';

const THANKS = 'Thank you. Our team will be in touch shortly.';

export async function create(req, res) {
  // Honeypot filled → pretend success, store nothing.
  if (req.validation && req.validation.isSpam) return res.status(201).json({ success: true, message: THANKS });
  const doc = await service.createEnquiry(req.body, { ip: req.ip, userAgent: String(req.get('user-agent') || '').slice(0, 512) });
  res.status(201).json({ success: true, message: THANKS, data: { id: doc._id, createdAt: doc.createdAt } });
}

export async function list(req, res) {
  const { status, source, page, limit } = req.query;
  if (status && !STATUSES.includes(status)) throw ApiError.badRequest('Invalid status filter');
  if (source && !SOURCES.includes(source)) throw ApiError.badRequest('Invalid source filter');
  res.json({ success: true, data: await service.listEnquiries({ status, source, page, limit }) });
}

export async function getOne(req, res) {
  const doc = await service.getEnquiry(req.params.id);
  if (!doc) throw ApiError.notFound('Enquiry not found');
  res.json({ success: true, data: doc });
}

export async function updateStatus(req, res) {
  const { value, errors } = validateStatusUpdate(req.body);
  if (errors.length) throw ApiError.unprocessable(errors);
  const doc = await service.updateEnquiryStatus(req.params.id, value.status);
  if (!doc) throw ApiError.notFound('Enquiry not found');
  res.json({ success: true, data: doc });
}

export async function remove(req, res) {
  const doc = await service.deleteEnquiry(req.params.id);
  if (!doc) throw ApiError.notFound('Enquiry not found');
  res.status(204).end();
}
