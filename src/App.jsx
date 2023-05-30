import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Spinner from './components/Spinner/Spinner'

const Public = React.lazy(() => import('./pages/Public'))
const Login = React.lazy(() => import('./pages/Login'))

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <Public />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Spinner />}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </>
  )
}

export default App
