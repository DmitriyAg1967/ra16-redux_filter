import { nanoid } from "nanoid";
import { ADD_SERVICE, REMOVE_SEVICE, EDIT_SERVICE, FILTER_LIST } from '../actions/actionTypes'

const initialState = [
  { id: 'qFSk45-WEv', name: 'Диагностика', price: 1 },
  { id: 'qFSD45-WER', name: 'Замена стекла', price: 1800 },
  { id: 'qFSj45-WjR', name: 'Обновление ПО', price: 5000 },
  { id: 'qFSx45-Wn', name: 'Обновление или восстановление Mac OS', price: 700 },
  { id: 'qFSx45-WR', name: 'Восстановление данных', price: 500 },
  { id: 'qFSx45-nR', name: 'Замена контроллера питания', price: 2500 },
  { id: 'qFS45-WnR', name: 'Ремонт материнской платы', price: 2500 },
  { id: 'qFx45-WnR', name: 'Ремонт мультиконтроллера', price: 2800 },
  { id: 'qSm45-WqR', name: 'Ремонт WI-FI модуля', price: 2300 },
  { id: 'FSx45-WnR', name: 'Ремонт видеочипа', price: 2500 },
  { id: '1qFSx45-WnR', name: 'Пайка разъемов на плате', price: 2100 },
  { id: 'q2FSx45-WnR', name: 'Перенос данных', price: 900 },
  { id: 'qF3Sx45-WnR', name: 'Замена force touch', price: 2000 },
  { id: 'qFS4x45-WnR', name: 'Ремонт видеочипа', price: 990 },
  { id: 'qFSx545-WnR', name: 'Сбор/разбор', price: 990 },
  { id: 'qFSx465-WnR', name: 'Ремонт блока питания', price: 3500 },
  { id: 'qFSx457-WnR', name: 'Замена / Ремонт оперативной памяти', price: 1600 }
]

const serviceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price }]
    case REMOVE_SEVICE:
      const { id } = action.payload;
      return state.filter(el => el.id !== id);
    case EDIT_SERVICE:
      const item = state.find((el) => el.id === action.payload.id);
      item.name = action.payload.name;
      item.price = action.payload.price;
      return state;
    default:
      return state;
  }
}

export default serviceListReducer;