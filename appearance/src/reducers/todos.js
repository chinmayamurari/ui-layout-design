import todolist from '../components/todolist';

let count = 0;
const initialState = [];

export default Todos = (state = initialState, action) => {
  switch (action.type) {
    case 'AddTodo':
      const tempState = {
        id: count++,
        text: action.text,
        completed: false,
      };

      return [...state, tempState];

    case 'ToggleTodo': {
      let Todos = state;
      Todos.map(Todo => {
        if (Todo.id == action.id) {
          Todo.completed = !Todo.completed;
        }
      });
      return [...Todos];
    }

    case 'DeleteTodo':
      return [...state.filter(Todo => Todo.id !== action.id)];

    default:
      return state;
  }
};
