import React, { useState } from 'react';
import OpenAI from 'openai';

function DataFetch() {
    const [response, setResponse] = useState('');

    const openai = new OpenAI({
        apiKey: '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', 
        dangerouslyAllowBrowser: true
    });

    const fetchData = async (prompt) => {
        try {
            const completion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: {prompt} }],
                model: 'gpt-3.5-turbo',
            });
            setResponse(completion.choices[0].text);
        } catch (error) {
            console.error('Error fetching data:', error);
            setResponse('An error occurred');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const prompt = e.target[0].value;
        fetchData(prompt);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea />
                <button type="submit">Get Response</button>
            </form>
            <div>
                <h2>Response:</h2>
                <p>{response}</p>
            </div>
        </div>
    );
}

export default DataFetch;
