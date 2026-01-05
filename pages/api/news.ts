import type { NextApiRequest, NextApiResponse } from 'next';

// Mock business news data - In production, this would call a real news API
const mockNews = [
  {
    title: 'Indian IT sector shows strong growth in Q4 2025',
    description: 'Major Indian IT companies report robust quarterly earnings driven by digital transformation projects and AI adoption across global markets.',
    url: 'https://example.com/news/1',
    publishedAt: new Date().toISOString(),
    source: 'Business Standard'
  },
  {
    title: 'Startup funding in India reaches $12 billion in 2025',
    description: 'Indian startup ecosystem demonstrates resilience with significant investments in fintech, edtech, and healthtech sectors despite global uncertainties.',
    url: 'https://example.com/news/2',
    publishedAt: new Date(Date.now() - 3600000).toISOString(),
    source: 'Economic Times'
  },
  {
    title: 'Manufacturing sector expansion accelerates with PLI schemes',
    description: 'Production Linked Incentive schemes drive major investments in electronics, automobiles, and pharmaceutical manufacturing across India.',
    url: 'https://example.com/news/3',
    publishedAt: new Date(Date.now() - 7200000).toISOString(),
    source: 'Mint'
  },
  {
    title: 'RBI maintains stable interest rates amid inflation concerns',
    description: 'Reserve Bank of India keeps repo rate unchanged while monitoring global economic conditions and domestic inflation trends.',
    url: 'https://example.com/news/4',
    publishedAt: new Date(Date.now() - 10800000).toISOString(),
    source: 'Reuters India'
  },
  {
    title: 'E-commerce sales surge during festive season',
    description: 'Online retailers report record-breaking sales as consumers embrace digital shopping platforms during major festive periods.',
    url: 'https://example.com/news/5',
    publishedAt: new Date(Date.now() - 14400000).toISOString(),
    source: 'Business Today'
  },
  {
    title: 'Green energy investments double in renewable sector',
    description: 'Solar and wind energy projects attract massive investments as India accelerates its transition to sustainable energy sources.',
    url: 'https://example.com/news/6',
    publishedAt: new Date(Date.now() - 18000000).toISOString(),
    source: 'Financial Express'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { page = '1', search = '' } = req.query;
    const pageNum = parseInt(page as string);
    const pageSize = 6;

    let filteredNews = mockNews;
    
    // Filter by search term if provided
    if (search) {
      const searchTerm = (search as string).toLowerCase();
      filteredNews = mockNews.filter(article =>
        article.title.toLowerCase().includes(searchTerm) ||
        article.description.toLowerCase().includes(searchTerm)
      );
    }

    // Paginate results
    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedNews = filteredNews.slice(startIndex, endIndex);

    res.status(200).json({
      articles: paginatedNews,
      total: filteredNews.length,
      page: pageNum,
      totalPages: Math.ceil(filteredNews.length / pageSize)
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
