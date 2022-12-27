import React from 'react';

interface ConditionProps {
  condition: boolean;
  children: any;
  conditional?: any;
};

// TODO: Fix this to work with If / Else
const Condition = ({ condition = false, children, conditional }: ConditionProps) => {
  // (!!conditional ?  <React.Fragment>{conditional}</React.Fragment> : <></>)
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