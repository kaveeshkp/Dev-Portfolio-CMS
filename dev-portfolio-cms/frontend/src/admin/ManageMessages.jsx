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

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Contact Messages</h1>
        <p className="mt-2 text-slate-600">View messages from your portfolio visitors</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6">
          {error}
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-500">Loading messages...</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-slate-500">No messages yet.</p>
            <p className="text-slate-400 text-sm mt-1">Messages from your contact form will appear here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="p-5 bg-slate-50 rounded-xl">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-slate-900">{message.name}</h3>
                    <a href={`mailto:${message.email}`} className="text-slate-600 text-sm hover:text-slate-900">
                      {message.email}
                    </a>
                  </div>
                  {message.createdAt && (
                    <span className="text-slate-400 text-xs">{formatDate(message.createdAt)}</span>
                  )}
                </div>
                {message.subject && (
                  <p className="text-sm font-medium text-slate-700 mb-2">{message.subject}</p>
                )}
                <p className="text-slate-600 whitespace-pre-wrap">{message.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageMessages;
