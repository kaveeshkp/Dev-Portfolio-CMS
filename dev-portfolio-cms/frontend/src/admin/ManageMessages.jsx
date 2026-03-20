import { useEffect, useState } from "react";
import api from "../api/axios";

function ManageMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/admin/messages")
      .then((res) => setMessages(res.data))
      .catch((err) => setError(err.response?.data?.message || "Failed to load messages"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-white">Contact Messages</h1>

      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-slate-400">Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-slate-400">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="bg-slate-800 p-5 rounded-xl">
              <h2 className="text-xl font-bold text-white">{message.subject}</h2>
              <p className="text-slate-300"><span className="text-slate-500">Name:</span> {message.name}</p>
              <p className="text-slate-300"><span className="text-slate-500">Email:</span> {message.email}</p>
              <p className="mt-2 text-slate-400">{message.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageMessages;