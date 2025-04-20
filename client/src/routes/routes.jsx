import { createBrowserRouter } from "react-router-dom";

//Users navigate your application with <Link>, <NavLink>, <Form>, redirect, and useNavigate.

export const router = createBrowserRouter([
  {
    path: "/",
    Component: (await import("../App")).Component,
    // errorElement: ,
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
  // {
  //   path: "login",
  //   lazy: async () => ({
  //     Component: (await import("../pages/Auth/login.component.jsx")).Component,
  //   }),
  // },
  {
    path: "register",
    lazy: async () => ({
      Component: (await import("../pages/Auth/register.component.jsx"))
        .Component,
    }),
  },
]);
