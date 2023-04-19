//import style
import "./Expenses.css";
//uses expenseItem to formulate full item component
import ExpenseItem from "./ExpenseItem";
//use custom wrapper component for drop shadow
import Card from "../UI/Card";
//import expense filter
import ExpensesFilter from "./ExpensesFilter";
//state
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  //set filter state
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
    //console.log('Expenses.js');
    //console.log(selectedYear);
  };
  //year filter logic, filters array and returns new array with filtered items 
  const filteredExpenses = props.items.filter(expense => {
    //if date matches filtered year... return new array
    return expense.date.getFullYear().toString() === filteredYear;
  }); 

  //if no expenses found, push out message, otherwise display expenses
  let expensesContent = <p>No expenses found.</p>
  if (filteredExpenses.length > 0) {
    //grabs map array with expenses to render
    expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title ={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    }
  
  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter
        currYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/*filter year of expense items*/}
      {expensesContent}
     </Card>
    </div>
  );
};
//export to make it usuable outside this file
export default Expenses;
