const formatRange = (
  values: { min?: number; max?: number },
  oldValues: { min: number; max: number }
) => {
  let min: number = (values.min && values.min) || oldValues.min;
  const max: number = (values.max && values.max) || oldValues.max;

  if (max < min) min = max;

  return {
    min,
    max,
  };
};

export { formatRange };
