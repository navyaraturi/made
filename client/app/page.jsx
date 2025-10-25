"use client";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER);

export default function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    socket.on("message", (d) => {
      console.log(`User ${d} just pressed the button`);
    });
  }, []);

  function buttonHandler() {
    socket.emit("button_press", name ? name : "anonymous");
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-5xl mb-5">Emitter Game</h1>
      <input
        type="text"
        name="Enter your name"
        id=""
        className="border rounded px-2 py-1"
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button
        onClick={buttonHandler}
        className="bg-red-500 px-3 py-1 border-round-10 cursor-pointer"
      >
        send message to everyone
      </button>
    </div>
  );
}
