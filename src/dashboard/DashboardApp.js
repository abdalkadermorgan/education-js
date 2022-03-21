import Sidebar from './components/Sidebar'
import TableCard from './pages/TableCard';
import Pagination from './components/Pagination';


const DashboardApp = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full mx-auto'>
                <TableCard />
                <Pagination />
            </div>

        </div>
    )
}

export default DashboardApp;