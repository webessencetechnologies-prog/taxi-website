import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: 'Hello! How can I help you today?',
      timestamp: new Date(Date.now() - 300000)
    }
  ]);

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (message?.trim()) {
      const newMessage = {
        id: messages?.length + 1,
        sender: 'user',
        text: message,
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      setTimeout(() => {
        const agentResponse = {
          id: messages?.length + 2,
          sender: 'agent',
          text: 'Thank you for your message. Our team will assist you shortly.',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, agentResponse]);
      }, 1000);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 z-50"
          aria-label="Open live chat"
        >
          <Icon name="MessageCircleDashed" size={28} color="var(--color-primary-foreground)" />
        </button>
      )}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-card rounded-2xl shadow-2xl border border-border flex flex-col z-50 animate-slide-up">
          <div className="bg-primary rounded-t-2xl p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Icon name="Headphones" size={20} color="var(--color-primary-foreground)" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">Live Support</h3>
                <p className="text-xs text-primary-foreground/80">We're here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <Icon name="X" size={20} color="var(--color-primary-foreground)" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages?.map((msg) => (
              <div
                key={msg?.id}
                className={`flex ${msg?.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg?.sender === 'user' ?'bg-primary text-primary-foreground' :'bg-muted text-foreground'
                  }`}
                >
                  <p className="text-sm">{msg?.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg?.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {msg?.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e?.target?.value)}
                className="flex-1"
              />
              <Button
                type="submit"
                variant="default"
                size="icon"
                iconName="Send"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;