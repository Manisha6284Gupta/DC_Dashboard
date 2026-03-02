import express from "express";
import {getMonthlyBudget,
        getYearComparison,
        getTopDepartments
} from "../controllers/dashboardController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/monthly-budget/:year",verifyToken, getMonthlyBudget);
router.get("/year-comparison",verifyToken, getYearComparison);
router.get("/top-departments/:year", verifyToken, getTopDepartments);

export default router;