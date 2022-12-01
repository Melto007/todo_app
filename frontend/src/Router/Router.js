import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import MainPage from "../screens/MainPage"
import Login from "../screens/Login"

const Router = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/menu' element={<MainPage />} />
        </Routes>
    </Router>
  )
}

export default Router