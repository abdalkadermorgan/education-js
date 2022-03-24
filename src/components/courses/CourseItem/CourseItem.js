import { Link } from "react-router-dom";

const CourseItem = (props) => {
	const price = `$${props.pricing.toFixed(2)}`;
	return (
		<div className="bg-gray-100">
			<div className="transition-all ease-in-out duration-300 hover:-translate-y-4">
				<img src={props.img} className="mb-4" alt="Blog img-1" />
				<div className="p-2">
					<h1 className="text-gray-400 text-sm">{props.category}</h1>

					<h1 className="mb-2">
						<Link to="SingleCourse" className="text-xl hover:text-red-500">
							{props.name}
						</Link>
					</h1>

					<p className="text-gray-400 text-sm">{props.description}</p>

					<div className="flex items-center justify-between mt-4">
						<span className="text-red-500">
							{price}
						</span>
						<button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
							Add To Card
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseItem;
