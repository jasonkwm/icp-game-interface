"use client";
import Image from "next/image";
import { signIn, initJuno, authSubscribe, User, signOut } from "@junobuild/core";
import { useEffect, useState } from "react";

export default function Home() {
    const [user, setUser] = useState<User | null | undefined>(undefined);

    useEffect(() => {
        (async () =>
            await initJuno({
                satelliteId: "yungi-5qaaa-aaaal-adpfq-cai",
            }))();
        const sub = authSubscribe((user) => setUser(user));
        return () => sub();
    }, []);
    console.log(user);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {user !== undefined && user !== null ? (
                <div>
                    {JSON.stringify(user)}
                    <button
                        type="button"
                        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => signOut()}
                    >
                        SignIn
                    </button>
                </div>
            ) : (
                <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => signIn()}
                >
                    SignIn
                </button>
            )}
        </main>
    );
}
