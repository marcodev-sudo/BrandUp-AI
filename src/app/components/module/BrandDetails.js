const BrandDetails = ({brandOutput}) => {

    if (!brandOutput) {
        return <div>No brand input provided</div>;
    }

    const brandName = brandOutput.name.initial ? brandOutput.name.initial : brandOutput.name.suggestion;
    const brandDescription = brandOutput.description.initial ? brandOutput.description.initial : brandOutput.description.suggestion;
    const brandTheme = brandOutput.theme.initial ? brandOutput.theme.initial : brandOutput.theme.suggestions[0];

    return (
        <div>
            <div>
                <h1 className="text-2xl mb-6">Design your Logo...</h1>
                <label>Brand Name</label>
                <textarea
                    value={brandName}
                    className="p-4 shadow appearance-none border border-gray-300 rounded-2xl w-full text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <label>Brand Description</label>
                <textarea
                    value={brandDescription}
                    className="p-4 shadow appearance-none border border-gray-300 rounded-2xl w-full text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <label>Brand Theme</label>
                <textarea
                    value={brandTheme}
                    className="p-4 shadow appearance-none border border-gray-300 rounded-2xl w-full text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <label>Brand Color Palette</label>
            </div>

            {/*brandInput ? (
                <div>
                    <h1 className="text-2xl mb-6">Building Your Brand</h1>
                    <p>{brandInput.name.initial}, Suggestion: {brandInput.name.suggestion}</p>
                    <p>{brandInput.description.initial}, Suggestion: {brandInput.description.suggestion}</p>
                </div>
            ) : null*/}
        </div>
    );
};

export default BrandDetails;