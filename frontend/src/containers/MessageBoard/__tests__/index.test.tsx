import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { mockedFetch } from '../../../utils/fetchRestApi/__test__/utils/mockedFetch';

import MessageBoard from '..';

const GROUP_ID = 'cf717718-6787-11ee-8c99-0242ac120002';

global.fetch = mockedFetch;

test('renders MessageBoard with messages', async () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[`/group/${GROUP_ID}`]}>
        <Routes>
          <Route path="/group/:groupId" element={<MessageBoard />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );

  await waitFor(() =>
    expect(screen.getByText('Hello world!')).toBeInTheDocument()
  );
});
