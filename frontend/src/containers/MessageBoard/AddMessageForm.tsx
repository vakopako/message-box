import React from 'react';
import { useMutation } from 'react-query';

import { post } from '../../utils/fetchRestApi';

interface AddMessageFormProps {
  groupId: string;
  refreshBoardCallback: () => void;
}

const AddMessageForm = ({ groupId, refreshBoardCallback }: AddMessageFormProps) => {
  const [message, setMessage] = React.useState('');

  const { mutate, isError } = useMutation({
    mutationKey: 'message',
    mutationFn: () => post.message({ groupId, message }),
    onSuccess: () => {
      setMessage('');
      refreshBoardCallback();
    },
  });

  const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate();
  }, []);

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }, []);
  
  if (isError) return (
    <div>
      <p>An error has occurred while adding your message.</p>
      <p>Please try again later.</p>
    </div>
  )

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
