import React from 'react';

import CourseItem from './CourseItem';

const CoursesList = (props) => {
    // if (props.items.le)

    return (
        <>
            {props.item.map((course) => (
                <CourseItem
                    key={course.id}
                    title={course.name}
                    price={course.price}
                    category={course.category}

                />
            ))}
        </>
    );
};

export default CoursesList;