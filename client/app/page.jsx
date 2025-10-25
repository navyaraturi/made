import { io } from "socket.io-client";

const socket = io(
  "https://weary-cauldron-x5gvv5j9wxrghpx5x-5001.app.github.dev"
);

console.log(socket);

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hello there</h1>
    </div>
  );
}
