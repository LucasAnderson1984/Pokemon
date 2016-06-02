import { renderComponent, expect } from '../../test_helper';
import PokedexesIndex from '../../../src/client/components/pokedexes/pokedexes_index';


describe('Pokedex Index', () => {


  it('has a div', () => {
    const component = renderComponent(App);
    expect(component.find('div')).to.exist;
  });

  it('has a PokedexList', () => {

  });
});
