import "./ExpenseItem.css";

function ExpenseItem(props) {

  return (
     /* className for css styling*/
    <div className="expense-item">
        {/* print date object*/}
      <div>{props.date1.toISOString()}</div>
        {/* print title and amount */}
      <div className="expense-item_description">
        <h2>{props.title1}</h2>
        <div className="expense-item_price">
          ${props.amount1}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
