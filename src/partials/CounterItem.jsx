import React, { useState, useEffect } from "react";

const CounterItem = ({ title, count, isCounter, suffix }) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!isCounter) return;

    let start = 0;
    const end = count;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setDisplayCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [count, isCounter]);

  return (
    <div className="counter-item text-center">
      <p className="mb-0 fs-50 lh-1 fw-bold text-primary">{isCounter ? displayCount : count}<span>{suffix}</span></p>
      <h3 className="fs-28 text-secondary fw-semibold">{title}</h3>
    </div>
  );
};

export default CounterItem;
