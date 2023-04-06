import './AddForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInputValue,
  addService,
  resetForm,
  editService
} from '../../actions/actionsCreater'

export default function Form() {
  const dispatch = useDispatch();
  const { name, price, clickedId } = useSelector(state => state.item);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeInputValue(name, value));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!clickedId) {
      dispatch(addService(name, price));
      dispatch(resetForm());
    } else {
      dispatch(editService(name, price, clickedId));
      dispatch(resetForm());
    }
  }

  const handleCancel = (evt) => {
    dispatch(resetForm())
  }

  return (
    <div className="app__form form">
      <form onSubmit={handleSubmit} className="form">
        <input
          value={name}
          onChange={handleChange}
          name="name"
          type="text"
          className="form__input"
          placeholder='Введите наименование услуги'
          required
        />
        <input
          value={price}
          onChange={handleChange}
          name="price"
          type="number"
          className="form__input"
          placeholder='Введите стоимость'
          required
        />
        <button className="form__btn">Save</button>
      </form>
      {clickedId && <button onClick={handleCancel} className="form__btn">Cancel</button>}
    </div>
  )
}