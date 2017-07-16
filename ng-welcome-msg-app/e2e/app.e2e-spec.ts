import { NgWelcomeMsgAppPage } from './app.po';

describe('ng-welcome-msg-app App', () => {
  let page: NgWelcomeMsgAppPage;

  beforeEach(() => {
    page = new NgWelcomeMsgAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
