"use client";
import { io } from "socket.io-client";
import { useEffect } from "react";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER);
console.log(process.env.NEXT_PUBLIC_SOCKET_SERVER);

export default function Home() {
  useEffect(() => {
    socket.emit("client_ready", "hello from client");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hello there</h1>
    </div>
  );
}
