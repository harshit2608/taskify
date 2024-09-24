import { deleteBoard } from '@/actions/delete-board';
import FormDelete from './form-delete';

type BoardProps = {
  title: string;
  id: string;
};

const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form className="flex items-center gap-x-2" action={deleteBoardWithId}>
      <p>Board title: {title}</p>
      <FormDelete />
    </form>
  );
};

export default Board;
