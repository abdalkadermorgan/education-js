import { useState } from "react"
import CourseAdd from "./CourseAdd";
import ButtonAdd from "./ButtonAdd";
const NewCourse = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveCourseDataHandler = (enteredCourseDate) => {
        const courseData = {
            ...enteredCourseDate,
            id: Math.random().toString(),
        };
        props.onAddCourse(courseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    return (
        <div>
            {!isEditing && (
                // <button onClick={startEditingHandler}>Add New Course</button>
                <ButtonAdd onClick={startEditingHandler} />

            )}
            {isEditing && (
                <CourseAdd
                    onSaveCourseData={saveCourseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewCourse;