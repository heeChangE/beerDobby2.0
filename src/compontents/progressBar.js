import React from "react";

/** ProgressBar Component */
const ProgressBar = (props) => {
    
  const { completed } = props;
    
    const containerStyle = {
      height: '1rem',
      width: '35.2rem',
      backgroundColor: '#e0e0de',
      borderRadius: '3px',
      marginBottom: '5rem'
    }
    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        background: ' #ffc72c',
        borderRadius: '3px',
        transition: '1s ease 0.005s'
      }

  return (
    <div style={containerStyle}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
