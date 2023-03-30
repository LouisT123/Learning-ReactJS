import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {

/*Takes data and displays + styles
assembles into an ExpenseItem*/
  return (
     /* className for css styling*/
    <div className="expense-item">

       {/*use expense date component, self closing*/}
       <ExpenseDate date1={props.date1}/>

        {/* style and print title and amount */}
      <div className="expense-item_description">
        <h2>{props.title1}</h2>
        <div className="expense-item_price">
          ${props.amount1}</div>
      </div>
      
    </div>
  );
}

export default ExpenseItem;
