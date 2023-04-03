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
      <ExpensesFilter
        currYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Card className="expenses">
        {/*grabs first title, amount, and date at index [x] for each item
        from App.js expenses array and sends them into ExpenseItem.*/}
        <ExpenseItem
          title1={props.items[0].title}
          amount1={props.items[0].amount}
          date1={props.items[0].date}
        />

        <ExpenseItem
          title1={props.items[1].title}
          amount1={props.items[1].amount}
          date1={props.items[1].date}
        />

        <ExpenseItem
          title1={props.items[2].title}
          amount1={props.items[2].amount}
          date1={props.items[2].date}
        />

        <ExpenseItem
          title1={props.items[3].title}
          amount1={props.items[3].amount}
          date1={props.items[3].date}
        />
      </Card>
    </div>
  );
}
//export to make it usuable outside this file
export default Expenses;
