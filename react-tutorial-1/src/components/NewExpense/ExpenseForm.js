import "./ExpenseForm.css";

function ExpenseForm() {

    //get current vallue with every keystroke
    function titleChangeHandler(event) {
        console.log(event.target.value);
    };
    return (
        <form>
            <div className="new-expense_controls">
                {/*input Title*/}
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>

                 {/*input Amount*/}
                <div className="new-expense_control">
                    <label>Amount</label>
                    <input type='text' min="0.01" step="0.01"/>
                </div>

                 {/*input Date*/}
                <div className="new-expense_control">
                    <label>Date</label>
                    <input type='date' min="2000-01-01" max="2100-12-31"/>
                </div>
            </div>

                {/*input submit button */}
            <div className="new-expense_actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );

};

export default ExpenseForm;