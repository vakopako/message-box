import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Alert } from '@mui/material';

import { get } from '../../utils/fetchRestApi';
import Messages from './Messages';
import AddMessageForm from './AddMessageForm';

const MessageBoard = () => {
  const { groupId } = useParams();

  const {
    isLoading,
    isError,
    data: messages,
    refetch,
  } = useQuery(get.messages(groupId));

  if (!groupId)
    return (
      <Alert severity="info">
        <p>No message box selected.</p>
      </Alert>
    );

  if (isLoading) return 'Loading...';

  if (isError)
    return (
      <Alert severity="error">
        <p>An error has occurred while loading the messages.</p>
        <p>Please try again later.</p>
      </Alert>
    );

  return (
    <>
      <Messages messages={messages?.payload} />
      <AddMessageForm groupId={groupId} refreshBoardCallback={refetch} />
    </>
  );
};

export default MessageBoard;
