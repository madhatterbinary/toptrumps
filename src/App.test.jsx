import React from 'react';
import App from './App';
import ScoreNav from './components/Navigation/ScoreNav';
import GamePanel from './components/Panels/GamePanel';
import ControlNav from './components/Navigation/ControlNav';

import TestRenderer from 'react-test-renderer';

describe('App', () => {
  it('renders', () => {
    const component = TestRenderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findAllByType(ScoreNav)).not.toBeNull();
    expect(component.root.findAllByType(GamePanel)).not.toBeNull();
    expect(component.root.findAllByType(ControlNav)).not.toBeNull();
  });
});
