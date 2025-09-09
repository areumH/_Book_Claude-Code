import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

// Layout
import { MainLayout } from '@/components/layout/MainLayout'
import { AuthLayout } from '@/components/layout/AuthLayout'

// Pages
import { HomePage } from '@/pages/HomePage'
import { CafesPage } from '@/pages/CafesPage'
import { CafeDetailPage } from '@/pages/CafeDetailPage'
import { ReservationPage } from '@/pages/ReservationPage'
import { MyReservationsPage } from '@/pages/MyReservationsPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { LoginPage } from '@/pages/auth/LoginPage'
import { RegisterPage } from '@/pages/auth/RegisterPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

// Admin pages
import { AdminDashboardPage } from '@/pages/admin/DashboardPage'
import { CafeManagementPage } from '@/pages/admin/CafeManagementPage'
import { UserManagementPage } from '@/pages/admin/UserManagementPage'
import { ReservationManagementPage } from '@/pages/admin/ReservationManagementPage'

// Route guards
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'

function App() {
  return (
    <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            {/* Auth routes */}
            <Route
              path="/auth/*"
              element={
                <AuthLayout>
                  <Routes>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                  </Routes>
                </AuthLayout>
              }
            />

            {/* Main app routes */}
            <Route
              path="/*"
              element={
                <MainLayout>
                  <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cafes" element={<CafesPage />} />
                    <Route path="/cafes/:id" element={<CafeDetailPage />} />

                    {/* Protected user routes */}
                    <Route
                      path="/reserve/:cafeId/:seatId"
                      element={
                        <ProtectedRoute>
                          <ReservationPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/my-reservations"
                      element={
                        <ProtectedRoute>
                          <MyReservationsPage />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/profile"
                      element={
                        <ProtectedRoute>
                          <ProfilePage />
                        </ProtectedRoute>
                      }
                    />

                    {/* Admin routes */}
                    <Route
                      path="/admin/*"
                      element={
                        <ProtectedRoute>
                          <Routes>
                            <Route path="dashboard" element={<AdminDashboardPage />} />
                            <Route path="cafes" element={<CafeManagementPage />} />
                            <Route path="users" element={<UserManagementPage />} />
                            <Route path="reservations" element={<ReservationManagementPage />} />
                          </Routes>
                        </ProtectedRoute>
                      }
                    />

                    {/* 404 route */}
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </MainLayout>
              }
            />
          </Routes>
        </div>

        {/* Toast notifications */}
        <Toaster />
      </Router>
  )
}

export default App