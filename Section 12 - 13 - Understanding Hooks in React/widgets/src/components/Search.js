import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('React Programming');
    const [debaouncedTerm, setDebaouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    // This useEffect will run anytime term changes
    useEffect(() => {
        const timerId = setTimeout(() => {
            // we will set debaouncedTerm equal to that of term
            setDebaouncedTerm(term);
        }, 1000);
        // Set a 1000ms timer before running

        // Return a cleanup function before re-render
        return () => {
            clearTimeout(timerId);
        }
    }, [term])

    // This useEffect will run at initial render of the component on the screen
    // and whenever the value of debaouncedTerm has changed
    useEffect(() => {
        const searchWiki = async () => {
            const { data } = await Axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debaouncedTerm
                }
            });

            setResults(data.query.search);
        };

        searchWiki();

        /**
        * Second argument of useEffect
        * - [] -> Run at initial render only
        * - Nothing -> Run at initial render -> Run after every re-render
        * - [Data] -> Run at initial render -> Run after every re-render if -
        * data has changed since last render
        **/
    }, [debaouncedTerm])



    

    //console.log(results);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`} >
                        Read More
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/* Remove HTML tags from text. Only use if source is trusted! */}
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input"
                        type="text"
                        value={term}
                        onChange={e => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;