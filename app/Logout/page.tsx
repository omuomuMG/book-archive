"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase";
import { useEffect } from "react";

export default function SignOut() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <button onClick={() => auth.signOut()}>サインアウト</button>
      <div>{user ? <p>ろぐいんんずむ</p> : <p>ずむくない</p>}</div>;
    </div>
  );
}
