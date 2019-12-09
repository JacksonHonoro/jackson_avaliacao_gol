import produce from 'immer';

export default function weatherCity(state = [], action) {
  switch (action.type) {
    case '@weather/SEARCH_CITY':
      return produce(state, draft => {
        draft.splice(action.weather, 1);

        const linkIco = 'https://www.metaweather.com/static/img/weather/ico/';
        const days = [];
        const coord = action.weather.latt_long.split(',');

        action.weather.consolidated_weather.map(weat => {
          return days.push({
            id: weat.id,
            date: weat.applicable_date.split('-'),
            info: {
              tempCels: Math.round(weat.the_temp),
              tempFahr: Math.round((weat.the_temp / 5) * 9 + 32),
              state: weat.weather_state_abbr,
            },
          });
        });

        draft.push({
          ...action.weather,
          linkIco,
          days,
          coord,
        });
      });
    default:
      return state;
  }
}
