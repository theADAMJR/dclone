import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export interface MessageBoxProps { }

const MessageBox: React.FunctionComponent<MessageBoxProps> = () => {
  const [channel, setChannel] = useState({ name: 'general' });
  const [content, setContent] = useState('');

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey)
      event.preventDefault();

    if (event.key !== 'Enter'
      || event.shiftKey
      || !content.trim()) return;

    setContent('');
  }

  return (
    <div className="px-4">
      <TextareaAutosize
        onChange={e => setContent(e.target.value)}
        onKeyDown={onKeyDown}
        value={content}
        rows={1}
        placeholder={`Message #${channel.name}`}
        className="resize-none normal appearance-none rounded-lg leading-tight focus:outline-none w-full inset-x-5 max-h-96 py-3 px-4" />
      <div className="text-sm w-full h-6"></div>
    </div>
  );
}

export default MessageBox;