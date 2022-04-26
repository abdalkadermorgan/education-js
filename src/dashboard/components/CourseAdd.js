import { useState } from "react";


const CourseAdd = (props) => {


    const [enterdName, setEnteredName] = useState('');
    const [enterdCategory, setEnteredCategory] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const categoryChangeHandler = (event) => {
        setEnteredCategory(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const min = 1;
    const max = 1000;

    const submitHandler = (event) => {
        event.preventDefault();

        let stored_courses = JSON.parse(localStorage.getItem("CourseInfo")) || [];
        console.log('stored_courses =>' ,stored_courses);
        

        // course to store
        const courseData = {
            name: enterdName,
            category: enterdCategory,
            price: enteredPrice,
            id: parseInt(min + (Math.random() * (max  - min))).toString(),
            // desc: '',
        };
        stored_courses.push(courseData);
        localStorage.setItem("CourseInfo", JSON.stringify(stored_courses));

        setEnteredName('');
        setEnteredCategory('');
        setEnteredPrice('');

        window.location.reload();
    }
    return (
        <form onSubmit={submitHandler}>
            {/* <Modal onClose={props.onClose}> */}
            <div className="mb-6">
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Name</label>
                <input
                    type="text"
                    id="large-input"
                    value={enterdName}
                    onChange={titleChangeHandler}
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 " />
            </div>
            <div className="mb-6">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-black">category</label>
                <input
                    type="text"
                    id="base-input"
                    value={enterdCategory}
                    onChange={categoryChangeHandler}
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 " />
            </div>
            <div>
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-black">price</label>
                <input
                    type="text"
                    id="small-input"
                    value={enteredPrice}
                    onChange={priceChangeHandler}
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 " />
            </div>
            {/* <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-black">description</label>
                    <input 
                    type="text" 
                    id="small-input"
                    value={enteredDesc}
                    onChange={descChangeHandler}
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 " />
                </div> */}
            {/* <div>
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-black">image</label>
                <input type="file" id="small-input" onChange={imgChangeHandler} value={enteredImg} className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 " /> */}
          {/* <img src="../../assets/images/image_1.jpg" /> */}
            {/* </div> */}
            <div className="flex justify-end mt-3">
                <button onClick={props.onCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-4 rounded">close</button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
            </div>
            {/* </Modal> */}
        </form>
    );
};


export default CourseAdd;