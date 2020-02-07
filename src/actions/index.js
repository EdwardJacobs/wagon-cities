// TODO: add and export your own actions
export default function SelectCity(city) {
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
}
