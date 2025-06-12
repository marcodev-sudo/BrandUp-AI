'use client';
import { useState } from "react";

const BrandInput = () => {
    const [activeTab, setActiveTab] = useState("name");
    const [brandName, setBrandName] = useState("");
    const [brandDesc, setBrandDesc] = useState("");

    return (
        <div className="w-full max-w-md">
            <div className="flex border-b mb-4">
                <button
                    className={`px-4 py-2 focus:outline-none ${activeTab === "name" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
                    onClick={() => setActiveTab("name")}
                >
                    Brand Name
                </button>
                <button
                    className={`px-4 py-2 focus:outline-none ${activeTab === "desc" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
                    onClick={() => setActiveTab("desc")}
                >
                    Describe My Brand Instead
                </button>
            </div>
            <div className="h-12">
            {activeTab === "name" ? (
                <div className="flex flex-col space-y-2">
                    <input
                        type="text"
                        placeholder="Enter your brand / company name:"
                        value={brandName}
                        onChange={e => setBrandName(e.target.value)}
                        className="p-4 shadow appearance-none border border-gray-300 rounded-2xl w-full text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button className="self-end bg-black hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline">
                        Get Started
                    </button>
                </div>
            ) : (
                <div className="flex flex-col space-y-2">
                    <textarea
                        placeholder="Describe your brand / company, what it does, its values, etc."
                        value={brandDesc}
                        onChange={e => setBrandDesc(e.target.value)}
                        className="p-4 shadow appearance-none border border-gray-300 rounded-2xl w-full text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button className="self-end bg-black hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline">
                        Get Started
                    </button>
                </div>
            )}
            </div>
        </div>
    );
}

export default BrandInput;