import { useRouter } from 'next/router';
import React from 'react';

const RuleComponent = ({pathname}) => {
  const router = useRouter();
  return (
    <>
      {router.pathname === pathname ? (
        <hr
          className="mx-auto"
          style={{
            height: '1px',
            width: '50px',
            backgroundColor: '#fff',
            border: 'none'
          }}
        />
      ):""}
    </>
  );
};

export default RuleComponent;
