'use client';
import { useState } from "react";

const BrandInput = ({onInputComplete}) => {
    const [userBrandInput, setUserBrandInput] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [isExploding, setIsExploding] = useState(false);
    const [isInputComplete, setIsInputComplete] = useState(false);

    const handleStartBrandingClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsExploding(true);

        try {
            const res = await fetch('/api/getBrandCompanyNameAndDescription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userBrandInput }),
            });

            if (res) {
                const brandOutput = await res.json();
                // Determine whether the user input is a brand name or a brand description
                onInputComplete(brandOutput);
                setIsInputComplete(true);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        !isInputComplete ? (
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div id="brand-input" className={`w-full max-w-md transition-all duration-500 ${isExploding ? 'explode' : ''}`}>
                <h1 className="text-2xl mb-6">
                    Build Your Brand
                </h1>
                <div className="h-12">
                    <div className="flex flex-col space-y-2">
                        <textarea
                            placeholder="Enter your brand name or try to describe it - what it does, its values, the target audience, etc."
                            value={userBrandInput}
                            onChange={e => setUserBrandInput(e.target.value)}
                            className="p-4 shadow appearance-none border border-gray-300 rounded-2xl w-full text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <button
                            disabled={isLoading}
                            onClick={handleStartBrandingClick}
                            className="self-end bg-black hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline">
                            {isLoading ? 'Loading...' : 'Get Started'}
                        </button>
                    </div>
                </div>
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
            ) : (null)}
        </div>
        ) : (null)
    );
}

export default BrandInput;