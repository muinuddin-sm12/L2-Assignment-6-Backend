import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";
import { ProvidersRoutes } from "../modules/mealProvider/provider.route";

const router = Router();

const moduleRoutes = [
    {path: '/auth', route: AuthRoutes},
    {path: '/user', route: UserRoutes},
    {path: '/meal-provider', route: ProvidersRoutes}
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;