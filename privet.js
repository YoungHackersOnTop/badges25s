const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebsite(url) {
  try {
    // Fetch the HTML of the page
    const { data } = await axios.get(url);
    
    // Load the HTML into cheerio
    const $ = cheerio.load(data);
    
    // Extract the information you want
    const titles = [];
    $('h2').each((index, element) => {
      titles.push($(element).text());
    });

    console.log('Page titles:', titles);
  } catch (error) {
    console.error('Error fetching the page:', error);
  }
}

// Example usage
scrapeWebsite('https://example.com');
