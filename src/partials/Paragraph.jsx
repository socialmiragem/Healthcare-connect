const Paragraph = ({ 
  text = '', 
  className = '', 
  isSpan = false, 
  spanText = '', 
  spanClass = '' 
}) => {
  return (
    <p className={className}>
      {text}
      {isSpan && <span className={spanClass}> {spanText}</span>}
    </p>
  );
};

export default Paragraph;
