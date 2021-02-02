import React from 'react';
import CardAttributeRow from './CardAttributeRow';
import TestRenderer from 'react-test-renderer';

describe('CardAttributeRow', () => {
  it('renders', () => {
    const component = TestRenderer.create(<CardAttributeRow attributeKey="" label="" value="" handleAttributeClick={()=>{}} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
