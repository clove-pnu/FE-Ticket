import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/common/MainPage';
import MainLayout from './components/common/MainLayout';
import OwnerPage from './pages/deploy/OwnerPage';
import DeployPage from './pages/deploy/DeployPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />

          {/* Deployment */}
          <Route path="/owner" element={<OwnerPage />} />
          <Route path="/owner/deploy" element={<DeployPage />} />
        </Route>

        {/* Authentication */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
