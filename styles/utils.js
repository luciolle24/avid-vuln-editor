export const breakpoints = {
    xs: 576,
    sm: 768,
    md: 1024,
    lg: 1200,
  };
  
  const breakPointsRange = {
    xs: {
      min: 320,
      max: 480,
    },
    sm: {
      min: 481,
      max: 768,
    },
    md: {
      min: 769,
      max: 1024,
    },
    lg: {
      min: 481,
      max: null,
    },
  };
  
  export const mediaQueriesDesktopFirst = Object.keys(breakpoints).reduce(
    (response, key) => {
      if (key === 'lg') {
        return {
          ...response,
          [key]: `@media screen and (min-width: ${breakPointsRange[key].min}px)`,
        };
      }
      if (key === 'xs') {
        return {
          ...response,
          [key]: `@media screen and (max-width: ${breakPointsRange[key].max}px)`,
        };
      }
      return {
        ...response,
        [key]: `@media screen and (min-width: ${breakPointsRange[key].min}px) and (max-width: ${breakPointsRange[key].max}px)`,
      };
    },
    {
      lg: '',
      md: '',
      sm: '',
      xs: '',
    }
  );