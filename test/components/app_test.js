import { renderComponent, expect } from '../test_helper';
import App from '../../src/client/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows the navigation component', () => {
    expect(component.find('div')).to.have.class('container');
  });

  it('has a menu items', () => {
    expect(component).to.contain('Pokedex');
    expect(component).to.contain('Types');
    expect(component).to.contain('Pokemon');
  });
});
