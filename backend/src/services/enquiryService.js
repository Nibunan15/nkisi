import { Enquiry } from '../models/Enquiry.js';

export const createEnquiry = (data, meta) => Enquiry.create({ ...data, meta });

export async function listEnquiries({ page = 1, limit = 20, status, source } = {}) {
  const p = Math.max(1, Number.parseInt(page, 10) || 1);
  const l = Math.min(100, Math.max(1, Number.parseInt(limit, 10) || 20));
  const filter = {};
  if (status) filter.status = status;
  if (source) filter.source = source;
  const [items, total] = await Promise.all([
    Enquiry.find(filter).sort({ createdAt: -1 }).skip((p - 1) * l).limit(l).lean(),
    Enquiry.countDocuments(filter),
  ]);
  return { items, page: p, limit: l, total, pages: Math.ceil(total / l) };
}

export const getEnquiry = (id) => Enquiry.findById(id).lean();
export const updateEnquiryStatus = (id, status) =>
  Enquiry.findByIdAndUpdate(id, { status }, { new: true, runValidators: true }).lean();
export const deleteEnquiry = (id) => Enquiry.findByIdAndDelete(id).lean();
