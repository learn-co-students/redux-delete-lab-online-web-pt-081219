export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {
        name: action.name,
        id: Math.random()
      }

      return { ...state, bands: [...state.bands, newBand]}

      case "DELETE_BAND":
        const bands = state.bands.filter(b => b.id !== action.id);
        console.log({action, state})
        return { bands };

    default:
      return state;
  }
};
