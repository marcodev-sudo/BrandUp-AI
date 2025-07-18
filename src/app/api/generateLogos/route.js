import { NextResponse } from 'next/server';
import openai from '@/utils/openai';
import { zodTextFormat } from "openai/helpers/zod";
import { BrandSchema } from '@/schema/BrandSchema';

export async function POST(req) {
    try {
        const { userBrandDetails } = await req.json();

        if (!userBrandDetails) {
            return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
        }

        let brandPrompt = "Generate a logo for a brand based on the following details:";
        brandPrompt += "Brand Name: " + userBrandDetails.brandName;
        brandPrompt += "Brand Description: " + userBrandDetails.brandDescription;
        brandPrompt += "Brand Theme: " + userBrandDetails.brandTheme;
        //brandPrompt += "Brand Color Palette: " + userBrandDetails.brandColorPalette;


        const response = await openai.responses.create({
            model: "gpt-4.1",
            input: brandPrompt,
            tools: [{type: "image_generation"}],
        });

        const imageData = response.output
        .filter((output) => output.type === "image_generation_call")
        .map((output) => output.result);

        return NextResponse.json({imageData});
    } catch (error) {
        console.error("Error during OpenAI request:", error);
        return NextResponse.json({ error: "Failed to fetch data from OpenAI" }, { status: 500 });
    }
}