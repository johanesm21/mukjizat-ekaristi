import React, { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx'; 
import styles from './styles.module.css'; 

interface TimeLineProps {
  className?: string; // Optional custom classes for the button
  style?: CSSProperties; // Optional custom styles for the button
  children: ReactNode; // Children elements
  variant?: string; // Optional variant for line color
}

const TimeLine: React.FC<TimeLineProps> = ({
  className, // Custom classes for the button
  style, // Custom styles for the button
  children, // Children elements
  variant, // for line color
}) => { 
  const bgLineColor = variant ? styles[`timeline--${variant}`] : ''; // css integrate infima color
  
  return (
    <div className={clsx(styles.timeline,
     bgLineColor,
     className
     )} 
     style={style}>

      {children}
      
    </div>
  );
};

export default TimeLine;
