import { NextResponse } from 'next/server';
import openai from '@/utils/openai';
import { zodTextFormat } from "openai/helpers/zod";
import { BrandSchema } from '@/schema/BrandSchema';

export async function POST(req) {
    try {
        const { userBrandInput } = await req.json();

        if (!userBrandInput) {
            return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
        }

        let brandPrompt = "Determine whether the user input is a brand name or a brand description. ";
        brandPrompt += "Try to create a brand description for it if none is provided. Or give a suggestion for a description instead."
        brandPrompt += "Try to create a brand name for it if none is provided. Or give a suggestion for a name instead."
        brandPrompt += "Try to create a color palette for it if none is provided. Or give a list of 5 suggestions for a color palette that would best suit the brand instead."
        brandPrompt += "Try to create a theme for it if none is provided. Or give a list of 3 suggestions for a theme that would best suit the brand instead."
        brandPrompt += "Give a suggestion to the user on what more to include in the brand description to make the generation of a logo tailor for the company more specifically."

        const completion = await openai.responses.parse({
            model: "gpt-4.1",
            input: [
                { role: "system", content: brandPrompt },
                { role: "user", content: userBrandInput }
            ],
            text: {
                format: zodTextFormat(BrandSchema, "brand")
            }
        });

        return NextResponse.json(completion.output_parsed);
    } catch (error) {
        console.error("Error during OpenAI request:", error);
        return NextResponse.json({ error: "Failed to fetch data from OpenAI" }, { status: 500 });
    }
}