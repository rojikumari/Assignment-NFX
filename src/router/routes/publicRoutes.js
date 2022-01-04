// Export all the public routes

import Login from "@pages/public/login";
import SignUp from "@pages/public/signup";
import Counter from "@pages/public/counter";

export const PublicRoutes = [
  { path: "/auth/login", exact: true, component: Login },
  { path: "/auth/signup", exact: true, component: SignUp },
  {path: "/auth/counter", exact: true, component: Counter}
];
