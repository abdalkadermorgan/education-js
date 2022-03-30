import Card from "../UI/Card";
import CourseItem from "./CourseItem/CourseItem";

const INFO_COURSE = [
    {
        id: 'c1',
        category: 'UI && UX',
        name: 'Course Title 1',
        description: 'We packed her seven versalia, put her initial into the belt and made herself on the way..',
        img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        price: 40,
    },
    {
        id: 'c2',
        category: 'UI && UX',
        name: 'Course Title 2',
        description: 'We packed her seven versalia, put her initial into the belt and made herself on the way..',
        img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        price: 20,
    },
    {
        id: 'c3',
        category: 'UI && UX',
        name: 'Course Title 3',
        description: 'We packed her seven versalia, put her initial into the belt and made herself on the way..',
        img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        price: 220,
    },
    {
        id: 'c4',
        category: 'UI && UX',
        name: 'Course Title 4',
        description: 'We packed her seven versalia, put her initial into the belt and made herself on the way..',
        img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        price: 30,
    },

];

const AvilableCourse = () => {
    const courseList = INFO_COURSE.map((course) => (
        <CourseItem
            key={course.id}
            id={course.id}
            category={course.category}
            name={course.name}
            description={course.description}
            img={course.img}
            price={course.price}
        />

    ));

    return (
        <Card>
            {courseList}
        </Card>
    );
};

export default AvilableCourse;