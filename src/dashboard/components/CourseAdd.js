import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Modal from "../../components/UI/Modal";
import { Actions } from "../../store/store";

const CourseAdd = (props) => {
	const [state, setState] = useState({
		title: "",
		description: "",
		urlImg: "",
		catigory: "",
		price: "",
		discount: "",
	});

	const { courses } = useSelector((state) => state);
	const dispatch = useDispatch();

	const addNewCourse = () => {
		dispatch(Actions.SetCourses([...courses, { ...state, id: uuid() }]));
		props.onCancel();
	};

	return (
		<Modal onClose={props.onClose}>
			<form>
				<div className="mb-6">
					<label
						htmlFor="large-input"
						className="block mb-2 text-sm font-medium text-black"
					>
						Title
					</label>
					<input
						type="text"
						id="large-input"
						onChange={(e) => setState((s) => ({ ...s, title: e.target.value }))}
						value={state.title}
						className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="base-input"
						className="block mb-2 text-sm font-medium text-black"
					>
						category
					</label>
					<input
						type="text"
						id="base-input"
						onChange={(e) =>
							setState((s) => ({ ...s, catigory: e.target.value }))
						}
						value={state.catigory}
						className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
					/>
				</div>
				<div>
					<label
						htmlFor="small-input"
						className="block mb-2 text-sm font-medium text-black"
					>
						price
					</label>
					<input
						type="number"
						id="small-input"
						onChange={(e) => setState((s) => ({ ...s, price: e.target.value }))}
						value={state.price}
						className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
					/>
				</div>
				<div>
					<label
						htmlFor="small-input"
						className="block mb-2 text-sm font-medium text-black"
					>
						Discount
					</label>
					<input
						type="number"
						id="small-input"
						onChange={(e) =>
							setState((s) => ({ ...s, discount: e.target.value }))
						}
						value={state.discount}
						className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
					/>
				</div>
				<div>
					<label
						htmlFor="small-input"
						className="block mb-2 text-sm font-medium text-black"
					>
						description
					</label>
					<textarea
						id="exampleFormControlTextarea1"
						rows="3"
						className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
						onChange={(e) =>
							setState((s) => ({ ...s, description: e.target.value }))
						}
						value={state.description}
					></textarea>
				</div>
				<div>
					<label
						htmlFor="small-input"
						className="block mb-2 text-sm font-medium text-black"
					>
						Image URL
					</label>
					<input
						type="text"
						id="small-input"
						onChange={(e) =>
							setState((s) => ({ ...s, urlImg: e.target.value }))
						}
						value={state.urlImg}
						className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
					/>
				</div>
				{/* <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-black">image</label>
                    <input type="file" id="small-input" onChange={imgChangeHandler} value={enteredImg} className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 " /> */}
				{/* <img src="../../assets/images/image_1.jpg" /> */}
				{/* </div> */}
				<div className="flex justify-end mt-3">
					<button
						onClick={props.onCancel}
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-4 rounded"
					>
						close
					</button>
					<button
						onClick={addNewCourse}
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						Add
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default CourseAdd;
