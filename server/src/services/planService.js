import prisma from "../config/database.js";

export const getPlans = () => prisma.plan.findMany({
  orderBy: { createdAt: "desc" },
});

export const createPlan = (name) => prisma.plan.create({
  data: { name },
});