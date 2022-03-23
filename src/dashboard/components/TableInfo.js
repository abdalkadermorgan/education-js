
const TableInfo = (props) => {
    return (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Imac 27"</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Desktop PC</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$1999</td>
            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">

                <button className="text-blue-600 dark:text-red-500 hover:underline">Del</button>
            </td>
        </tr >
    )
}

export default TableInfo;