import React from 'react'

const Accordian = ({ items }) => {
    return (
        <>
            <div className="accordion" id="accordionExample">
                {items.map((item, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`collapse${index}`}
                            >
                                {item.title}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">{item.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Accordian