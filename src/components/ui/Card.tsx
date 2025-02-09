const Card = ({ children, className }) => {
    return (
      <div className={`bg-white p-6 border-2 shadow-lg ${className}`}>
        {children}
      </div>
    );
  };
  
  export { Card };