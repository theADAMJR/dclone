const TextBasedChannel: React.FunctionComponent = () => {
  const messages = [
    { id: '1', content: 'hi' },
    { id: '2', content: 'hi again' },
  ];

  return (
    <div>
      <div id="messages">
        {/* text channel header */}
        {messages.map(m => <div key={m.id}>{m.content}</div>)}
      </div>
    </div>
  );
}

export default TextBasedChannel;