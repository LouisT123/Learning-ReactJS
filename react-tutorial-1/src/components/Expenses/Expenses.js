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

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
    //console.log('Expenses.js');
    //console.log(selectedYear);
  }
  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter
        currYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
       //array of expense items
      {props.items.map((expense) => (
        <ExpenseItem 
          title ={expense.title1}
          amount={expense.amount1}
          date={expense.date1}
        />
      ))}
     </Card>
    </div>
  );
};
//export to make it usuable outside this file
export default Expenses;
