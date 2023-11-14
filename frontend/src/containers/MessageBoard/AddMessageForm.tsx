import React from 'react';
import { useMutation } from 'react-query';
import { Alert, TextField, Button } from '@mui/material';
import styled from 'styled-components';

import { post } from '../../utils/fetchRestApi';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

interface AddMessageFormProps {
  groupId: string;
  refreshBoardCallback: () => void;
}

const AddMessageForm = ({
  groupId,
  refreshBoardCallback,
}: AddMessageFormProps) => {
  const [message, setMessage] = React.useState('');

  const { mutate, isError } = useMutation({
    mutationKey: 'message',
    mutationFn: () => post.message({ groupId, message }),
    onSuccess: () => {
      setMessage('');
      refreshBoardCallback();
    },
  });

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      mutate();
    },
    []
  );

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(event.target.value);
    },
    []
  );

  if (isError)
    return (
      <Alert severity="error">
        <p>An error has occurred while adding your message.</p>
        <p>Please try again later.</p>
      </Alert>
    );

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        type="text"
        label="Enter your message here"
        value={message}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained">
        Send
      </Button>
    </Form>
  );
};

export default AddMessageForm;
