import Sidebar from '../components/Sidebar';
import TableCard from './TableCard';

const Dashboard = () => {

    return (

        <div className='flex'>
            <Sidebar />
            <TableCard />
        </div>
    );
}

export default Dashboard;