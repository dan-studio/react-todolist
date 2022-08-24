const initialState = {
  list: [
    {
      id: 1,
      title: "go  to the gym",
      body: "from 9am",
      isDone: false,
    },
    {
      id: 2,
      title: "study react",
      body: "from 1pm",
      isDone: false,
    }
  ],
  currentTodo: {}, //현재
}
// Actions
const CREATE = 'todo/CREATE';
const READ = 'todo/READ';
const UPDATE = 'todo/UPDATE';
const DELETE = 'todo/DELETE';

// Action Creators
export function createTodo(todo) {
  return { type: CREATE, todo };
}

export function readTodo(todo_id) {
  return { type: READ, todo_id };
}

export function updateTodo(todo_id) {
  return { type: UPDATE, todo_id };
}

export function deleteTodo(todo_id) {
  return { type: DELETE, todo_id };
}


// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
      case "todo/CREATE": {
          const new_todo_list = [...state.list, action.todo];
          return { ...state, list: new_todo_list };
      }
      case "todo/READ": {
          const target_todo = state.list.filter((todo) => todo.id === action.todo_id)[0];

          return { ...state, current: target_todo };
      }
      case "todo/UPDATE": {
          const new_todo_list = state.list.map((todo) => {
              if (todo.id === action.todo_id) {
                  return { ...todo, isDone: !todo.isDone };
              }
              else {
                  return todo;
              }
          });
          return { ...state, list: new_todo_list };
      }
      case "todo/DELETE": {
          const new_todo_list = state.list.filter((todo) => {
              return todo.id !== action.todo_id;
          });
          return { ...state, list: new_todo_list };
      }
      default:
          return state;
  }
}