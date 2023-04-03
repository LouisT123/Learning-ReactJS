import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
    
    //Multiple states
    //state to store entered title value after form is submitted 
    const [enteredTitle, setEnteredTitle] = useState('');

    //state to store entered amount value after form is submitted 
    const [enteredAmount, setEnteredAmount] = useState('');

    //state to store entered date value after form is submitted 
    const [enteredDate, setEnteredDate] = useState('');

    //can collapse
/*
    //Using only one state by putting all inputs into one object 
    const [userInput, setUserInput] = useState ({
        setEnteredTitle: '',
        setEnteredAmount: '',
        setEnteredDate: ''
    });

    //using only 1 state, update title and autofill rest with 
    //the object using spread operator
    function titleChangeHandler(event) {
        //instead do this
        setUserInput((prevState) => {
            return {...prevState, setEnteredTitle: event.target.value}
        })  
        /*
        setUserInput({
            ...userInput,
            setEnteredTitle: event.target.value,
        });
        
    };

    //using only 1 state, update amount and autofill rest with 
    //the object using spread operator
    function amountChangeHandler(event) {
        //instead do this
        setUserInput((prevState) => {
            return {...prevState, setEnteredAmount: event.target.value}
        })
        /*
        setUserInput({
            ...userInput,
            setEnteredAmount: event.target.value,
        });
        */
//    };
    /*
    //using only 1 state, update date and autofill rest with 
    //the object using spread operator
    function dateChangeHandler(event) {
        //instead do this
        setUserInput((prevState) => {
            return {...prevState, setEnteredDate: event.target.value}
        })
        /*
        setUserInput({
            ...userInput,
            setEnteredDate: event.target.value,
        });
        */
 //   }; 
    
    
    //multiple states
    //save current title value with every keystroke
    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    };

    //save current amount value with every keystroke
    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    };

    //save current date value with every keystroke
    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    };

    //submit form object
    function submitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        //grab expense data
        props.onSaveExpenseData();
        //reset text fields
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">
                {/*input Title*/}
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                 {/*input Amount*/}
                <div className="new-expense_control">
                    <label>Amount</label>
                    <input type='text' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>

                 {/*input Date*/}
                <div className="new-expense_control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2000-01-01" max="2100-12-31" onChange={dateChangeHandler}/>
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