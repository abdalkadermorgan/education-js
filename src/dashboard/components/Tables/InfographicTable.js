import Modal from "../../../components/UI/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../../store/store";
import ButtonEdit from "../ButtonEdit";

const InfographicTable = (props) => {

    const { infographics } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        course: "",
        student: "",
        id: "",
    });

    const onDelete = (id) => {
        dispatch(Actions.SetInfoGraphic(infographics.filter((e) => e.id !== id)));
    };
    const onEdit = (slider) => {
        setIsEditing(true);
        // dispatch(Actions.SetInfoGraphic(infographic.filter((e) => e.id !== id)));
        setState(slider);
    };
    const onEditSlider = () => {
        dispatch(
            Actions.SetInfoGraphic(
                infographics.map((infographic) => {
                    if (infographic.id === state.id) {
                        infographic = state;
                    }
                    return infographic;
                })
            )
        );

        setState((s) => ({ course: "", student: "", id: "" }));
        stopEditingHandler();
    };

    const [isEditing, setIsEditing] = useState(false);
    const saveCourseDataHandler = (enteredCourseDate) => {
        const courseData = {
            ...enteredCourseDate,
        };
        props.onAddCourse(courseData);
        setIsEditing(false);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };


    return infographics.map((infographic, index) => (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700"
            key={`infographic-${index}`}
        >
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{infographic.course}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{infographic.student}</td>
            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                <button className="text-blue-600 dark:text-red-500 hover:underline"
                    onClick={() => onDelete(infographic.id)}
                >Del</button>
            </td>
        </tr >
    ));
};

export default InfographicTable;