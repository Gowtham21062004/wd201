const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
        
      // Write the date check condition here and return the array
      // of overdue items accordingly.
      let Overdueanswer = [];
      Overdueanswer = all.filter((TodoList) => TodoList.dueDate < new Date().toLocaleDateString("en-CA"));
      return Overdueanswer;
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      let DueTodayanswer = [];
      DueTodayanswer=all.filter((TodoList) => TodoList.dueDate === new Date().toLocaleDateString("en-CA"));
      return DueTodayanswer;
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      let DueLateranswer = [];
      DueLateranswer = all.filter((TodoList) => TodoList.dueDate > new Date().toLocaleDateString("en-CA"));
      return DueLateranswer;
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      return list.map(
        (TodoList) =>
          `[${TodoList.completed ? "x" : " "}] ${TodoList.title} ${
            TodoList.dueDate !== formattedDate(new Date()) ? TodoList.dueDate : ""
          }`).join("\n").trim();
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  module.exports = todoList;
