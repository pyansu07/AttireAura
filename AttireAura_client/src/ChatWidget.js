import React, { useEffect } from 'react';

const ChatButton = () => {
  useEffect(() => {
    // Create and append the script for chatbot configuration
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "bxFTxyCmN-B1knA-XpMst",
        domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(configScript);

    // Create and append the script for embedding the chatbot
    const embedScript = document.createElement('script');
    embedScript.src = 'https://www.chatbase.co/embed.min.js';
    embedScript.setAttribute('chatbotId', 'bxFTxyCmN-B1knA-XpMst');
    embedScript.setAttribute('domain', 'www.chatbase.co');
    embedScript.defer = true;
    document.body.appendChild(embedScript);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(embedScript);
    };
  }, []);

  const showChatbox = () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.chatbase.co/chatbot-iframe/bxFTxyCmN-B1knA-XpMst';
    iframe.style.width = '300px';
    iframe.style.height = '400px';
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.bottom = '0';
    iframe.style.right = '0';
    iframe.style.zIndex = '1000';
    iframe.id = 'chatbox';
    document.body.appendChild(iframe);

    // Close chatbox if already open
    const existingIframe = document.getElementById('chatbox');
    if (existingIframe) {
      existingIframe.remove();
    }
  };

  return (
    // <button onClick={showChatbox} style={buttonStyle}>
    //   Chat with us
    // </button>
    <div></div>
  );
};

const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '50px',
  padding: '10px 20px',
  cursor: 'pointer',
  zIndex: '1001',
};

export default ChatButton;
