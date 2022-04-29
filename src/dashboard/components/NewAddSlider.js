import { useState } from "react";
import ButtonAdd from "./ButtonAdd";
import SliderInfo from "../components/Slider/SliderInfo";
const NewSlider = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveCourseDataHandler = (enteredCourseDate) => {
    return;
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
        <SliderInfo
          onSaveCourseData={saveCourseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewSlider;
