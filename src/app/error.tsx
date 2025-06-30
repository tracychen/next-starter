"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">⚠</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Something went wrong!
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          An unexpected error occurred while loading this page.
        </p>
        <button
          onClick={reset}
          className="mt-6 inline-block rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
