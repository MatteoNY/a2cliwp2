import { MioPage } from './app.po';

describe('mio App', function() {
  let page: MioPage;

  beforeEach(() => {
    page = new MioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
