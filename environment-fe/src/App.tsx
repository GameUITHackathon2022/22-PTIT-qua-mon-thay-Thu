import Map from 'pages/Map';
import ResolverReportDetail from 'pages/ResolverReportDetail';
import ResolverReports from 'pages/ResolverReports';
import ReportDetailOfReportor from 'pages/ReportDetailOfReportor';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Reportor from './pages/Reportor';
import Top10Users from 'pages/Top10Users/Top10Users';
import Home from 'pages/Home';
import { useAppSelector } from 'app/hooks';
import { User } from 'services/userAPI';
function App() {
    const user: any = useAppSelector((state) => state.user);
    console.log('user');
    return (
        <Routes>
            {user.user.is_resolver ? (
                <Route path='/report-list' element={<ResolverReports />} />
            ) : (
                <Route path='/report-list' element={<Reportor />} />
            )}
            {user.user.is_resolver && (
                <Route
                    path='/resolver/report'
                    element={<ResolverReportDetail />}
                />
            )}

            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
        </Routes>
    );
}

export default App;
