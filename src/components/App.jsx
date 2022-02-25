import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from './utils/ProtectedRoute';
import Header from './Header';
import Container from './Container';
import Home from './pages/Home';
import Users from './pages/Users';
import DetailUser from './pages/DetailUser';
import EmptyUsers from './pages/EmptyUsers';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          >
            <Route index element={<EmptyUsers />} />
            <Route path=":id" element={<DetailUser />} />
          </Route>
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route
            path="/page4"
            element={
              <ProtectedRoute>
                <Page4 />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
