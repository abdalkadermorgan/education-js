import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../../store/store";
import ButtonEdit from "../ButtonEdit";

const SliderTableInfo = () => {
  const { sliders } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    url: "",
    id: "",
  });

  const onDelete = (id) => {
    dispatch(Actions.setSliders(sliders.filter((e) => e.id !== id)));
  };
  const onEdit = (slider) => {
    // dispatch(Actions.setSliders(sliders.filter((e) => e.id !== id)));
    setState(slider);
  };
  const onEditSlider = () => {
    dispatch(
      Actions.setSliders(
        sliders.map((slider) => {
          if (slider.id === state.id) {
            slider = state;
          }
          return slider;
        })
      )
    );

    setState((s) => ({ name: "", url: "", id: "" }));
  };

  return sliders.map((slider, index) => (
    <>
      <tr
        className="hover:bg-gray-100 dark:hover:bg-gray-700"
        key={`slider-${index}`}
      >
        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
          <img src={slider.url} width={50} />
        </td>
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {slider.name}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
          <button
            className="text-blue-600 dark:text-red-500 hover:underline"
            onClick={() => onDelete(slider.id)}
          >
            Del
          </button>
        </td>

        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
          <button
            className="text-blue-600 dark:text-red-500 hover:underline"
            onClick={() => onEdit(slider)}
          >
            edit
          </button>
        </td>
      </tr>
      <tr>
        <td>
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
                onChange={(e) =>
                  setState((s) => ({ ...s, name: e.target.value }))
                }
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
                onChange={(e) =>
                  setState((s) => ({ ...s, url: e.target.value }))
                }
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
                type="button"
                onClick={onEditSlider}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                edit
              </button>
            </div>
          </form>
        </td>
      </tr>
    </>
  ));
};

export default SliderTableInfo;
