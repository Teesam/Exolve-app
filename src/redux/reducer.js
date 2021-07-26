import {
    ADD_TODO,
    TOGGLE_RESOLVED,
    SET_USER
} from './actions';

const initialState = {
  todoList:  [
    {
        title: 'Eat',
        resolved: false,
        id: 1
    }
],

user:  ''

};
let lastId = 1;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
          return{ ...state,
            todoList: [...state.todoList, {
                id: ++lastId,
                title: action.payload.title,
                resolved: false
          } ]};
          case TOGGLE_RESOLVED:
          return{
            ...state, todoList: [
              ...state.todoList.map(todo => {
                 if(todo.id === action.payload.id){
                    return{
                      ...todo, resolved: !todo.resolved
                    }
                 }
                 return todo;
              })
            ]
          };
        case SET_USER:
        return {
          ...state, user: action.payload
        };
        
        default:
            return state ;
    }

}

export default reducer;