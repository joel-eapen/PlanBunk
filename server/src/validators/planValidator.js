import ApiError from "../utils/ApiError.js";

export const validatePlan = (request, response, next) => {
  const { name } = request.body;

  if (typeof name !== "string" || name.trim().length === 0) {
    return next(new ApiError(400, "Plan name is required"));
  }

  request.body.name = name.trim();
  next();
};