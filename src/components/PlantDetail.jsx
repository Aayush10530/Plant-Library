import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { plants } from '../data/plants';
import ImageGallery from './ImageGallery';

const PlantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const plant = plants.find(p => p.id === parseInt(id));

  if (!plant) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-serif text-gray-800">Plant not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-primary-600 hover:text-primary-700"
        >
          Return to plant list
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-8"
    >
      <button
        onClick={() => navigate('/')}
        className="mb-6 text-primary-600 hover:text-primary-700 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Plants
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <ImageGallery images={plant.images} />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">
              {plant.name}
            </h1>
            <p className="text-xl text-gray-600 italic">
              {plant.scientificName}
            </p>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700">{plant.details.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Care Level</h3>
              <p className="text-gray-600">{plant.careLevel}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
              <p className="text-gray-600">{plant.category}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Care Instructions
            </h2>
            <div className="grid gap-4">
              {Object.entries(plant.details.careInstructions).map(([key, value]) => (
                <div key={key}>
                  <h3 className="font-semibold text-gray-900 capitalize">
                    {key}
                  </h3>
                  <p className="text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Common Problems
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {plant.details.commonProblems.map((problem, index) => (
                <li key={index}>{problem}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Additional Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Propagation</h3>
                <p className="text-gray-600">{plant.details.propagation}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Toxicity</h3>
                <p className="text-gray-600">{plant.details.toxicity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlantDetail; 