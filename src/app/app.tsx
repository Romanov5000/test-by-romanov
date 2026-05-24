import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Applications } from '../pages/applications'
import { ApplicationsCreate } from '../pages/applicationsCreate'
import { ROUTES } from '../shared/config/routes'
import { AppLayout } from './layouts/appLayout'
import { AppProvider } from './provider/appContext'

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppLayout>
          <Routes>
            <Route path={ROUTES.APPLICATIONS} element={<Applications />} />
            <Route path={ROUTES.CREATE_APPLICATION} element={<ApplicationsCreate />} />
            <Route path="*" element={<Navigate to={ROUTES.APPLICATIONS} />} />
          </Routes>
        </AppLayout>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
