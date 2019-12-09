export function cityClimate(weather) {
  return {
    type: '@weather/SEARCH_CITY',
    weather,
  };
}
