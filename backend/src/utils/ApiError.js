export class ApiError extends Error {
  constructor(status, message, errors) {
    super(message);
    this.status = status;
    if (errors) this.errors = errors;
  }
  static badRequest(msg, errors) { return new ApiError(400, msg, errors); }
  static unprocessable(errors) { return new ApiError(422, 'Please check the highlighted fields.', errors); }
  static unauthorized(msg = 'Unauthorized') { return new ApiError(401, msg); }
  static notFound(msg = 'Not found') { return new ApiError(404, msg); }
}
