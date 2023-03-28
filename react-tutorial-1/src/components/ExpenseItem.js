import "./ExpenseItem.css";

function ExpenseItem(props) {

  const month = props.date1.toLocaleString('en-US', { month: 'long'});
  const day = props.date1.toLocaleString('en-US', { day: '2-digit'});
  const year = props.date1.getFullYear();
  return (
     /* className for css styling*/
    <div className="expense-item">
        {/* print date object*/}
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
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
