import React, { useState } from 'react';

const Example = (props) => {
    const { abcd } = props;
    const [hookState, setHookState] = useState('Initial...');
    console.log('Props --> ', abcd, 'Hook State --> ', hookState);
    return (
        <div>
            ABCD
            <button
                onClick={() => {
                    // Block One
                    console.log('Example...');

                    // Block Two
                    setHookState('Updated...');
                }}
            >
                ABCD
            </button>
        </div>
    )
}

export default Example;
