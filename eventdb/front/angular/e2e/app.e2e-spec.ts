import { EventdbPage } from './app.po';

describe('eventdb App', function() {
  let page: EventdbPage;

  beforeEach(() => {
    page = new EventdbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
