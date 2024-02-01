import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import { HomePage } from "./pages/Home";
import { ShopPage } from "./pages/Shop";
import { AboutPage } from "./pages/About";
import { CartPage } from "./pages/Cart";

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: "home",
					element: <HomePage />,
				},
				{
					path: "shop",
					element: <ShopPage />,
				},
				{
					path: "about",
					element: <AboutPage />,
				},
				{
					path: "Cart",
					element: <CartPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
