import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import CartContext from '../../../store/cart-context';
import CourseItemForm from './CourseItemForm';

const CourseItem = (props) => {
	const cartCtx = useContext(CartContext);
	// console.log(props)
	// const price = `$${props.price?.toFixed(2)}`;
	// const desc = props.description ? props.description.substring(0, 100) : '';
	
	// // const price = props?.price;
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
	
	const { courses } = useSelector((state) => state);
	const dispatch = useDispatch();



	return courses.map((course, index) => (
		
		<div className="bg-gray-100" key={`course-homne-${index}`}>
			<div className="transition-all ease-in-out duration-300 hover:-translate-y-4">
				<img src={course.urlImg} />
				<div className="p-2">
					<h1 className="text-gray-400 text-sm">{props.category}</h1>

					<h1 className="mb-2">
						<Link to="SingleCourse" className="text-xl hover:text-red-500">
							{course.title}
						</Link>
					</h1>

					<p className="text-gray-400 text-sm"> {course.description.substring(0, 100)}</p>

					<div className="flex items-center justify-between mt-4">
						<div  className="flex items-center mt-4">
							<span className="text-red-500 mr-5">
								{course.price}
							</span>
							<span className="text-gray-500 line-through">
								{course.discount}
							</span>

						</div>
						<div>
							<CourseItemForm id={props.id} onAddToCart={addToCartHandler} />
						</div>
					</div>
				</div>
			</div>
		</div>
	));
};

export default CourseItem;
