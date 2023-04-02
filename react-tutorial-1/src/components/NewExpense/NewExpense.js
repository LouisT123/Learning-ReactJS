import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  return (
    <div className="new-expense">
      {/* call form component*/}
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;
