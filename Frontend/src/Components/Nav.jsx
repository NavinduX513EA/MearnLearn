import React from 'react'

function Nav() {
    return (
        <nav style={{ 
            backgroundColor: '#333', 
            padding: '1rem',
            display: 'flex',
            gap: '2rem'
        }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
                Home
            </a>
            <a href="/add-employee" style={{ color: 'white', textDecoration: 'none' }}>
                Add Employee
            </a>
            <a href="/employee-details" style={{ color: 'white', textDecoration: 'none' }}>
                Employee Details
            </a>
            <a href="/login" style={{ color: 'white', textDecoration: 'none' }}>
                Login
            </a>
            <a href="/register" style={{ color: 'white', textDecoration: 'none', marginLeft: 'auto' }}>
                Register
            </a>

        </nav>
    )
}

export default Nav