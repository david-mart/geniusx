import { GeniusxPage } from './app.po';

describe('geniusx App', function() {
  let page: GeniusxPage;

  beforeEach(() => {
    page = new GeniusxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
