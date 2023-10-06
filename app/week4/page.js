import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link'; // Import Link for client-side routing

const NewItem = dynamic(() => import('./new-item'), { ssr: false });

function Page() {
    return (
        <div>
            <NewItem />
            {/* Use Link for client-side navigation */}
            <Link href="/another-page">
                <a>Go to Another Page</a>
            </Link>
        </div>
    );
}

export default Page;
