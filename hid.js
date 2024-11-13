const axios = require('axios');
const cheerio = require('cheerio');

async function scanWebsite(url) {
  try {
    // Fetch the HTML of the page
    const { data } = await axios.get(url);
    
    // Load the HTML into cheerio
    const $ = cheerio.load(data);
    
    // Find and log all links
    const links = [];
    $('a').each((_, element) => {
      const link = $(element).attr('href');
      if (link) {
        links.push(link);
      }
    });

    // Find and log all images
    const images = [];
    $('img').each((_, element) => {
      const src = $(element).attr('src');
      if (src) {
        images.push(src);
      }
    });

    console.log('Links found:', links);
    console.log('Images found:', images);
  } catch (error) {
    console.error('Error fetching the page:', error);
  }
}

// Example usage
scanWebsite('https://example.com');
