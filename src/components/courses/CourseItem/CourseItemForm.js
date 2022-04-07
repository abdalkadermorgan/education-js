import { useRef, useState } from 'react';

const CourseItemForm = (props) => {
    // const [amountIsValid, setAmountIsValid] = useState(true);
    // const enteredAmountNumber = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        // const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = 1;

        // if (
        //     enteredAmount.trim().length === 0 ||
        //     enteredAmount < 1 ||
        //     enteredAmount > 5
        // ) {
        //     setAmountIsValid(false);
        //     return;
        // }
        props.onAddToCart(enteredAmountNumber);
        console.log(enteredAmountNumber);
    };

    return (
        <form onSubmit={submitHandler}>
            {/* <input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '1',
                    step: '1',
                    defaultValue: '1',
                }}
            /> */}
            <button 
            className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'>
                Add To Card
            </button>
            {/* {!amountIsValid && <p>please enter a valid amount (1)</p>} */}
        </form>
    );
};

export default CourseItemForm;