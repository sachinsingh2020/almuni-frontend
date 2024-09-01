import React from 'react'

const Navbar = () => {
    return (
        <header className="shadow-xl mb-4 py-6">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Alumni Connect</h1>
                <nav className="space-x-12">
                    <a href="/unknown" className="text-gray-900 font-semibold">Donate</a>
                    <a href="/unknown" className="text-gray-900 font-semibold">Job Portal</a>
                    <a href="/unknown" className="text-gray-900 font-semibold">Profile</a>
                    <button className="bg-gradient-to-tr from-blue-700 to-blue-900  text-white px-4 py-1 rounded">Logout</button>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
