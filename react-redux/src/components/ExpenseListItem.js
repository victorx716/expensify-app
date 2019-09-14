import React from 'react';
// description, amount, createdAt

const ExpenseListItem = ({ description, amount, createdAt}) => {
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
  </div>
}

export default ExpenseListItem;