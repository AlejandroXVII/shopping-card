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
	const [cartItems, setCartItems] = useState([]);
	const [cartItemID, setCartItemID] = useState(1);
	const [numCartItems, setNumCartItems] = useState(0);
	const [totalCart, setTotalCart] = useState(0);
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
			element: <App numCartItems={numCartItems} />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: "home",
					element: <HomePage items={items} />,
				},
				{
					path: "shop",
					element: (
						<ShopPage
							id="shop"
							items={items}
							cartItems={cartItems}
							setCartItems={setCartItems}
							cartItemID={cartItemID}
							setCartItemID={setCartItemID}
							totalCart={totalCart}
							setTotalCart={setTotalCart}
							numCartItems={numCartItems}
							setNumCartItems={setNumCartItems}
						/>
					),
				},
				{
					path: "Cart",
					element: (
						<CartPage
							id="cart"
							cartItems={cartItems}
							setCartItems={setCartItems}
							totalCart={totalCart}
							setTotalCart={setTotalCart}
							numCartItems={numCartItems}
							setNumCartItems={setNumCartItems}
						/>
					),
				},
				{
					path: "about",
					element: <AboutPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
