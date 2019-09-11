import React from 'react';
import {Link} from 'react-router-dom';

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      edit expense with id of {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;