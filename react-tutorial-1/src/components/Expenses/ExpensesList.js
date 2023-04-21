import ExpenseItem from "./ExpenseItem"; //import this since we need it in the expenses content
import "./ExpensesList.css";

function ExpensesList(props) {
  //if no expenses found, push out message, otherwise display expenses
  if (props.items.length === 0) {
    return <h2 className='expenses-list_fallback'>No expenses were found</h2>;
  }

  //otherwise return unordered list with expenses 
  return (
    <ul className="expenses-list">
      {
        //grabs map array with expenses to render
        (props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))
      }
    </ul>
  );
}

export default ExpensesList;
