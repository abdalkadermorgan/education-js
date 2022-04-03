import { useState } from "react"
import CourseAdd from "./CourseAdd";

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
            <CourseAdd 
                onSaveCourseData={saveCourseDataHandler}
            />
        </div>
    )


}