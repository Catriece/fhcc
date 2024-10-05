import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./page/landing/landing.tsx";
import { AboutPage } from "./page/about/about.tsx";
import { ContactForm } from "./page/contact/contact.tsx";
import { ServicesPage } from "./page/services/services.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactForm /> },
      { path: "/services", element: <ServicesPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
