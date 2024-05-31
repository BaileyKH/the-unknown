// Loading.js
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className="flex justify-start items-center">
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        color="grey"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};


