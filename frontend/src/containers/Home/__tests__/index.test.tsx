import React from "react";
import { describe, it, expect } from '@jest/globals';
import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";

import Home from '../index';

describe('Home', () => {
  it('should render the Home component according to the snapshot', () => {

    const componentTree = (
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const tree = renderer.create(componentTree).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
