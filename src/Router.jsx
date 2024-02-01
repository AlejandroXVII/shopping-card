import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import { HomePage } from "./pages/Home";
import { ShopPage } from "./pages/Shop";
import { AboutPage } from "./pages/About";
import { CartPage } from "./pages/Cart";
import { useEffect, useState } from "react";

const Router = () => {
	const [items, setItems] = useState([]);
	async function fetchLoop(uri, amount) {
		const itemArray = [];
		for (let i = 1; i <= amount; i++) {
			const response = await fetch(`${uri}/${i}`); // waits for the response
			const data = await response.json();
			itemArray.push({
				id: data.id,
				title: data.title,
				img: data.image,
				price: data.price,
				description: data.description,
				category: data.category,
				rating: data.rating,
			});
			console.log(data);
		}
		setItems(itemArray);
	}
	useEffect(() => {
		fetchLoop("https://fakestoreapi.com/products", 2);
	}, []);
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
					element: <ShopPage id="shop" items={items} />,
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
