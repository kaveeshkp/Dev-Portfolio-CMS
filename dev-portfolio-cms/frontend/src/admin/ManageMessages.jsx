import { useEffect, useState } from "react";
import api from "../api/axios";

function ManageMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.get("/contact").then((res) => setMessages(res.data));
  }, []);

  return (
    <div className="p-8 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-bold">{message.subject}</h2>
            <p><strong>Name:</strong> {message.name}</p>
            <p><strong>Email:</strong> {message.email}</p>
            <p className="mt-2">{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageMessages;