import { createBrowserRouter } from "react-router-dom";

//Users navigate your application with <Link>, <NavLink>, <Form>, redirect, and useNavigate.

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        lazy: async () => ({
          loader: (await import("../pages/Home/home.loader.jsx")).loader,
          action: (await import("../pages/Home/home.action.jsx")).action,
          Component: (await import("../pages/Home/home.component.jsx"))
            .Component,
        }),
      },
      {},
    ],
  },
]);
