import { OxcordPage } from './app.po';

describe('oxcord App', () => {
  let page: OxcordPage;

  beforeEach(() => {
    page = new OxcordPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
