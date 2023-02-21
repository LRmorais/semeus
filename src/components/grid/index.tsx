import React from 'react';
import './index.css';
// @ts-ignore
export default function SeuComponente({children}) {
  return (
    <div className="container">
      <div className="sua-div">{children}</div>
    </div>
  );
}