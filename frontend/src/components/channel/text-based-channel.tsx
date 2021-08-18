import { useState } from 'react';
import Message from './message/message';

const TextBasedChannel: React.FunctionComponent = () => {
  const [messages, setMessages] = useState([
    { id: '1', content: 'hi' },
    { id: '2', content: 'hi again' },
  ]);

  return (
    <div>
      <div id="messages">
        {/* text channel header */}
        {messages.map(m => <Message key={m.id} message={m.content}></Message>)}
      </div>
    </div>
  );
}

export default TextBasedChannel;