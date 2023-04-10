import './Card.css';

function Card(props) {
    //get the other classNames too
    const classes = 'card ' + props.className;
    //children prop will make sure body of the <Card></Card> 
    //will have style applied
    return <div className={classes}>{props.children}</div>
};

export default Card;