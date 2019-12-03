export default function weatherCity(state = [], action) {
  switch (action.type) {
    case 'CITY_CLIMATE':
      return [action.weather];
    default:
      return state;
  }
}
