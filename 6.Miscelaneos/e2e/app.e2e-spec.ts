import { MiscelaneosPage } from './app.po';

describe('6.Miscelaneos App', () => {
  let page: MiscelaneosPage;

  beforeEach(() => {
    page = new MiscelaneosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
