import { ApiError } from "./apiError.js";


export const BadRequestError = (msg = "Bad Request") => new ApiError(msg, 400);
export const UnauthorizedError = (msg = "Unauthorized") => new ApiError(msg, 401);
export const ForbiddenError = (msg = "Forbidden") => new ApiError(msg, 403);
export const NotFoundError = (msg = "Not Found") => new ApiError(msg, 404);
export const InternalServerError = (msg = "Internal Server Error") => new ApiError(msg, 500);

// Use if needed
// export const PaymentRequiredError = (msg = "Payment Required") => new ApiError(msg, 402);
// export const MethodNotAllowedError = (msg = "Method Not Allowed") => new ApiError(msg, 405);
// export const ConflictError = (msg = "Conflict") => new ApiError(msg, 409);
// export const UnprocessableEntityError = (msg = "Unprocessable Entity") => new ApiError(msg, 422);
// export const TooManyRequestsError = (msg = "Too Many Requests") => new ApiError(msg, 429);
// export const NotImplementedError = (msg = "Not Implemented") => new ApiError(msg, 501);
// export const BadGatewayError = (msg = "Bad Gateway") => new ApiError(msg, 502);
// export const ServiceUnavailableError = (msg = "Service Unavailable") => new ApiError(msg, 503);
// export const GatewayTimeoutError = (msg = "Gateway Timeout") => new ApiError(msg, 504);
