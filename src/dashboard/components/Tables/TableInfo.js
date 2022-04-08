import React from 'react'

const TableInfo = (props) => {
    // const price = `$${props.price.toFixed(2)}`;
    const removeItems = () => {
        const getJson = localStorage.getItem('CourseInfo');
        if(getJson) {
            getJson.slice('key', 1)
        }
    }
    
    return (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{props.name}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{props.category}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{props.price}</td>
            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <button className="text-blue-600 dark:text-red-500 hover:underline" onClick={removeItems}>Del</button>
            </td>
        </tr >
    )
}

export default TableInfo;