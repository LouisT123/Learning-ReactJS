//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
//import form user input
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  
  //actual item object descriptions (const for now)
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    { 
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2022, 2, 12) 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
  function addExpenseHandler(expense) {
    console.log('In app.js');
    console.log(expense);
  }
  //calls components to build and render
  return (
    <div>
      {/*User input for new expense */}
      <NewExpense onAddExpense={addExpenseHandler}/>

      {/*Display expenses*/}
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
