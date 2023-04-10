//grab specified date format component
import ExpenseDate from "./ExpenseDate";
//styling
import "./ExpenseItem.css";
//use custom wrapper component for drop shadow
import Card from "../UI/Card";

function ExpenseItem(props) {

/*Takes data and displays + styles
assembles into an ExpenseItem*/
  return (
     /* className for css styling*/
    <Card className="expense-item">

       {/*use expense date component, self closing*/}
       <ExpenseDate date={props.date}/>

        {/* style and print title and amount */}
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
      
    </Card>
  );
}

export default ExpenseItem;
