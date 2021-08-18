import { useState } from 'react';
import environment from '../../../env/environment';
import moment from 'moment';

import './message.scoped.css';

export interface MessageProps {
  message: any;
  prevMessage?: any;
}

const Message: React.FunctionComponent<MessageProps> = ({ message, prevMessage }) => {
  const [author, setAuthor] = useState({
    avatarURL: 'https://pixabay.com/get/g5cc033fed4d29e00d8868eaab2e1784722396611970759262433dcd9ab973059dc7cf30844511b2fa65ea4d058c9944b_640.png',
    username: 'ADAMJR',
  });
  const createdAt = new Date(message.createdAt);

  const isExtra = () => {
    if (!prevMessage) return false;

    const minsSince = moment(createdAt).diff(prevMessage.createdAt, 'minutes');
    const minsToSeparate = 5;

    return minsSince <= minsToSeparate
      && prevMessage.authorId === message.authorId;
  }

  const LeftSide = () => (isExtra())
    ? <span className="timestamp text-xs">{moment(createdAt).format('HH:mm')}</span>
    : <img
      className="rounded-full cursor-pointer w-10 h-10"
      src={`${environment.rootAPIUrl}${author.avatarURL}`}
      alt={author.username} />

  const MessageHeader = () => {
    if (isExtra()) return null;

    const days = moment(new Date()).diff(createdAt, 'day');
    const day = {
      [1]: 'Yesterday',
      [0]: 'Today',
      [-1]: 'Tomorrow',
    }[days];
    const timestamp = (day) ? `[${day}] [at] HH:mm` : 'DD/MM/YYYY';

    return (
      <>
        <span className="heading hover:underline cursor-pointer mr-2">{author.username}</span>
        <span className="text-xs">{moment(createdAt).format(timestamp)}</span>
      </>
    );
  }

  return (
    <div className={`message flex ${!isExtra() && 'mt-4'}`}>
      <div className="flex-shrink-0 left-side text-xs w-16 mr-2 pl-5 pt-1"><LeftSide /></div>
      <div className="relative flex-grow px-2">
        <MessageHeader />
        <div className="normal whitespace-pre-wrap">{message.content}</div>
      </div>
      <div className="right-side w-12" />
    </div>
  );
}

export default Message;