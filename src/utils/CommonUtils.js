export const updateColors = (array, newColor, startIndex, endIndex) => {
  if (!array) return;
  const updatedObjects = array.slice(startIndex, endIndex + 1).map((item) => {
    return { ...item, color: newColor };
  });

  return [
    ...array.slice(0, startIndex),
    ...updatedObjects,
    ...array.slice(endIndex + 1),
  ];
};
