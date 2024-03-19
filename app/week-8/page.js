"use client";

import React from 'react';
import { useUserAuth } from './_utils/auth-context';
import Link from 'next/link';


const LandingPage = () => {
// Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();


  // Function for Logging in with github authentication
  const handleLogin = async () => {
    await gitHubSignIn();
  };

  //Function for signing out
  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (

    <div>
        <h1 className="text-4xl font-bold m-6 text-black-300">Shopping List</h1>
      {!user ? (
        // This function ask you to login with github if the user is not login
        <button className='bg-yellow-200 border-black rounded-md shadow-md' onClick={handleLogin} >Login with GitHub</button>
      ) : (

        // Display some of the user's information
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <div>
          <button onClick={handleLogout} className='bg-yellow-200 border-black rounded-md shadow-md'>Logout</button>
          </div>
          <div>
          <Link href="/week-8/shopping-list" className='bg-yellow-200 border-black rounded-md shadow-md'>Go to Shopping List</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
