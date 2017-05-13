import { PortfoliooPage } from './app.po';

describe('portfolioo App', function() {
  let page: PortfoliooPage;

  beforeEach(() => {
    page = new PortfoliooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
