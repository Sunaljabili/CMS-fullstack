import AdminRoot from "../pages/Admin";
import Dashboard from "../pages/Admin/Dashboard";
import AdminCountries from "../pages/Admin/Countries";
import AdminCountryDetail from "../pages/Admin/Country-Detail";
import AdminLogin from "../pages/Admin/Login";
import AdminAddCountry from "../pages/Admin/Add-country";
import ClienRoot from "../pages/Client";
import Home from "../pages/Client/Home";
import About from "../pages/Client/About";
import Contact from "../pages/Client/Contact";
import CountryDetail from "../pages/Client/CountryDetail";
import ClientCountries from "../pages/Client/Countries";

export const ROUTES = [
  // admin root
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "countries",
        element: <AdminCountries />,
      },
      {
        path: "countries/:id",
        element: <AdminCountryDetail />,
      },
      {
        path: "login",
        element: <AdminLogin />,
      },
      {
        path: "add-country",
        element: <AdminAddCountry />,
      },
    ],
  },

  // client root
  {
    path: "/",
    element: <ClienRoot />,
    children: [
        {
            index:true,
            element:<Home/>
        },
        {
            path:"about",
            element:<About/>
        },
        {
            path:"contact",
            element:<Contact/>
        },
        {
            path:"countries",
            element:<ClientCountries/>
        },
        {
            path:"countries/:id",
            element:<CountryDetail/>
        }
    ],
  },
];
