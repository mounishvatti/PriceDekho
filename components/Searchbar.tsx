"use client"

import React, {FormEvent} from "react"
import {useState} from "react";
import {scrapeAndStoreProduct} from "@/lib/actions";

const isValidAmazonProductURL = (url: string) => {
    try{
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;
        if(
            hostname.includes('amazon.com') ||
            hostname.includes('amazon.') ||
            hostname.includes('amazon')
        ){
            return true;
        }
    } catch (error){
        return false
    }
    return false;
}

export const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidLink = isValidAmazonProductURL(searchPrompt);

        if (!isValidLink) {
            return alert('Please enter a valid Amazon product link')
        }

        try {
            setIsLoading(true);
            // scrape the product page
            const product = await scrapeAndStoreProduct(searchPrompt);
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }
        return (
            <form 
                className='flex flex-wrap gap-4 mt-12'
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={searchPrompt}
                    onChange={(e) => setSearchPrompt(e.target.value)}
                    placeholder="Enter product link"
                    className="searchbar-input"
                />

                <button type="submit" className="searchbar-btn" disabled={searchPrompt === ''}>
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </form>
        )
    }