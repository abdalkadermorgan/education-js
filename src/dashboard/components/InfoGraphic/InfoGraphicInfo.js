import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../../store/store";
import { v4 as uuid } from "uuid";
import Modal from "../../../components/UI/Modal";

const InfoGraphicInfo = (props) => {

    const [state, setState] = useState({
        course: "",
        student: "",
    });

    const { infographics } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addnewInfoGraphic = () => {
        dispatch(Actions.SetInfoGraphic([...infographics, { ...state, id: uuid() }]));
        props.onCancel()
    };

    return (
        <Modal onClose={props.onClose}>
            <form>
                <div className="mb-6">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Course Number</label>
                    <input
                        type="text"
                        id="large-input"
                        className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
                        onChange={(e) => setState((s) => ({ ...s, course: e.target.value }))}
                        value={state.course}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Student Number</label>
                    <input
                        type="text"
                        id="large-input"
                        className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
                        onChange={(e) => setState((s) => ({ ...s, student: e.target.value }))}
                        value={state.student}
                    />

                </div>
                <div className="flex justify-end mt-3">
                    <button onClick={props.onCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-4 rounded">close</button>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={addnewInfoGraphic}
                    >Add</button>
                </div>
            </form>
        </Modal>
    );
};


export default InfoGraphicInfo;