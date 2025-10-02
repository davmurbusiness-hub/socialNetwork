import React from 'react';
import classes from "./MyButton.module.css";


const MyButton = ({ children, onClick, ...props}) => {
  return (
    <button onClick={onClick} {...props} className={classes.myButton}>
      {children}
    </button>
  );
};
// const MyButton = ({children, click, ...props}) => {
//   return (
//     <button {...props} onClick={click}  className={classes.myButton}>
//       {children}
//     </button>
//   );
// };

export default MyButton;