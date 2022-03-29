import { useRef, useState } from 'react';

const CourseItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmount < 1 ||
            enteredAmount > 5
        ) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
        console.log(enteredAmountNumber);
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>please enter a valid amount (1)</p>}
        </form>
    );
};

export default CourseItemForm;