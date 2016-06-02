import { renderComponent, expect } from '../test_helper';
import App from '../../src/client/components/app';

describe('App', () => {
  // it('shows the navigation component', () => {
  //   const component = renderComponent(App);
  //   expect(component).to.have.class('container');
  // }),

  it('has a menu items', () => {
    const component = renderComponent(App);
    expect(component).to.contain('Pokedex');
    expect(component).to.contain('Types');
    expect(component).to.contain('Pokemon');
  });
});
