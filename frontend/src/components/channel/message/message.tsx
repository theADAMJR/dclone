export interface MessageProps {
  message: any;
}

const Message: React.FunctionComponent<MessageProps> = ({ message }) => {
  const LeftSide = () => (
    <div>left side</div>
  );

  return (
    <div className={`message flex`}>
      <div className="flex-shrink-0 left-side text-xs w-16 mr-2 pl-5 pt-1"><LeftSide /></div>
      <div className="relative flex-grow px-2">
        <div className="normal whitespace-pre-wrap">{message.content}</div>
      </div>
      <div className="right-side w-12" />
    </div>
  );
}

export default Message;