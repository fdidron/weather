import React from 'react';

const Keyword = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Enter a city</label>
      <input onChange={props.onChange} type="text" name="city" />
      <button htmlType="submit">Submit</button>
    </form>
  );
};

export default Keyword;
