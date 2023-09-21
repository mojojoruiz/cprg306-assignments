import React from 'react';
import Link from 'next/link';

function StudentInfo() {
return (
    <div>
    <p>Your name: Johannah Ruiz</p>
    <p>Your course section: CPRG 306 B</p>
    <p>
        <Link href="https://github.com/mojojoruiz">
        Link to your GitHub repository
        </Link>
    </p>
    </div>
);
}

export default StudentInfo;
