import { useContext } from 'react';
import { Link } from "react-router-dom";
import CartContext from '../../../store/cart-context';
import CourseItemForm from './CourseItemForm';

const CourseItem = (props) => {
	const cartCtx = useContext(CartContext);
	console.log(props)
	const price = `$${props.price?.toFixed(2)}`;
	const desc = props.description ? props.description.substring(0, 100) : '';

	// const price = props?.price;
	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
			category: props.category,
			img: props.img
		});
	};

	return (
		<div className="bg-gray-100">
			<div className="transition-all ease-in-out duration-300 hover:-translate-y-4">
				<img src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" className="mb-4" alt="Blog img-1" />
				<div className="p-2">
					<h1 className="text-gray-400 text-sm">{props.category}</h1>

					<h1 className="mb-2">
						<Link to="SingleCourse" className="text-xl hover:text-red-500">
							{props.name}
						</Link>
					</h1>

					<p className="text-gray-400 text-sm"> {desc}</p>

					<div className="flex items-center justify-between mt-4">
						<span className="text-red-500">
							{price}
						</span>
						<div>
							<CourseItemForm id={props.id} onAddToCart={addToCartHandler} />
						</div>
						{/* <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
							Add To Card
						</button> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseItem;
