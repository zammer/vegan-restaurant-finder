import { expect } from '../test_helper';
import CommentList from '../../src/actions/index';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('Actions' , () => {

  describe('saveComment' , () => {
    it('Has the correct type', () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('Has the correct payload', () => {
      const action = saveComment('hello mum');
      expect(action.payload).to.equal('hello mum');
    });
  });

});
