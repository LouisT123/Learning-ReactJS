//import style
import './ExpenseDate.css'

function ExpenseDate(props) {
    //print in human readable format using logic
    const month = props.date1.toLocaleString('en-US', { month: 'long' });
    const day = props.date1.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date1.getFullYear();

    return (
        //adding style
        <div className='expense-date'>
            {/* print date object*/} 
            <div>
                <div className='expense-date_month'>{month}</div>
                <div className='expense-date_year'>{year}</div>
                <div className='expense-date_day'>{day}</div>
            </div>
        </div>
  );
}
//export to make it usuable outside this file
export default ExpenseDate;