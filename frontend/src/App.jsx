import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppShell from './components/AppShell';
import Dashboard from './pages/Dashboard';
import ProductManagement from './pages/ProductManagement';
import BarcodeScanner from './pages/BarcodeScanner';
import LogsHistory from './pages/LogsHistory';
import Categories from './pages/Categories';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { AuthProvider, useAuth } from './context/AuthContext';
import * as api from './services/api';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null; // Or a loading spinner

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <AppShell>{children}</AppShell>;
};

function App() {
  const [products, setProducts] = useState([]);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [p, l] = await Promise.all([api.getProducts(), api.getLogs()]);
      setProducts(p || []);
      setLogs(l || []);
    } catch (err) {
      console.error('Failed to fetch data', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // We'll fetch data after auth is ready and user exists
    // But for now, let's keep it here and let api interceptor handle tokens
  }, []);

  const handleScan = async (scanData) => {
    const response = await api.scanBarcode(scanData);
    await fetchData();
    return response;
  };

  const handleProductChange = async () => {
    await fetchData();
  };

  const productById = useMemo(() => new Map(products.map((p) => [p.id, p])), [products]);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard
                  products={products}
                  logs={logs}
                  loading={loading}
                  productById={productById}
                  refreshData={fetchData}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductManagement
                  products={products}
                  onProductChange={handleProductChange}
                  productById={productById}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/scan"
            element={
              <ProtectedRoute>
                <BarcodeScanner products={products} onScan={handleScan} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <LogsHistory logs={logs} productById={productById} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <ProtectedRoute>
                <Categories products={products} loading={loading} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
