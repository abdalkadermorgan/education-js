import { useNavigate } from 'react-router';


const TableInfo = (props) => {
    // const price = `$${props.price.toFixed(2)}`;
    
    // console.log(props)
    let courses = new Array(); 
    courses = JSON.parse(localStorage.getItem('CourseInfo'));
    
    
    const navigate = useNavigate();
   

    const removeItems = (id) => {
        console.log("id => ", id)

        if(id) {
            let new_courses = courses.filter((value) => value.id != id);

            console.log(new_courses)

                localStorage.setItem("CourseInfo", JSON.stringify(new_courses));
                // navigate('/Dashboard');
                window.location.reload();
        }
    }
    
    return (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{props.name}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{props.category}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{props.price}</td>
            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <button className="text-blue-600 dark:text-red-500 hover:underline" onClick={ () => removeItems(props.id)}>Del</button>
            </td>
        </tr >
    )
}

export default TableInfo;