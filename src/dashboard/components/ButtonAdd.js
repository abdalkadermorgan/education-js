const ButtonAdd = (props) => {
    return (
        <div className="mb-3 text-right">
            <button onClick={props.onClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="button"

            >Add
            </button>
        </div>
    )
}

export default ButtonAdd;