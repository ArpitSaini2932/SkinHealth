import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const chatRef = useRef(null);

  useEffect(() => {
    socket.on("message", (msg) => {
      setChat((prevChat) => [...prevChat, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const sendMessage = () => {
    if (message.trim() === "") return;
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Live Chat</h2>

      <div className="w-full max-w-lg h-96 bg-white shadow-lg rounded-lg p-4 overflow-y-auto">
        {chat.map((msg, index) => (
          <div 
            key={index} 
            className={`p-2 my-2 rounded-lg ${
              index % 2 === 0 ? "bg-blue-100 text-blue-900 self-end" : "bg-gray-200 text-gray-900"
            }`}
          >
            {msg}
          </div>
        ))}
        <div ref={chatRef} />
      </div>

      <div className="w-full max-w-lg mt-4 flex items-center gap-2">
        <input
          type="text"
          value={message}
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
