import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  //to pass data up to app js
  function onSaveExpenseDataHandler(enteredExpenseData) {
      const expenseData = {
        ...enteredExpenseData,
        //create unique id 
        id: Math.random().toString()
      };
      //forward to app.js
      props.onAddExpense(expenseData);
    };


  return (
    <div className="new-expense">
      {/* call form component*/}
      <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
