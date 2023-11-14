import React from 'react';
import { List, ListItem } from '@mui/material';

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
    <List>
      {messages.map(message => (
        <ListItem key={message.id}>{message.content}</ListItem>
      ))}
    </List>
  );
};

export default Messages;
