import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { Outlet } from 'react-router'

const cookies = new Cookies()

export default function PrivateRoute() {
    const user = cookies.get('user')

    return user ? <Outlet/> : <Navigate to="/login"/>
}
