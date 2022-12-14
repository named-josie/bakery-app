const capitalize = (cake) => {
  if (!cake.image ) {
    cake.image =
      'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image';
  }
  const words = cake.name.split(' ');

  const capitalizeStr = words
    .map((word) => {
      if (word.length > 2) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toLowerCase();
      }
    })
    .join(' ');

  return capitalizeStr;
};

module.exports = checkCapitalize;
