import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/UI/Modal";
import { Actions } from "../../../store/store";
import ButtonEdit from "../ButtonEdit";

const TableInfo = (props) => {

    const { courses } = useSelector((state) => state);
    const dispatch = useDispatch();
  
    const [state, setState] = useState({
        id: "",
        title: "",
        description: "",
        urlImg: "",
        catigory: "",
        price: "",
        discount: "",
    });
  
    const onDeleteCourse = (id) => {
      dispatch(Actions.SetCourses(courses.filter((e) => e.id !== id)));
    };
    const onEdit = (course) => {
      setIsEditing(true);
      // dispatch(Actions.setSliders(sliders.filter((e) => e.id !== id)));
      setState(course);
    };
    const onEditcourse = () => {
      dispatch(
        Actions.SetCourses(
          courses.map((course) => {
            if (course.id === state.id) {
                course = state;
            }
            return course;
          })
        )
      );
  
      setState((s) => ({ title: "", description: "", urlImg:"", catigory: "", price: "", discount: "" , id: "" }));
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

    return  courses.map((course, index) => (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" 
            key={`course-${index}`}
        >
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{course.title}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"> <img src={course.urlImg} width={50} /> </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{course.catigory}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{course.price}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{course.discount}</td>
            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
          <button
            className="text-blue-600 dark:text-red-500 hover:underline"
            onClick={() => onDeleteCourse(course.id)}
          >
            Del
          </button>
          {!isEditing && (
            // <button onClick={startEditingHandler}>Add New Course</button>
            <ButtonEdit onClick={() => onEdit(course)} />

          )}
          {isEditing && (
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
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
                    onChange={(e) =>
                      setState((s) => ({ ...s, title: e.target.value }))
                    }
                    value={state.title}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Catigory
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
                    onChange={(e) =>
                      setState((s) => ({ ...s, catigory: e.target.value }))
                    }
                    value={state.catigory}
                  />
                </div>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-black">price</label>
                    <input
                        type="number"
                        id="small-input"
                        onChange={(e) => setState((s) => ({ ...s, price: e.target.value }))}
                        value={state.price}
                        className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 " />
                </div>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-black">Discount</label>
                    <input
                        type="number"
                        id="small-input"
                        onChange={(e) => setState((s) => ({ ...s, discount: e.target.value }))}
                        value={state.discount}
                        className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 " />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Description
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
                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
                    onChange={(e) =>
                      setState((s) => ({ ...s, urlImg: e.target.value }))
                    }
                    value={state.urlImg}
                  />
                </div>
                <div className="flex justify-end mt-3">
                  <button
                    type="button"
                    onClick={onEditcourse}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  mr-4 px-4 rounded"
                  >
                    edit
                  </button>
                  <button onClick={props.onCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">close</button>
                </div>
              </form>
            </Modal>
          )}
        </td>
        </tr >
    ));
}

export default TableInfo;