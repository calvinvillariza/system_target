import { TargetPage } from './app.po';

describe('target App', () => {
  let page: TargetPage;

  beforeEach(() => {
    page = new TargetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
