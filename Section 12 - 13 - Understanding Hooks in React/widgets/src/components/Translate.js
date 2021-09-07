import React, { useState } from 'react';

import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Russian',
        value: 'ru'
    },
    {
        label: 'Swedish',
        value: 'sv'
    },
    
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [inputText, setInputText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label="Select a Language"
                selected={language}
                onSelectedChange={setLanguage} 
                options={options} />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={inputText} language={language} />
        </div>
    );
};

export default Translate;