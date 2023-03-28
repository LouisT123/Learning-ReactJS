import ExpenseItem from "./components/ExpenseItem";

function App() {
  //objects
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
  return (
    <div>
      <h2>Let's get started!</h2>
      {/*grabs first title, amount, and date at index [0] etc.*/}
      <ExpenseItem
        title1={expenses[0].title}
        amount1={expenses[0].amount}
        date1={expenses[0].date}
      />

      <ExpenseItem
        title1={expenses[1].title} 
        amount1={expenses[1].amount}
        date1= {expenses[1].date}
      />

      <ExpenseItem
        title1={expenses[2].title}
        amount1={expenses[2].amount}
        date1= {expenses[2].date}
      />

       <ExpenseItem
        title1={expenses[3].title}
        amount1={expenses[3].amount}
        date1={expenses[3].date}
      />
    </div>
  );
}

export default App;
