"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-4xl font-bold">Next.js Starter</h1>
        <p className="text-gray-600">
          A modern starter with authentication and database
        </p>

        {status === "loading" && (
          <div className="text-gray-500">Loading...</div>
        )}

        {status === "authenticated" && session && (
          <div className="space-y-4">
            <div className="rounded-lg border bg-gray-50 p-4">
              <p className="text-sm text-gray-600">Welcome back!</p>
              <p className="font-medium">{session.user?.name}</p>
              <p className="text-sm text-gray-500">{session.user?.email}</p>
            </div>
            <button
              onClick={() => signOut()}
              className="w-full rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
            >
              Sign Out
            </button>
          </div>
        )}

        {status === "unauthenticated" && (
          <div className="space-y-4">
            <p className="text-gray-600">You are not signed in</p>
            <div className="space-y-2">
              <button
                onClick={() => signIn("google")}
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
              >
                Sign in with Google
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
