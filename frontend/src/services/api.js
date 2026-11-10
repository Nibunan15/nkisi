const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
const TIMEOUT_MS = 15000;

/**
 * POST an enquiry (Contact form or Work-with-us form).
 * Resolves with the server payload; rejects with an Error whose message is safe to show the user.
 */
export async function submitEnquiry(payload) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  let res;
  try {
    res = await fetch(API_BASE + '/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } catch (err) {
    throw new Error(err.name === 'AbortError'
      ? 'The request timed out. Please try again.'
      : 'Could not reach the server. Please check your connection and try again.');
  } finally {
    clearTimeout(timer);
  }

  let data = null;
  try { data = await res.json(); } catch { /* non-JSON response */ }

  if (!res.ok) {
    const first = data && Array.isArray(data.errors) && data.errors[0];
    const error = new Error((first && first.message) || (data && data.message) ||
      (res.status === 429 ? 'Too many requests. Please wait a few minutes and try again.' : 'Something went wrong. Please try again.'));
    error.status = res.status;
    error.fields = (data && data.errors) || [];
    throw error;
  }
  return data;
}
