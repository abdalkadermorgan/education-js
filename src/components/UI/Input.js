import React, { useRef, useImperativeHandle } from 'react'

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        };
    });

    return (
        <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
                ref={inputRef}
                id={props.id}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                className={props.className}
            />
        </div>
    )
});

export default Input;