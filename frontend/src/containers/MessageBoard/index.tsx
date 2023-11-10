import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

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
      <div>
        <p>No message box selected.</p>
      </div>
    );

  if (isLoading) return 'Loading...';

  if (isError)
    return (
      <div>
        <p>An error has occurred while loading the messages.</p>
        <p>Please try again later.</p>
      </div>
    );

  return (
    <>
      <Messages messages={messages?.payload} />
      <AddMessageForm groupId={groupId} refreshBoardCallback={refetch} />
    </>
  );
};

export default MessageBoard;
