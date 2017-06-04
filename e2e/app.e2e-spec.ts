import { AssignmentPage } from './app.po';

describe('assignment App', () => {
  let page: AssignmentPage;

  beforeEach(() => {
    page = new AssignmentPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
