import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";
import { ProvidersRoutes } from "../modules/mealProvider/provider.route";
import { ReviewRoutes } from "../modules/reviews/review.route";

const router = Router();

const moduleRoutes = [
    {path: '/auth', route: AuthRoutes},
    {path: '/user', route: UserRoutes},
    {path: '/meal-provider', route: ProvidersRoutes},
    {path: '/review', route: ReviewRoutes}
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;