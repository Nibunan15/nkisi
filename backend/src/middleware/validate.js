import { ApiError } from '../utils/ApiError.js';

// Runs a validator(body) → { value, errors, ... }; on success replaces req.body with the clean value.
export const validate = (validator) => (req, _res, next) => {
  const result = validator(req.body);
  if (result.errors.length) return next(ApiError.unprocessable(result.errors));
  req.body = result.value;
  req.validation = result;
  next();
};
