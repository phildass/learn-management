import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  postedDate: string;
  applyUrl: string;
}

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock job data - In production, fetch from API
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Business Manager',
      company: 'Tech Solutions India',
      location: 'Bangalore, India',
      type: 'Full-time',
      salary: '₹12-18 LPA',
      description: 'Looking for an experienced business manager to lead operations and strategy.',
      postedDate: '2 days ago',
      applyUrl: '#'
    },
    {
      id: '2',
      title: 'Marketing Manager',
      company: 'Digital Marketing Co.',
      location: 'Mumbai, India',
      type: 'Full-time',
      salary: '₹10-15 LPA',
      description: 'Seeking a creative marketing manager with digital marketing expertise.',
      postedDate: '3 days ago',
      applyUrl: '#'
    },
    {
      id: '3',
      title: 'Operations Manager',
      company: 'Supply Chain Solutions',
      location: 'Delhi NCR, India',
      type: 'Full-time',
      salary: '₹14-20 LPA',
      description: 'Manage end-to-end operations and supply chain optimization.',
      postedDate: '5 days ago',
      applyUrl: '#'
    },
    {
      id: '4',
      title: 'HR Manager',
      company: 'Global HR Services',
      location: 'Pune, India',
      type: 'Full-time',
      salary: '₹11-16 LPA',
      description: 'Lead talent acquisition, employee relations, and organizational development.',
      postedDate: '1 week ago',
      applyUrl: '#'
    },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || job.type.toLowerCase() === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-heading font-bold mb-4">Management Jobs</h1>
          <p className="text-xl text-primary-100">
            Explore career opportunities in business management across India
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Search and Filter */}
        <div className="card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Search Jobs</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title or company..."
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Job Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="input-field"
              >
                <option value="all">All Types</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                      <span>{job.company}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{job.location}</span>
                    </span>
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                      {job.type}
                    </span>
                    <span className="font-semibold text-primary-600">{job.salary}</span>
                  </div>
                  <p className="text-gray-600 mb-3">{job.description}</p>
                  <p className="text-sm text-gray-400">{job.postedDate}</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <a
                    href={job.applyUrl}
                    className="btn-primary inline-block"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
