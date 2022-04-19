import React from 'react';

const Unauthorized = ({message}) => {

  return (
    <div className="container mx-auto">
      <div className="text-center mt-10">
        <div className="text-7xl">
          401 Unauthorized
        </div>
        <div className="text-7xl">
          {message}
        </div>
      </div>
    </div>
  );
}

export default Unauthorized;
