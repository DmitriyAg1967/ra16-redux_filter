import { useDispatch } from 'react-redux';
import { removeService, resetForm, setForm } from '../../actions/actionsCreater';

export default function ListItem({element}) {
  const dispatch = useDispatch()
  const { id, name, price } = element;

  const handleRemove = () => {
    dispatch(removeService(id));
    dispatch(resetForm())
  }

  const handleEdit = () => {
    dispatch(setForm(name, price, id));
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <span onClick={handleEdit} id={id} className='icon-edit'></span>
        <span onClick={handleRemove} id={id} className='icon-delete'></span>
      </td>
    </tr>
  )
}