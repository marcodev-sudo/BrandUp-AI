'use client';
import { useState } from 'react';
import BrandInput from "@/app/components/module/BrandInput";
import BrandDetails from "@/app/components/module/BrandDetails";

const BrandBuilder = () => {
    const [brandOutput, setBrandOutput] = useState('');

    const handleInputComplete = (userBrand) => {
        setBrandOutput(userBrand);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <BrandInput onInputComplete={handleInputComplete} />
            <BrandDetails brandOutput={brandOutput}/>
        </div>
    );
};

export default BrandBuilder;