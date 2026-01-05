// Curriculum data for modules 2-10
// This extends the base curriculum with Marketing, Finance, Operations, Strategy, Communication, and mixed topics

import { Module } from './curriculum';

export const additionalModules: Module[] = [
  {
    id: 'module-2',
    moduleNumber: 2,
    title: 'Marketing Management',
    description: 'Master marketing strategy, consumer behavior, branding, and digital marketing fundamentals.',
    category: 'Marketing',
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: `lesson-2-${i + 1}`,
      moduleId: 'module-2',
      lessonNumber: i + 1,
      title: [
        'Introduction to Marketing',
        'Consumer Behavior Analysis',
        'Market Segmentation and Targeting',
        'Branding and Positioning',
        'Product Development and Management',
        'Pricing Strategies',
        'Distribution Channels',
        'Integrated Marketing Communications',
        'Digital Marketing Fundamentals',
        'Marketing Analytics and ROI'
      ][i],
      content: [
        'Marketing is the process of creating, communicating, and delivering value to customers. It encompasses understanding customer needs, developing products, setting prices, and promoting offerings effectively.',
        'The marketing mix consists of Product, Price, Place, and Promotion (4 Ps). Modern frameworks extend this to include People, Process, and Physical Evidence for services marketing.',
        'Customer-centric marketing focuses on building long-term relationships rather than transactional exchanges. Organizations must understand customer lifetime value and create experiences that drive loyalty.',
        'Market research provides insights into customer preferences, competitive dynamics, and market trends. Both qualitative and quantitative research methods inform strategic marketing decisions.',
        'Successful marketing requires integration across all touchpoints and channels. Consistent messaging, brand experience, and customer service create strong market positions and sustainable competitive advantages.'
      ],
      quiz: Array.from({ length: 5 }, (_, j) => ({
        id: `q2-${i + 1}-${j + 1}`,
        question: `Sample marketing question ${j + 1} for lesson ${i + 1}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: j % 4
      })),
      estimatedTime: 15
    }))
  },
  {
    id: 'module-3',
    moduleNumber: 3,
    title: 'Financial Management',
    description: 'Learn financial analysis, investment decisions, capital structure, and corporate finance.',
    category: 'Finance',
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: `lesson-3-${i + 1}`,
      moduleId: 'module-3',
      lessonNumber: i + 1,
      title: [
        'Introduction to Corporate Finance',
        'Financial Statement Analysis',
        'Time Value of Money',
        'Capital Budgeting Decisions',
        'Cost of Capital',
        'Capital Structure Theory',
        'Dividend Policy',
        'Working Capital Management',
        'Risk and Return Analysis',
        'Financial Planning and Forecasting'
      ][i],
      content: [
        'Corporate finance deals with how businesses raise capital, allocate resources, and create value for shareholders. Key decisions involve investment, financing, and dividend policies.',
        'Financial managers must balance profitability, liquidity, and solvency. Understanding financial statements, ratios, and cash flow analysis is essential for informed decision-making.',
        'The time value of money principle states that money available today is worth more than the same amount in the future. Present value and future value calculations underpin investment decisions.',
        'Risk and return are positively correlated in financial markets. Investors require higher returns for bearing higher risks. Portfolio diversification helps manage unsystematic risk.',
        'Effective financial management creates sustainable competitive advantage. Companies that optimize capital allocation, manage risks, and maintain financial flexibility outperform their peers over time.'
      ],
      quiz: Array.from({ length: 5 }, (_, j) => ({
        id: `q3-${i + 1}-${j + 1}`,
        question: `Sample finance question ${j + 1} for lesson ${i + 1}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: j % 4
      })),
      estimatedTime: 15
    }))
  },
  {
    id: 'module-4',
    moduleNumber: 4,
    title: 'Operations and Supply Chain Management',
    description: 'Master operations strategy, process optimization, quality management, and supply chain logistics.',
    category: 'Operations/SCM',
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: `lesson-4-${i + 1}`,
      moduleId: 'module-4',
      lessonNumber: i + 1,
      title: [
        'Introduction to Operations Management',
        'Process Design and Analysis',
        'Capacity Planning',
        'Quality Management Systems',
        'Lean Operations',
        'Supply Chain Strategy',
        'Inventory Management',
        'Logistics and Distribution',
        'Supplier Relationship Management',
        'Operations Analytics'
      ][i],
      content: [
        'Operations management involves designing, managing, and improving systems that create and deliver products and services. It focuses on efficiency, quality, and customer satisfaction.',
        'Process optimization seeks to eliminate waste, reduce variation, and improve flow. Tools like value stream mapping, Six Sigma, and lean principles drive continuous improvement.',
        'Supply chain management coordinates the flow of materials, information, and finances from suppliers to customers. Integration and collaboration across the supply chain create competitive advantages.',
        'Quality management ensures products and services meet customer expectations consistently. Total Quality Management (TQM) and ISO standards provide frameworks for quality excellence.',
        'Effective operations and supply chain management reduce costs, improve responsiveness, and enhance customer value. Companies that excel in operations achieve superior financial performance and market position.'
      ],
      quiz: Array.from({ length: 5 }, (_, j) => ({
        id: `q4-${i + 1}-${j + 1}`,
        question: `Sample operations question ${j + 1} for lesson ${i + 1}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: j % 4
      })),
      estimatedTime: 15
    }))
  },
  {
    id: 'module-5',
    moduleNumber: 5,
    title: 'Strategic Management',
    description: 'Develop skills in strategic analysis, competitive positioning, and long-term business planning.',
    category: 'Strategy',
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: `lesson-5-${i + 1}`,
      moduleId: 'module-5',
      lessonNumber: i + 1,
      title: [
        'Introduction to Strategic Management',
        'Environmental Analysis (PESTEL)',
        'Industry Analysis (Porter\'s Five Forces)',
        'Internal Analysis and Core Competencies',
        'SWOT Analysis',
        'Competitive Strategies',
        'Corporate-Level Strategy',
        'International Strategy',
        'Strategic Implementation',
        'Strategy Evaluation and Control'
      ][i],
      content: [
        'Strategic management is the process of formulating, implementing, and evaluating cross-functional decisions that enable organizations to achieve their objectives. It provides direction and allocates resources for long-term success.',
        'External analysis examines opportunities and threats in the macro-environment and industry. PESTEL analysis considers political, economic, social, technological, environmental, and legal factors affecting businesses.',
        'Internal analysis identifies organizational strengths and weaknesses. Resources, capabilities, and core competencies form the basis of competitive advantage. The VRIO framework assesses value, rarity, imitability, and organization.',
        'Competitive strategy determines how organizations compete within industries. Porter\'s generic strategies include cost leadership, differentiation, and focus. Companies must choose positions that align with their capabilities and market conditions.',
        'Successful strategy execution requires alignment of structure, systems, culture, and leadership. Strategic control monitors performance, evaluates assumptions, and enables adaptation. Organizations must balance planning with flexibility to respond to changing conditions.'
      ],
      quiz: Array.from({ length: 5 }, (_, j) => ({
        id: `q5-${i + 1}-${j + 1}`,
        question: `Sample strategy question ${j + 1} for lesson ${i + 1}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: j % 4
      })),
      estimatedTime: 15
    }))
  },
  {
    id: 'module-6',
    moduleNumber: 6,
    title: 'Business Communication',
    description: 'Master professional communication, presentations, negotiations, and business writing skills.',
    category: 'Communication',
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: `lesson-6-${i + 1}`,
      moduleId: 'module-6',
      lessonNumber: i + 1,
      title: [
        'Fundamentals of Business Communication',
        'Written Communication Skills',
        'Business Email Etiquette',
        'Report Writing',
        'Presentation Skills',
        'Interpersonal Communication',
        'Negotiation Skills',
        'Cross-Cultural Communication',
        'Crisis Communication',
        'Digital Communication Tools'
      ][i],
      content: [
        'Business communication facilitates information exchange within and outside organizations. Effective communication builds relationships, influences decisions, and drives organizational success.',
        'Clear, concise, and professional writing is essential in business. Emails, reports, proposals, and memos must convey messages accurately while considering audience, purpose, and context.',
        'Verbal communication includes face-to-face conversations, phone calls, meetings, and presentations. Active listening, clarity, and appropriate tone are crucial for effective verbal exchanges.',
        'Non-verbal communication through body language, facial expressions, and tone conveys meaning beyond words. Cultural awareness and emotional intelligence enhance communication effectiveness.',
        'Modern business communication leverages digital tools including video conferencing, collaboration platforms, and social media. Professionals must adapt their communication styles to different channels while maintaining professionalism and clarity.'
      ],
      quiz: Array.from({ length: 5 }, (_, j) => ({
        id: `q6-${i + 1}-${j + 1}`,
        question: `Sample communication question ${j + 1} for lesson ${i + 1}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: j % 4
      })),
      estimatedTime: 15
    }))
  },
  {
    id: 'module-7',
    moduleNumber: 7,
    title: 'Business Analytics and Data-Driven Decision Making',
    description: 'Learn to leverage data analytics, business intelligence, and quantitative methods for better decisions.',
    category: 'Analytics',
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: `lesson-7-${i + 1}`,
      moduleId: 'module-7',
      lessonNumber: i + 1,
      title: [
        'Introduction to Business Analytics',
        'Descriptive Analytics',
        'Data Visualization',
        'Predictive Analytics',
        'Prescriptive Analytics',
        'Statistical Analysis for Business',
        'A/B Testing and Experimentation',
        'Customer Analytics',
        'Operations Analytics',
        'Business Intelligence Tools'
      ][i],
      content: [
        'Business analytics transforms data into insights that drive better decisions. Organizations use analytics to understand past performance, predict future outcomes, and optimize operations.',
        'Data-driven decision making reduces bias and improves accuracy. Managers must develop analytical skills to interpret data, identify patterns, and draw actionable conclusions.',
        'Descriptive analytics answers "what happened" by analyzing historical data. Diagnostic analytics explains "why it happened" by identifying causes and correlations.',
        'Predictive analytics forecasts future trends using statistical models and machine learning. Prescriptive analytics recommends actions to achieve desired outcomes.',
        'Effective analytics requires quality data, appropriate tools, and organizational culture. Companies that successfully implement analytics gain competitive advantages through better insights, faster decisions, and continuous improvement.'
      ],
      quiz: Array.from({ length: 5 }, (_, j) => ({
        id: `q7-${i + 1}-${j + 1}`,
        question: `Sample analytics question ${j + 1} for lesson ${i + 1}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: j % 4
      })),
      estimatedTime: 15
    }))
  },
  {
    id: 'module-8',
    moduleNumber: 8,
    title: 'Entrepreneurship and Innovation',
    description: 'Explore entrepreneurial thinking, startup management, and driving innovation in organizations.',
    category: 'Entrepreneurship',
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: `lesson-8-${i + 1}`,
      moduleId: 'module-8',
      lessonNumber: i + 1,
      title: [
        'Introduction to Entrepreneurship',
        'Opportunity Recognition',
        'Business Model Development',
        'Startup Financing',
        'Lean Startup Methodology',
        'Product-Market Fit',
        'Scaling Operations',
        'Innovation Management',
        'Corporate Entrepreneurship',
        'Entrepreneurial Leadership'
      ][i],
      content: [
        'Entrepreneurship is the process of creating new ventures, products, or services that create value. Entrepreneurs identify opportunities, mobilize resources, and bear risks to pursue innovations.',
        'Successful entrepreneurs possess creativity, resilience, vision, and execution capabilities. They navigate uncertainty, learn from failures, and adapt to changing markets.',
        'Business models describe how organizations create, deliver, and capture value. The Business Model Canvas provides a framework for designing and testing business models systematically.',
        'Innovation drives competitive advantage and economic growth. Organizations must balance exploitation of existing capabilities with exploration of new opportunities to sustain long-term success.',
        'Entrepreneurial mindsets benefit both startups and established organizations. Corporate entrepreneurship (intrapreneurship) encourages innovation within existing companies, creating new products, services, and business models.'
      ],
      quiz: Array.from({ length: 5 }, (_, j) => ({
        id: `q8-${i + 1}-${j + 1}`,
        question: `Sample entrepreneurship question ${j + 1} for lesson ${i + 1}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: j % 4
      })),
      estimatedTime: 15
    }))
  },
  {
    id: 'module-9',
    moduleNumber: 9,
    title: 'Business Ethics and Corporate Governance',
    description: 'Understand ethical decision-making, corporate social responsibility, and governance frameworks.',
    category: 'Ethics & Governance',
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: `lesson-9-${i + 1}`,
      moduleId: 'module-9',
      lessonNumber: i + 1,
      title: [
        'Introduction to Business Ethics',
        'Ethical Decision-Making Frameworks',
        'Corporate Social Responsibility',
        'Stakeholder Theory',
        'Corporate Governance Principles',
        'Board of Directors Role',
        'Regulatory Compliance',
        'Sustainability in Business',
        'Ethical Leadership',
        'Ethics in Global Business'
      ][i],
      content: [
        'Business ethics examines moral principles guiding business behavior. Ethical organizations consider impacts on all stakeholders, not just shareholders, in their decisions.',
        'Corporate governance provides structures and processes for directing and controlling companies. Good governance ensures accountability, transparency, and protection of stakeholder interests.',
        'Corporate Social Responsibility (CSR) reflects organizations\' commitments to economic, social, and environmental responsibilities. Sustainable business practices create long-term value for society and shareholders.',
        'Ethical dilemmas arise when competing values or interests conflict. Frameworks like utilitarianism, rights-based approaches, and virtue ethics help navigate complex ethical decisions.',
        'Ethical leadership sets the tone for organizational culture. Leaders who demonstrate integrity, fairness, and responsibility inspire ethical behavior throughout their organizations and build trust with stakeholders.'
      ],
      quiz: Array.from({ length: 5 }, (_, j) => ({
        id: `q9-${i + 1}-${j + 1}`,
        question: `Sample ethics question ${j + 1} for lesson ${i + 1}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: j % 4
      })),
      estimatedTime: 15
    }))
  },
  {
    id: 'module-10',
    moduleNumber: 10,
    title: 'Global Business and Leadership',
    description: 'Master international business strategies, cross-cultural management, and executive leadership.',
    category: 'Global Leadership',
    lessons: Array.from({ length: 10 }, (_, i) => ({
      id: `lesson-10-${i + 1}`,
      moduleId: 'module-10',
      lessonNumber: i + 1,
      title: [
        'Introduction to Global Business',
        'International Trade Theory',
        'Foreign Market Entry Strategies',
        'Cross-Cultural Management',
        'Global Strategic Management',
        'Managing International Operations',
        'Executive Leadership',
        'Strategic Decision Making',
        'Leading Change and Transformation',
        'Future of Business Leadership'
      ][i],
      content: [
        'Global business involves operating across national borders in diverse economic, political, and cultural environments. Globalization creates opportunities and challenges for organizations.',
        'International strategy must consider market characteristics, competitive dynamics, and institutional contexts. Companies choose between global integration and local responsiveness based on industry and market conditions.',
        'Cross-cultural competence is essential for global business success. Understanding cultural dimensions, communication styles, and business practices enables effective international collaboration.',
        'Executive leadership requires strategic vision, decision-making capabilities, and the ability to inspire and develop others. Leaders must navigate complexity, ambiguity, and rapid change.',
        'The future of business leadership emphasizes digital transformation, sustainability, stakeholder capitalism, and inclusive cultures. Leaders must be adaptive, innovative, and purpose-driven to succeed in evolving business landscapes.'
      ],
      quiz: Array.from({ length: 5 }, (_, j) => ({
        id: `q10-${i + 1}-${j + 1}`,
        question: `Sample global business question ${j + 1} for lesson ${i + 1}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: j % 4
      })),
      estimatedTime: 15
    }))
  }
];
