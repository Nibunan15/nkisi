import { SERVICES, SOURCES, CLIENT_TYPES, SIZES, STATUSES, EMAIL_RE, LIMITS } from '../utils/constants.js';

const str = (v) => (typeof v === 'string' ? v.trim() : v == null ? '' : String(v).trim());

/**
 * Validates and normalises an enquiry body. Unknown keys are dropped.
 * @returns {{ value: object, errors: {field:string,message:string}[], isSpam: boolean }}
 */
export function validateEnquiry(body = {}) {
  const errors = [];
  const add = (field, message) => errors.push({ field, message });
  const b = body && typeof body === 'object' ? body : {};

  const source = str(b.source);
  if (!SOURCES.includes(source)) add('source', 'Invalid form source.');

  const name = str(b.name);
  if (name.length < LIMITS.name[0]) add('name', 'Enter your name');
  else if (name.length > LIMITS.name[1]) add('name', 'Name is too long');

  const email = str(b.email).toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) add('email', 'Enter a valid email');

  const organization = str(b.organization);
  if (organization.length > LIMITS.organization) add('organization', 'Organization is too long');

  let services = b.services == null ? [] : b.services;
  if (!Array.isArray(services)) services = [services];
  services = [...new Set(services.map(str).filter(Boolean))];
  if (services.some((s) => !SERVICES.includes(s))) add('services', 'Unknown service selected');
  if (source === 'work-with-us' && services.length === 0) add('services', 'Pick at least one service');

  const clientType = str(b.clientType);
  if (source === 'work-with-us' && !CLIENT_TYPES.includes(clientType)) add('clientType', 'Choose Corporate, Academic or Individual');
  else if (clientType && !CLIENT_TYPES.includes(clientType)) add('clientType', 'Invalid client type');

  const size = str(b.size);
  if (size && !SIZES.includes(size)) add('size', 'Invalid size option');

  const message = str(b.message);
  if (message.length > LIMITS.message) add('message', 'Message is too long (max ' + LIMITS.message + ' characters)');

  const subscribe = b.subscribe === true || b.subscribe === 'true' || b.subscribe === 'on';
  const isSpam = str(b.website).length > 0; // hidden honeypot field

  const value = { source, name, email, organization, services, message, subscribe };
  if (clientType) value.clientType = clientType;
  if (size) value.size = size;
  return { value, errors, isSpam };
}

export function validateStatusUpdate(body = {}) {
  const status = str(body && body.status);
  return STATUSES.includes(status)
    ? { value: { status }, errors: [] }
    : { value: null, errors: [{ field: 'status', message: 'Status must be one of: ' + STATUSES.join(', ') }] };
}
