import React from 'react';
import { jest, describe, expect, it } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';

import QrCode from '..';

jest.mock('canvas', () => ({
  toCanvas: jest.fn(),
}));

describe('QrCode', () => {
  it.only('renders without crashing', () => {
    render(<QrCode groupId="test-group-id" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  /**
   * @todo Fix this test
   */
  it('calls QrCodeLibrary.toCanvas with correct arguments', async () => {
    const QrCodeLibrary = require('canvas');
    render(<QrCode groupId="test-group-id" />);

    await waitFor(() => expect(QrCodeLibrary.toCanvas).toHaveBeenCalled());
  });
});
