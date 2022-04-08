import React, { useEffect, useState } from 'react'
import TableInfo from '../components/Tables/TableInfo';
import ButtonAdd from '../components/ButtonAdd';
import NewCourse from '../components/NewAdd';

const TableCard = (props) => {
    const [items, setitems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("CourseInfo"));
        if (items) {
            setitems(items);
        }
        
    }, [])
    
    const CourseTable = items.map((course, index) => (
        <TableInfo 
        key= {index}
        id={course.id}
        name={course.name}
        price={course.price}
        category={course.category}
        />
        ));
    return (
        <div className=' w-full'>
            <div className=' mx-auto pt-10   xl:px-16'>
                <div className="flex flex-col">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                {/* <ButtonAdd onClick={props.onShowModal} /> */}
                                <NewCourse onClick={props.onShowModal} />
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Course Name
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Category
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Price
                                            </th>
                                            <th scope="col" className="p-4">
                                                <span className="sr-only">add</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {CourseTable}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default TableCard;