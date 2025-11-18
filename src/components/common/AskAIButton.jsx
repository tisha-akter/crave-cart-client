import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

const AskAIButton = () => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const STORAGE_KEY = "ask_ai_chat_history";
  const EXPIRY_DAYS = 7;

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        const now = new Date().getTime();
        const sevenDays = EXPIRY_DAYS * 24 * 60 * 60 * 1000;

        if (now - parsed.timestamp < sevenDays) {
          setMessages(parsed.messages || []);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      const data = {
        messages,
        timestamp: new Date().getTime(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [messages]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are CraveCart AI Assistant. CraveCart is a food delivery platform. Reply short and helpful. User asked: ${input}`,
                },
              ],
            },
          ],
        }),
      });

      const data = await response.json();
      let aiText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn’t process that.";

      aiText = aiText.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*/g, "");

      const aiMessage = { sender: "ai", text: aiText };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Error: Could not reach CraveCart AI." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Ask AI Button */}
      {visible && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          title="Ask CraveCart AI"
          className="fixed bottom-6 right-6 p-3 rounded-full text-white shadow-lg cursor-pointer z-50 mb-16
          bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 transition-all duration-300"
        >
          <FaRobot size={22} />
        </button>
      )}

      {/* AI Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white border border-gray-300 rounded-2xl shadow-xl flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 text-white
            bg-gradient-to-r from-orange-500 to-red-500">
            <h2 className="text-lg font-semibold">CraveCart AI Assistant</h2>
            <button onClick={() => setIsOpen(false)} className="cursor-pointer">
              <FaTimes size={18} />
            </button>
          </div>

          {/* Chat messages */}
          <div
            className="p-4 space-y-3 overflow-y-auto text-black"
            style={{ height: "300px" }}
          >
            {messages.length === 0 && (
              <p className="text-center text-gray-400 text-sm">
                Ask about food, orders, delivery time, or suggestions.
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] text-sm ${
                  msg.sender === "user"
                    ? "bg-orange-100 self-end ml-auto"
                    : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <p className="text-gray-500 text-sm italic">CraveCart AI is thinking...</p>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none text-black"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="px-4 py-2 rounded-lg text-white text-sm disabled:opacity-50
              bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AskAIButton;
