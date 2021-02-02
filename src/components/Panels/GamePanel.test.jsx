import React from 'react';
import GamePanel from './GamePanel';
import CardContainer from '../card/CardContainer';

import TestRenderer from 'react-test-renderer';

describe('GamePanel', () => {
  it('renders', () => {
    const component = TestRenderer.create(<GamePanel player1Card={{}} player2Card={{}} handleAttributeSelection={()=>{}} lastWinner="" selectedAttribute="" status="" isDraw={false} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findAllByType(CardContainer)).not.toBeNull();
  });
});
