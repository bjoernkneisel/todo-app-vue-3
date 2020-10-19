import { reactive, readonly } from "vue";

const state = reactive({
  // Tasks-Array
  tasks: [
    {
      id: 1,
      description: "Mit Yuki Gassi gehen",
      done: true
    },
    {
      id: 2,
      description: "Motorrad putzen",
      done: false
    },
    {
      id: 3,
      description: "In Vue 3 einlesen",
      done: true
    },
    {
      id: 4,
      description: "Was über Netlify deployen",
      done: false
    }
  ],
  nextId: 5,
  tasksFiltered: [],
  activeTab: "all",
});

// Filter Method
const filterTodos = function(filterOption) {
  switch (filterOption) {
    case "done":
      state.tasksFiltered = state.tasks.filter((task) => task.done);
      state.activeTab = "done";
      break;
    case "undone":
      state.tasksFiltered = state.tasks.filter((task) => !task.done);
      state.activeTab = "undone";
      break;
    default:
      state.activeTab = "all";
      state.tasksFiltered = [...state.tasks];
  }
}

// Add To-Do Method
const addTodo = function(todo) {
  const newTodoObj = {
    id: state.nextId,
    description: todo,
    done: false,
  };

  state.tasks.push(newTodoObj);
  filterTodos(state.activeTab);
  // Put next on next
  state.nextId++;
}

// Delete To-Do Method
const deleteTask = function(task) {
  state.tasks = state.tasks.filter((todoObj) => todoObj.id !== task.id);
  filterTodos(state.activeTab);
}

// Update/Toggle Task-Status Method
const toggleTaskStatus = function(task) {
  const taskObj = state.tasks.find((item) => item.id === task.id)
  taskObj.done = !taskObj.done
  filterTodos(state.activeTab);
}

export default { 
  state: readonly(state), 
  filterTodos, 
  addTodo, 
  deleteTask, 
  toggleTaskStatus
};