import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 text-center px-4">
          <div>
            <h1 className="text-9xl font-bold text-gray-900">404</h1>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Page Not Found</h2>
            <p className="mt-2 text-sm text-gray-600">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
          </div>
          <div className="mt-8">
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 