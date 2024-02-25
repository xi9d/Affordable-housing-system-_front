import React from 'react';

function Signup() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input type="text" id="username" className="w-full px-3 text-slate-900 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" className="w-full px-3 text-slate-900 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input type="password" id="password" className="w-full px-3 text-slate-900 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
