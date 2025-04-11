import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hi! Ask me about any skin disease or remedy.' }]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'user', text: input }];

    // Mock response (Replace this part with your real AI response)
    const botReply = {
      from: 'bot',
      text: `I'll find information on "${input}"... (This is a mock reply)`,
    };

    setMessages([...newMessages, botReply]);
    setInput('');
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-lg bg-white rounded shadow p-4">
        <h1 className="text-xl font-bold mb-4">SkinHealth+ AI Chat</h1>
        <div className="h-96 overflow-y-auto mb-4 border rounded p-2 bg-gray-50">
          {messages.map((msg, i) => (
            <div key={i} className={`mb-2 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block px-3 py-2 rounded ${msg.from === 'user' ? 'bg-blue-200' : 'bg-green-200'}`}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-grow border px-3 py-2 rounded-l"
            placeholder="Ask a question..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
