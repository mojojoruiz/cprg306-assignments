// /app/pages/index.js
import React from 'react';
import Link from 'next/link';
import StudentInfo from '../StudentInfo';

const Home = () => {
  return (
    <div>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <StudentInfo />
    <Link href="/week2">
        <a>Go to Week 2</a>
    </Link>
    </div>
);
};

export default Home;
