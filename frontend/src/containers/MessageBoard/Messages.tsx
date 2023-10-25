import NoDataInterface from './NoDataInterface';

interface Message {
  id: string;
  content: string;
}

interface MessagesProps {
  messages: Message[];
}

const Messages = ({ messages }: MessagesProps) => {

  if (!Array.isArray(messages)) return <NoDataInterface />;

  return (
    <ul>
      {messages.map(message => (
        <li key={message.id}>{message.content}</li>
      ))}
    </ul>
  );
}

export default Messages;