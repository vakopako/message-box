import React from 'react';

import NoDataInterface from './NoDataInterface';

const Messages = ({ messages }) => {

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