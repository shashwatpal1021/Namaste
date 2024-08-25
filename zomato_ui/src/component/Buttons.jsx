import React from 'react'

export const  PrimaryButton = ({ children, style, onClick }) => {
  return (
    <button className={`hover:bg-white hover:text-black text-white font-bold py-1 px-2 rounded ${style}`} onClick={onClick}>
      {children}
    </button>
  );
};


export const DefaultButton = ({ children, style, onClick }) => {
  return (
    <button  className={`bg-black text-white font-bold py-2 px-4 rounded ${style}`} onClick={onClick}>
      {children}
    </button>
  );
};
