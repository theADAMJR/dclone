export interface MessageProps {
  message: any;
}

const Message: React.FunctionComponent<MessageProps> = (props) => {
  return (
    <div>{props.message}</div>
  );
}

export default Message;