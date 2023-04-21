//import style
import "./Expenses.css";

//use custom wrapper component for drop shadow
import Card from "../UI/Card";
//import expense filter
import ExpensesFilter from "./ExpensesFilter";
//state
import { useState } from "react";
//expenses list
import ExpensesList from "./ExpensesList";

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

  
  
  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter
        currYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/*filter year of expense items*/}
      {/*{expensesContent}*/}
      {/*render array of expenses*/}
      <ExpensesList items={filteredExpenses} />
     </Card>
    </div>
  );
};
//export to make it usuable outside this file
export default Expenses;
