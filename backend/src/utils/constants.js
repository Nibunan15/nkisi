// Values mirror the website's forms exactly (services list, client tabs, team-size options).
export const SERVICES = Object.freeze([
  'HR Consulting',
  'Business Consulting',
  'Brand Strategy',
  'Corporate Outbound Training',
  'Leadership and Development',
  'Organizational Transformation',
]);
export const SOURCES = Object.freeze(['contact', 'work-with-us']);
export const CLIENT_TYPES = Object.freeze(['Corporate', 'Academic', 'Individual']);
export const SIZES = Object.freeze(['Under 25', '25–100', '100–500', '500+']);
export const STATUSES = Object.freeze(['new', 'contacted', 'closed']);
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const LIMITS = Object.freeze({ name: [2, 120], email: 254, organization: 160, message: 5000 });
