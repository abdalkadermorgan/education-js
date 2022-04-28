import { useState } from "react"
import ButtonAdd from "../ButtonAdd";
import ButtonEdit from "../ButtonEdit";
import CourseEdit from "../CourseEdit";

const TableInfo = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    let courses = new Array();
    courses = JSON.parse(localStorage.getItem('CourseInfo'));

    const saveCourseDataHandler = (enteredCourseDate) => {
        setIsEditing(false);
    };

    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };


    const removeItems = (id) => {
        console.log("id => ", id)

        if (id) {
            let new_courses = courses.filter((value) => value.id != id);

            console.log(new_courses)

            localStorage.setItem("CourseInfo", JSON.stringify(new_courses));
            window.location.reload();
        }
    }

    return (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{props.name}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{props.category}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{price}</td>
            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                <button className="text-blue-600 dark:text-red-500 hover:underline" onClick={() => removeItems(props.id)}>Del</button>
                {!isEditing && (
                // <button onClick={startEditingHandler}>Add New Course</button>
                <ButtonEdit onClick={startEditingHandler} />

            )}
            {isEditing && (
                <CourseEdit
                    onSaveCourseData={saveCourseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
            </td>
        </tr >
    )
}

export default TableInfo;