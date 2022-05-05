import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../../store/store";

const CourseItemForm = (props) => {
	
	const { cart } = useSelector((state) => state);

	const [disabled,setDisabled] = useState(false);
	const dispatch = useDispatch();

	const addCourseToCart = (course) => {
		if(cart.find(e => e.id === course.id)) {
			return setDisabled(true)
			
		} else {
			dispatch(Actions.SetAddedCart([...cart, course]));
			console.log("tesssst", course);

		}
	};

	return (
		// <form>

		<button
			disabled={disabled}
			className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
			onClick={() => addCourseToCart(props.course)}
		>
			Add To Card
		</button>
		// {/* {!amountIsValid && <p>please enter a valid amount (1)</p>} */}
		// {/* </form> */}
	);
};

export default CourseItemForm;
