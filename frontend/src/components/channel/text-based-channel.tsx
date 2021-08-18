import { useState } from 'react';
import MessageBox from './message-box';
import Message from './message/message';

const TextBasedChannel: React.FunctionComponent = () => {
  const [messages, setMessages] = useState([
    { id: '1', content: 'hi', createdAt: new Date() },
    { id: '2', content: 'hi again', createdAt: new Date() },
  ]);

  const onCreate = (content: string) => {
    setMessages(messages.concat(
      {
        id: (messages.length + 1).toString(),
        content,
        createdAt: new Date(),
      },
    ));
  }

  return (
    <div className="h-full flex flex-col flex-grow">
      <div
        id="messages"
        className="overflow-auto mb-5 mr-1 mt-1 flex-grow">
        {/* text channel header */}
        {messages.map(m => <Message key={m.id} message={m}></Message>)}
      </div>
      <MessageBox onCreate={onCreate} />
    </div>
  );
}

export default TextBasedChannel;