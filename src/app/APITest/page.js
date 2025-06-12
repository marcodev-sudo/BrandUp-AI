'use client';
import { useState } from 'react';

export default function MyComponent() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await fetch('/api/getBrandStepOne', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            if (res.status == 200) {
                const data = await res.json();
                setResponse(data.text);
            } else {
                console.error('Failed to fetch data');
                setResponse('Error fetching data');
            }
        } catch (error) {
            console.error('Error during fetch:', error);
            setResponse('Error fetching data');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>
            {response && <p>Response: {response}</p>}
        </div>
    );
}