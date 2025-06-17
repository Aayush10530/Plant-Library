import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PlantCard = ({ plant }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <Link to={`/plant/${plant.id}`} className="block">
        <div className="relative h-64 overflow-hidden group">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
            {plant.name}
          </h3>
          <p className="text-gray-600 line-clamp-2 mb-4 text-lg">{plant.shortDescription}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
              {plant.careLevel}
            </span>
            <span className="text-sm text-gray-500">
              {plant.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PlantCard; 