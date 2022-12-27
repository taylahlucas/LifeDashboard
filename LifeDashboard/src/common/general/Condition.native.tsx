import React from 'react';

interface ConditionProps {
  condition: boolean;
  children: any;
};

const Condition = ({ condition = false, children }: ConditionProps) => {
  return (
    <>
      {!!condition
        ? <React.Fragment>{children}</React.Fragment>
        : null
      }
    </>
  );
};

export default Condition;