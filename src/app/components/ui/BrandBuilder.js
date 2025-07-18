'use client';
import { useState } from 'react';
import BrandInput from "@/app/components/module/BrandInput";
import BrandDetails from "@/app/components/module/BrandDetails";

const BrandBuilder = () => {
    const [brandInput, setBrandInput] = useState("");
    const [brandOutput, setBrandOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setBrandInput(e.target.value);
    };

    const handleGenerate = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/getBrandCompanyNameAndDescription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userBrandInput: brandInput }),
            });
            if (res.ok) {
                const brandOutput = await res.json();
                setBrandOutput(brandOutput);
            } else {
                setBrandOutput(null);
            }
        } catch (error) {
            setBrandOutput(null);
        } finally {
            setIsLoading(false);
        }
    };

    // Accept brand details as arguments and send them to the API
    const handleLogoGeneration = async ({ brandName, brandDescription, brandTheme, brandColorPalette }) => {
        setIsLoading(true);
        try {
            const payload = {
                brandName: brandName,
                brandDescription: brandDescription,
                brandTheme: brandTheme
                //brandColorPalette: brandColorPalette
            };
            const res = await fetch('/api/generateLogos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userBrandDetails: payload }),
            });
            // handle response as needed
        } catch (error) {
            setBrandOutput(null);
        } finally {
            setIsLoading(false);
        }
    };

    // Accept details from BrandDetails and pass them to handleLogoGeneration
    const handleLogoGenerateFromDetails = ({ brandName, brandDescription, brandTheme, brandColorPalette }) => {
        handleLogoGeneration({ brandName, brandDescription, brandTheme, brandColorPalette });
    };

    return (
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <BrandInput
                value={brandInput}
                onChange={handleInputChange}
                onGenerate={handleGenerate}
                isLoading={isLoading}
            />
            <BrandDetails
                brandOutput={brandOutput}
                onLogoGenerate={handleLogoGenerateFromDetails}
                isLoading={isLoading}
            />
        </div>
    );
};

export default BrandBuilder;