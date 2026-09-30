import { getHealth } from "../services/healthService.js";

export const healthController = (_request, response) => {
  response.json(getHealth());
};