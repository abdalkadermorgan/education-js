const ButtonEdit = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="text-blue-600 dark:text-green-500 hover:underline mx-3"
      type="button"
    >
      Edit
    </button>
  );
};

export default ButtonEdit;
