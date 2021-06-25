const initialState = {
  toast: null,
  status: true,
  awaiter: !!localStorage.getItem('lazyInsert'),
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'APP_SET_TOAST':
      return {
        ...state,
        toast: action.value,
      };
    case 'APP_SET_STATUS':
      return {
        ...state,
        status: action.value,
      };
    case 'APP_SET_AWAITER':
      return {
        ...state,
        awaiter: action.value,
      };
    default:
      return state;
  }
}
