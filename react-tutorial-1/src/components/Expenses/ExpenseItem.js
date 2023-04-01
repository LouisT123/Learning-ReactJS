//grab specified date format component
import ExpenseDate from "./ExpenseDate";
//styling
import "./ExpenseItem.css";
//use custom wrapper component for drop shadow
import Card from "../UI/Card";
//use state
import { useState } from "react";

function ExpenseItem(props) {

  //react hook called inside component function
  const [currentTitle, setTitle] = useState(props.title1);

  //click handler
  function clickHandler() {
    setTitle('Updated!');
    console.log('updated');
  };

/*Takes data and displays + styles
assembles into an ExpenseItem*/
  return (
     /* className for css styling*/
    <Card className="expense-item">

       {/*use expense date component, self closing*/}
       <ExpenseDate date1={props.date1}/>

        {/* style and print title and amount */}
      <div className="expense-item_description">
        <h2>{currentTitle}</h2>
        <div className="expense-item_price">
          ${props.amount1}</div>
      </div>
      
      {/* adding button click, points to clickHandler event func*/}
      <button onClick={clickHandler}>Change Title</button>

    </Card>
  );
}

export default ExpenseItem;
