import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export interface MessageBoxProps { }

const MessageBox: React.FunctionComponent<MessageBoxProps> = () => {
  const [content, setContent] = useState('');

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey)
      event.preventDefault();

    if (event.key !== 'Enter'
      || event.shiftKey
      || !content.trim()) return;

    alert(content);
  }

  return (
    <div>
      <TextareaAutosize
        onChange={e => setContent(e.target.value)}
        onKeyDown={onKeyDown} />
    </div>
  );
}

export default MessageBox;