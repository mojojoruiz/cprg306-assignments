"use client";

import React, { useEffect } from 'react';
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    useEffect(() => {
        // sign in the user when the component mounts
        gitHubSignIn().catch(error => console.error('Error signing in:', error));

        // sign out the user when the component unmounts
        return () => {
            firebaseSignOut().catch(error => console.error('Error signing out:', error));
        };
    }, []);

    if (!user) {
        return <p>Loading...</p>; // display a loading message while the user object is null
    }

    return <p>Welcome, {user.displayName} ({user.email})</p>;
}
