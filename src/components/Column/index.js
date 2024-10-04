import React from 'react';
// Import clsx library for conditional classes.
import clsx from 'clsx';

// Define the Column component as a function
// with children, className, style as properties
// Look https://infima.dev/docs/ for learn more
// Style only affects the element inside the column, but we could have also made the same distinction as for the classes.
export default function Column({ header, children , className, style  }) {
    return (

        <div className={clsx('col column' , className)} style={style}>
            <div>
                <h2>{header}</h2>
            </div>

            <div className="column-children">
                {children}
            </div>
        </div>

    );
}