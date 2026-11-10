import mongoose from 'mongoose';
import { SERVICES, SOURCES, CLIENT_TYPES, SIZES, STATUSES, EMAIL_RE, LIMITS } from '../utils/constants.js';

const enquirySchema = new mongoose.Schema(
  {
    source: { type: String, enum: SOURCES, required: true, index: true },
    name: { type: String, required: true, trim: true, minlength: LIMITS.name[0], maxlength: LIMITS.name[1] },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: LIMITS.email, match: EMAIL_RE },
    organization: { type: String, trim: true, maxlength: LIMITS.organization, default: '' },
    clientType: { type: String, enum: CLIENT_TYPES },
    size: { type: String, enum: SIZES },
    services: { type: [{ type: String, enum: SERVICES }], default: [] },
    message: { type: String, trim: true, maxlength: LIMITS.message, default: '' },
    subscribe: { type: Boolean, default: false },
    status: { type: String, enum: STATUSES, default: 'new', index: true },
    meta: {
      ip: { type: String, select: false },
      userAgent: { type: String, maxlength: 512, select: false },
    },
  },
  { timestamps: true, versionKey: false }
);

enquirySchema.index({ createdAt: -1 });

export const Enquiry = mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);
