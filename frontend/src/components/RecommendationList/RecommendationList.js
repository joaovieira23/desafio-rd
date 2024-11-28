import React, { useMemo } from 'react';
import { EmptyInformation } from '../shared/EmptyInformation/EmptyInformation';

/**
 * RecommendationList component
 *
 * This component displays a list of product recommendations.
 * If there are no recommendations, it displays an empty information message.
 *
 * @param {Object[]} recommendations - Array of recommendation objects
 * @param {number} recommendations[].id - Unique identifier for the recommendation
 * @param {string} recommendations[].name - Name of the recommended product
 * @param {string} recommendations[].category - Category of the recommended product
 *
 * @returns {JSX.Element} - A rendered list of recommendations or an empty message
 */
function RecommendationList({ recommendations }) {
  const emptyMessage = useMemo(() => {
    return recommendations.length === 0 ? (
      <div className=''>
        <EmptyInformation title="Nenhuma recomendação encontrada" subtitle="Faça uma busca para obter recomendações ou tente novamente"/>
      </div>
    ) : null;
  }, [recommendations.length]);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {emptyMessage}

      <ul>
        {recommendations?.map((recommendation) => (
          <li
            key={recommendation?.id}
            className="mb-2 p-2 rounded-md shadow-md gap-2 grid border"
          >
            <span className="text-sm text-gray-500">
              {recommendation?.category}
            </span>
            <span className="font-medium">
              {recommendation?.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
