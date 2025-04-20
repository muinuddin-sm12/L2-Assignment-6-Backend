import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";
import { ProvidersRoutes } from "../modules/mealProvider/provider.route";
import { ReviewRoutes } from "../modules/reviews/review.route";
import { OrderRoutes } from "../modules/orders/order.route";
import { MealRoutes } from "../modules/meal/meal.route";
import { MealPlanRoutes } from "../modules/mealPlan/meslPlan.route";

const router = Router();

const moduleRoutes = [
    {path: '/auth', route: AuthRoutes},
    {path: '/users', route: UserRoutes},
    {path: '/meal-provider', route: ProvidersRoutes},
    {path: '/reviews', route: ReviewRoutes},
    {path: '/orders', route: OrderRoutes},
    {path: '/meals', route: MealRoutes},
    {path: '/meal-plan', route: MealPlanRoutes},
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;