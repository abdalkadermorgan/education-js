import { Fragment, useState } from 'react';
import CourseAdd from '../components/CourseAdd';
import Sidebar from '../components/Sidebar';
import TableCard from './TableCard';
import Pagination from '../components/Pagination'
import TableSlider from './TableSlider';
import TableInfoGraphic from './TableInfographic';


const Dashboard = () => {
    const [modalIsShown, setModalIsShown] = useState(false);
    const showModalHandler = () => {
        setModalIsShown(true);
    };

    const hideModalHandler = () => {
        setModalIsShown(false);
    };
    return (
        <Fragment>
            {modalIsShown && <CourseAdd onClose={hideModalHandler} />}
            <div className='flex'>
                <Sidebar />
                <div className='w-full mx-auto'>
                    <TableCard onShowModal={showModalHandler} />
                    <Pagination />
                    <TableSlider />
                    <TableInfoGraphic />
                </div>
            </div>
        </Fragment>
    );
}

export default Dashboard;