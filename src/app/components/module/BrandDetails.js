import { useState, useEffect } from 'react';

const BrandDetails = ({brandOutput, onLogoGenerate, isLoading}) => {
    // Local state for editable fields
    const [brandName, setBrandName] = useState('');
    const [brandDescription, setBrandDescription] = useState('');
    const [brandTheme, setBrandTheme] = useState('');
    const [colorPalette, setColorPalette] = useState({});

    // Update local state when brandOutput changes
    useEffect(() => {
        if (brandOutput) {
            setBrandName(brandOutput.name?.initial || brandOutput.name?.suggestion || '');
            setBrandDescription(brandOutput.description?.initial || brandOutput.description?.suggestion || '');
            setBrandTheme(brandOutput.theme?.initial || (brandOutput.theme?.suggestions ? brandOutput.theme.suggestions[0] : ''));
            setColorPalette(brandOutput.colorPalette || {});
        }
    }, [brandOutput]);

    if (!brandOutput) {
        return <div>No brand input provided</div>;
    }

    const handleLogoGenerate = () => {
        onLogoGenerate({
            brandName,
            brandDescription,
            brandTheme,
            brandColorPalette: colorPalette
        });
    };

    return (
        <div>
            <div>
                <h1 className="text-2xl mb-6">Design your Logo...</h1>
                <label>Brand Name</label>
                <textarea
                    value={brandName}
                    onChange={e => setBrandName(e.target.value)}
                    className="p-4 shadow appearance-none border border-gray-300 rounded-2xl w-full text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <label>Brand Description</label>
                <textarea
                    value={brandDescription}
                    onChange={e => setBrandDescription(e.target.value)}
                    className="p-4 shadow appearance-none border border-gray-300 rounded-2xl w-full text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <label>Brand Theme</label>
                <textarea
                    value={brandTheme}
                    onChange={e => setBrandTheme(e.target.value)}
                    className="p-4 shadow appearance-none border border-gray-300 rounded-2xl w-full text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <label className="block text-sm font-medium text-gray-700 mb-2">Brand Color Palette</label>
                {DisplayColorPalette(colorPalette)}
                <div className="mt-4 flex items-center space-x-2">
                    <button
                        onClick={handleLogoGenerate}
                        disabled={isLoading}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                    >
                        {isLoading ? 'Re-generating...' : 'Generate Logo'}
                    </button>
                    {isLoading && (
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
                    )}
                </div>
            </div>
        </div>
    );
};

function DisplayColorPalette(colorPalette) {
    let content;

    if (colorPalette.initial) {
        content = <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {
                colorPalette.initial.colors.map((colorObj, index2) => (
                    <div key={index2} className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-lg shadow-md border border-gray-200 mb-2" style={{ backgroundColor: colorObj.hashCode }}></div>
                        <span className="text-xs text-gray-600 font-mono">{colorObj.colorName}</span>
                    </div>
                ))
            }
        </div>
    } else {
        content = <div className="text-gray-500 text-sm mb-6">No color palette available</div>;

        if(colorPalette.suggestions && colorPalette.suggestions.length > 0) {
            content = <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                {
                    colorPalette.suggestions.map((colorSchema, index) => (
                        colorSchema.colors.map((colorObj, index2) => (
                            <div key={index2} className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-lg shadow-md border border-gray-200 mb-2" style={{ backgroundColor: colorObj.hashCode }}></div>
                                <span className="text-xs text-gray-600 font-mono">{colorObj.colorName}</span>
                            </div>
                        ))
                    ))
                }
            </div>;
        }
    }

    return <div>{content}</div>; 
}

export default BrandDetails;