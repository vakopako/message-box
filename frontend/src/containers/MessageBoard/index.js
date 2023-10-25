import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { get } from '../../utils/fetchRestApi';
import Messages from './Messages';

const MessageBoard = () => {
  const { groupId } = useParams();

  const { isPending, error, data: messages, refetch } = useQuery(get.messages(groupId));

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <Messages messages={messages?.payload} />
    </>
  );
};

export default MessageBoard;
