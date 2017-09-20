import React from 'react';

const SomeComponent = (props) => {
  const { data } = props

  if (!data) {
    return <div>Loading....</div>
  }

  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default SomeComponent;
