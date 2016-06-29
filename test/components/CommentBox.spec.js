import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('Has className of comment-box', () => {
    expect(component).to.have.class('comment-box');
  });

  it('Has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('Has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text' , () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'New Comment');
    });

    it('Shows text that has been entered', () => {
      expect(component.find('textarea')).to.have.value('New Comment');
    });

    it('when sumitted, clears this input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
