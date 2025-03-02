import { Router } from "express";

const router = Router();

const moduleRoutes = [
    {path: '/auth', route: AuthRoutes},
    {}
];

moduleRoutes.forEach((route) => route.use(route.path, route.route));

export default router;