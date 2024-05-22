import axios from "axios";
import * as cheerio from "cheerio";
import {extractPrice, extractDescription, extractCurrency} from "../utils";
export async function scrapeAmazonProduct(url: string) {
    if(!url) return;

    // BrightData proxy configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);

    const port = 22225;

    const session_id = (Math.random() * 1000000 | 0);
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }

    try{
        // fetch the product page
        const response = await axios.get(url, options);
        const $ = cheerio.load(response.data);

        // extract the product title
        const title = $('#productTitle').text().trim();
        const currentPrice = extractPrice(
            $('.priceToPay span.a-price-whole'),
            $('a.size.base.a-color-price'),
            $('.a-button-selected .a-color-base'),
        );

        const originalPrice = extractPrice(
            $('#priceblock_ourprice'),
            $('a.price.a-text-price span.a-offscreen'),
            $('#listPrice'),
            $('#priceblock_dealprice'),
            $('.a-size-base.a-color-price')
        );

        const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';

        const images =
            $('#imgBlkFront').attr('data-a-dynamic-image') ||
            $('#landingImage').attr('data-a-dynamic-image') ||
            '{}'

        const imageUrls = Object.keys(JSON.parse(images));

        const currency = extractCurrency($('.a-price-symbol'));

        const discountRate = $(`.savingsPercentage`).text().replace(/[-%]/g, '');

        //const starRatingXPath = '//*[@id="acrPopover"]/span[1]/a/span';

        //const stars = extractStars(starRatingXPath);

        const description = extractDescription($);

        //const reviewcount = extractReviewCount($);

        // construct data object with scraped content

        const data = {
            url,
            currency: currency || '$',
            image : imageUrls[0],
            title,
            currentPrice: Number(currentPrice) || Number(originalPrice),
            originalPrice: Number(originalPrice) || Number(currentPrice),
            priceHistory: [],
            discountRate: Number(discountRate),
            category: 'category',
            reviewsCount: 0,
            //stars: Number(stars),
            isOutOfStock: outOfStock,
            description,
            lowestPrice: Number(currentPrice) || Number(originalPrice),
            highestPrice: Number(originalPrice) || Number(currentPrice),
            averagePrice: Number(currentPrice) || Number(originalPrice),
        }
        //console.log(data);
        return data;

    } catch(error:any){
        console.log(error);
    }
}