import ApiError from "../utils/ApiError.js";

export const notFoundHandler = (request, _response, next) => {
  next(new ApiError(404, `Route ${request.originalUrl} not found`));
};

// eslint-disable-next-line no-unused-vars
export const errorHandler = (error, _request, response, _next) => {
  let apiError = error;

  if (!(apiError instanceof ApiError)) {
    const statusCode = apiError.statusCode || 500;
    const message = apiError.message || "Internal Server Error";
    apiError = new ApiError(statusCode, message, [], apiError.stack);
  }

  const response_body = {
    success: apiError.success,
    message: apiError.message,
    data: apiError.data,
    errors: apiError.errors,
    ...(process.env.NODE_ENV === "development" ? { stack: apiError.stack } : {}),
  };

  console.error(error);

  response.status(apiError.statusCode).json(response_body);
};
