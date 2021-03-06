import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import CommonFooter from '../CommonFooter';

it('Component: CommonFooter Snapshots', () => {

  let tree: ReactTestRenderer;
  renderer.act(() => {
    tree = renderer
      .create(<CommonFooter/>);
  });
  // @ts-ignore
  expect(tree.toJSON()).toMatchSnapshot();
});

