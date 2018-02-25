import { FirechatPage } from './app.po';

describe('10.Firechat App', () => {
  let page: FirechatPage;

  beforeEach(() => {
    page = new FirechatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
