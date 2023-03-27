import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>April 2nd 2023</div>
      <div className="expense-item_description">
        <h2>Car Insurance</h2>
        <div className="expense-item_price">$500.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
