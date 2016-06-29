import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/containers/RestaurantList';

describe('CommentList' , () => {
  let component;

  beforeEach(() => {
    const props = {comments: ['Comment 1', 'Comment 2']};
    component = renderComponent(CommentList, null, props);
  });

  it('Has className of comment-list', () => {
    expect(component).to.have.class('comment-list');
  });

  it('Shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('Shows each comment provided', () => {
    expect(component).to.contain('Comment 1');
    expect(component).to.contain('Comment 2');
    expect(component.find('li')[0].innerHTML).to.equal('Comment 1');
    expect(component.find('li')[1].innerHTML).to.equal('Comment 2');
  });
});
