import { MynewappPage } from './app.po';

describe('mynewapp App', function() {
  let page: MynewappPage;

  beforeEach(() => {
    page = new MynewappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
