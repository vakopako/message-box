import React from 'react';
import { useMutation, mutate } from 'react-query';

import { post } from '../../utils/fetchRestApi';


const AddMessageForm = ({ groupId, refreshBoardCallback }) => {
  const [message, setMessage] = React.useState('');

  const { mutate } = useMutation({
    mutationKey: 'message',
    mutationFn: () => post.message({ groupId, message }),
    onSuccess: () => {
      setMessage('');
      refreshBoardCallback();
    },
    onError: error => {
      throw new Error(error);
    },
  });

  const handleSubmit = React.useCallback(event => {
    event.preventDefault();
    mutate();
  }, []);

  const handleChange = React.useCallback(event => {
    setMessage(event.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Enter your message here"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddMessageForm;
