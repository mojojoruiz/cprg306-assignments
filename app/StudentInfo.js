// /app/StudentInfo.js
import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
return (
    <div>
    <h2>Johannah Ruiz</h2>
    <p>CPRG 306 B</p>
    <Link href="https://github.com/mojojoruiz">
        <a>Link to GitHub repository</a>
    </Link>
    </div>
);
};

export default StudentInfo;
