import React from 'react';
import Link from 'next/link';
import StudentInfo 
from '../app/StudentInfo'; // Update the import path

export default function Home() {
return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo /> {/* Render the StudentInfo component */}
        <p>
        <Link href="/week2">
            Week 2 Assignment
        </Link>
        <br></br>
        <Link href="/week3">
            Week 3 Assignment
        </Link>
        <br></br>
        <Link href="/week4">
            Week 4 Assignment
        </Link>
        <br></br>
        <Link href="/week5">
            Week 5 Assignment
        </Link>
        <br></br>
        <Link href="/week6">
            Week 6 Assignment
        </Link>
        <br></br>
        <Link href="/week7">
            Week 7 Assignment
        </Link>
        <br></br>
        
        </p>
    </div>
    </main>
);
}
