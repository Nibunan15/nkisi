import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateEnquiry, validateStatusUpdate } from '../src/validators/enquiryValidator.js';

const contact = { source: 'contact', name: 'Asha Kumar', email: 'Asha@Example.com ', organization: 'Acme', services: ['HR Consulting'], message: 'Hello', subscribe: true };
const work = { source: 'work-with-us', clientType: 'Academic', services: ['Brand Strategy', 'Brand Strategy'], name: 'Ravi', email: 'ravi@college.edu', size: '100–500' };

test('accepts a valid contact enquiry and normalises email', () => {
  const r = validateEnquiry(contact);
  assert.deepEqual(r.errors, []);
  assert.equal(r.value.email, 'asha@example.com');
  assert.equal(r.isSpam, false);
});

test('accepts a valid work-with-us enquiry and de-duplicates services', () => {
  const r = validateEnquiry(work);
  assert.deepEqual(r.errors, []);
  assert.deepEqual(r.value.services, ['Brand Strategy']);
  assert.equal(r.value.size, '100–500');
});

test('rejects missing name and bad email', () => {
  const r = validateEnquiry({ source: 'contact', name: 'A', email: 'nope' });
  assert.deepEqual(r.errors.map((e) => e.field).sort(), ['email', 'name']);
});

test('work-with-us requires at least one service and a client type', () => {
  const r = validateEnquiry({ ...work, services: [], clientType: '' });
  assert.ok(r.errors.some((e) => e.field === 'services'));
  assert.ok(r.errors.some((e) => e.field === 'clientType'));
});

test('rejects unknown services, sizes and sources', () => {
  const r = validateEnquiry({ ...work, services: ['Hacking'], size: '9000', source: 'x' });
  assert.deepEqual(r.errors.map((e) => e.field).sort(), ['services', 'size', 'source']);
});

test('drops unknown keys and flags honeypot spam', () => {
  const r = validateEnquiry({ ...contact, website: 'http://spam', status: 'closed', $where: '1' });
  assert.equal(r.isSpam, true);
  assert.equal('status' in r.value, false);
  assert.equal('$where' in r.value, false);
});

test('status update validation', () => {
  assert.deepEqual(validateStatusUpdate({ status: 'contacted' }).errors, []);
  assert.equal(validateStatusUpdate({ status: 'deleted' }).errors.length, 1);
});
