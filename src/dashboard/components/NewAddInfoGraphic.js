import { useState } from "react"
import ButtonAdd from "./ButtonAdd";
import InfoGraphicInfo from "./InfoGraphic/InfoGraphicInfo";
const NewAddInfoGraphic = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveCourseDataHandler = (enteredCourseDate) => {

        const courseData = {
            ...enteredCourseDate,
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
                <InfoGraphicInfo
                    onSaveCourseData={saveCourseDataHandler}
                    onCancel={stopEditingHandler}
                />

            )}
        </div>
    );
};

export default NewAddInfoGraphic;