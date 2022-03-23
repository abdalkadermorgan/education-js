import Modal from "../../components/UI/Modal";


const CourseAdd = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div className="mb-6">
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black">Large input</label>
                <input type="text" id="large-input" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 " />
            </div>
            <div className="mb-6">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-black">Base input</label>
                <input type="text" id="base-input" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 " />
            </div>
            <div>
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-black">Small input</label>
                <input type="text" id="small-input" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 border-white-600 " />
            </div>
            <div className="flex justify-end mt-3">
                <button onClick={props.onClose} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-4 rounded">close</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
            </div>
        </Modal>
    )
}

// const CourseAdd = () => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <Button variant="primary" onClick={handleShow}>
//                 Launch static backdrop modal
//             </Button>
//             <Modal
//                 show={show}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title>Modal title</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     I will not close if you click outside me. Don't even try to press
//                     escape key.
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary">Understood</Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }


export default CourseAdd;