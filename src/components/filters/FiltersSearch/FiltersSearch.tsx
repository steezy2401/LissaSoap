import React from 'react';

interface FiltersSearchProps {
  query: string;
}

export default function FiltersSearch({ query }: FiltersSearchProps) {
  return <div>{query}</div>;
}
