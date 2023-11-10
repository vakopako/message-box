import React from 'react';
import { render, screen } from '@testing-library/react';
import QrCode from '../';

jest.mock('qrcode', () => ({
  toCanvas: jest.fn(),
}));

describe('QrCode', () => {
  it('renders without crashing', () => {
    render(<QrCode groupId="test-group-id" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('calls QrCodeLibrary.toCanvas with correct arguments', () => {
    const { toCanvas } = require('qrcode');
    render(<QrCode groupId="test-group-id" />);
    expect(toCanvas).toHaveBeenCalledWith(
      expect.anything(),
      'https://www.message-box.local/test-group-id',
      expect.any(Function)
    );
  });
});
