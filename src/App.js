import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: '你好！我是AI助手，有什么可以帮助你的吗？', sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        sender: 'user'
      };
      
      setMessages([...messages, newMessage]);
      
      // 模拟AI回复
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: `你说："${input}"。这是一个模拟的AI回复。`,
          sender: 'ai'
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
      
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Chat Starter</h1>
      </header>
      
      <div className="chat-container">
        <div className="messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-content">
                {message.text}
              </div>
            </div>
          ))}
        </div>
        
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="输入你的消息..."
            className="message-input"
          />
          <button onClick={handleSend} className="send-button">
            发送
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;