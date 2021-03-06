jest.dontMock('../pagination');
jest.dontMock('../../utils/react-router-context');

import React from 'react/addons';
let Pagination = require('../pagination');
const reactRouterContext = require('../../utils/react-router-context');
const TestUtils = React.addons.TestUtils;

Pagination = reactRouterContext(Pagination);

describe('Pagination', () => {

  it('shows Previous if there are previous pages', () => {
    const pagination = TestUtils.renderIntoDocument(<Pagination current={2} total={2} />);
    const parent = TestUtils.findRenderedDOMComponentWithTag(pagination, 'div');
    expect(parent.getDOMNode().textContent).toEqual('«');
  });

  it('does not show Previous if there are not previous pages', () => {
    const pagination = TestUtils.renderIntoDocument(<Pagination current={1} total={1} />);
    const parent = TestUtils.findRenderedDOMComponentWithTag(pagination, 'div');
    expect(parent.getDOMNode().textContent).toEqual('');
  });

  it('shows Next if there are next pages', () => {
    const pagination = TestUtils.renderIntoDocument(<Pagination current={1} total={2} />);
    const parent = TestUtils.findRenderedDOMComponentWithTag(pagination, 'div');
    expect(parent.getDOMNode().textContent).toEqual('»');
  });

  it('does not show Next if there are not next pages', () => {
    const pagination = TestUtils.renderIntoDocument(<Pagination current={1} total={1} />);
    const parent = TestUtils.findRenderedDOMComponentWithTag(pagination, 'div');
    expect(parent.getDOMNode().textContent).toEqual('');
  });

});
