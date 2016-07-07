import React from 'react';
import ReactDOM from 'react-dom';
import { renderSimpleComponent, expect } from '../test_helper';
import TestUtils from 'react-addons-test-utils';
import SearchBar from '../../src/components/SearchBar';

describe('src/components/SearchBar' , () => {
  it('renders something', () => {
    const componentInstance =  renderSimpleComponent(SearchBar);
    expect(componentInstance).to.exist;
  });

  it('renders something', () => {

  });

});
