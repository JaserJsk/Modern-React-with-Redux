import React, { useState } from 'react';

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const renderdItems = items.map((item, index) => {
        const onTitleClick = (index) => {
            setActiveIndex(index);
        };

        // Adding the css class 'active' to the current selected index
        const active = index === activeIndex ? 'active' : '';

        return (
            // React.Fragment is a JSX container element
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderdItems}
        </div>
    );
};

export default Accordion;