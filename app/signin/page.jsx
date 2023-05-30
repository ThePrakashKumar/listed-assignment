"use client";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";

const Signin = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const { data: session } = useSession();

  console.log({ session });

  if (session) {
    redirect("/");
  }
  return (
    <div>
      <h1>Signin</h1>
      <div>Is logged in: false</div>
      <button onClick={() => signIn("google", { callbackUrl })}>
        Signin with Google
      </button>
      <button>Logout</button>
    </div>
  );
};

export default Signin;
