const initialState = {
  searchValue: '',
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'APP_SET_ACTIVE_JOB':
      return {
        ...state,
        activeJob: action.value,
      };
    default:
      return state;
  }
}
