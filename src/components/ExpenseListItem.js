import React from 'react';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
      <div> 
      
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        {/* <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button> */}

    </div>
);

export default ExpenseListItem;
