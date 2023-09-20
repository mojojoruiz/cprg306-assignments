import React from 'react';
import StudentInfo from '../StudentInfo';

export default function Week2() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>My Shopping List</h1>
        <StudentInfo /> {/* Render the StudentInfo component */}
      </div>
      {/* Additional styling can be added here */}
    </main>
  );
}
