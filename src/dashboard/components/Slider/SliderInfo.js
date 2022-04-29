import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/UI/Modal";
import { Actions } from "../../../store/store";
import { v4 as uuid } from "uuid";

const SliderInfo = (props) => {
  const [state, setState] = useState({
    name: "",
    url: "",
  });

  const { sliders } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addnewSlider = () => {
    dispatch(Actions.setSliders([...sliders, {...state, id : uuid()}]));
    props.onCancel()
  };

  return (
    <Modal onClose={props.onClose}>
      <form>
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-black"
          >
            Name
          </label>
          <input
            type="text"
            id="large-input"
            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            value={state.name}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-black"
          >
            URL
          </label>
          <input
            type="text"
            id="large-input"
            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
            onChange={(e) => setState((s) => ({ ...s, url: e.target.value }))}
            value={state.url}
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-black"
          >
            image
          </label>
          <input
            type="file"
            id="small-input"
            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 "
          />
        </div>
        <div className="flex justify-end mt-3">
          <button
            onClick={props.onCancel}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-4 rounded"
          >
            close
          </button>
          <button
            type="button"
            onClick={addnewSlider}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default SliderInfo;
