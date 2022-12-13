import { Comment } from '../../../types/comment';
import PopupComment from '../PopupComment/PopupComment';

interface PopupCommentsListProps {
  commentList: Comment[];
}

const PopupCommentsList = ({ commentList }: PopupCommentsListProps) => {
  return (
    <ul className='film-details__comments-list'>
      {commentList.map((comment) => (
        <PopupComment commentInfo={comment} key={comment.id} />
      ))}
    </ul>
  );
};

export default PopupCommentsList;
