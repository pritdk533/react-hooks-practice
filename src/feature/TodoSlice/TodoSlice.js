import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodosHandler = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await axios.get("http://localhost:8001/todos");
    console.log("response", response);
    console.log("response- data", response.data);
    return response.data;
  }
);

export const addTodohandler = createAsyncThunk(
  "todos/addTodos",
  async (todo) => {
    const response = await axios.post("http://localhost:8001/todos", todo);

    return response.data;
  }
);

export const deleteTodoHandler = createAsyncThunk(
  "todos/deleteTodos",
  async (todoId) => {
    const response = await axios.delete(
      `http://localhost:8001/todos/${todoId}`
    );

    return todoId;
  }
);
const initialState = {
  isLoading: false,
  data: [],
  isError: false,
  errorMsg: null,
};

const todoSlice = createSlice({
  name: "TodoSlice",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      // state.push(action.payload); OR WE CAN DO RETURN NEW STATE
      // return { ...state, data: [...state.data, action.payload] };
      state.data.push(action.payload);
    },

    deleteTodo: (state, action) => {
      // return state.filter((todo) => {
      //   return todo.id !== action.payload;
      // });
      return {
        ...state,
        data: state.data.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };
    },

    toggleTodo: (state, action) => {
      // state.forEach((todo) => {
      //   if (todo.id === action.payload.id) {
      //     todo.isCompleted = !todo.isCompleted;
      //   }
      // }); OR ELSE
      // return state.map((todo) => {
      //   return todo.id === action.payload.id
      //     ? { ...todo, isCompleted: !todo.isCompleted }
      //     : todo;
      // });

      return {
        ...state,
        data: state.data.map((todo) => {
          return todo.id === action.payload.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo;
        }),
      };
    },

    editTodo: (state, action) => {
      return state;
    },
  },
  extraReducers: (builders) => {
    builders.addCase(fetchTodosHandler.pending, (state, action) => {
      console.log(" fetch / PEnding State", state, "action", action);
    }),
      builders.addCase(fetchTodosHandler.fulfilled, (state, action) => {
        console.log(" fetch / Fulfilled State", state, "action", action);
        state.data = action.payload;
      }),
      builders.addCase(fetchTodosHandler.rejected, (state, action) => {
        console.log(" fetch / Rejected State", state, "action", action);
      });

    // POST REQUEST
    builders.addCase(addTodohandler.pending, (state, action) => {
      console.log(" Post / PEnding State", state, "action", action);
    }),
      builders.addCase(addTodohandler.fulfilled, (state, action) => {
        console.log(" Post / Fulfilled State", state, "action", action);
        state.data.push(action.payload);
      }),
      builders.addCase(addTodohandler.rejected, (state, action) => {
        console.log(" Post / Rejected State", state, "action", action);
        state.errorMsg = action.error?.message;
      });

    // Delete Todo
    builders.addCase(deleteTodoHandler.pending, (state, action) => {
      console.log(" Delete / PEnding State", state, "action", action);
    }),
      builders.addCase(deleteTodoHandler.fulfilled, (state, action) => {
        console.log(" Delete / Fulfilled State", state, "action", action);
        state.data = state.data.filter((todo) => {
          return todo.id !== action.payload;
        });
      }),
      builders.addCase(deleteTodoHandler.rejected, (state, action) => {
        console.log(" Delete / Rejected State", state, "action", action);
        state.errorMsg = action.error?.message;
      });
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
