import * as types from '../types';

const initialState = {
  clickedButton: false,
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case types.BUTTON_CLICKED_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.clickedButton = !newState.clickedButton;
      return newState;
    }
    case types.BUTTON_CLICKED_FAILURE: {
      console.log('Erro na requisição');
      return state;
    }
    case types.BUTTON_CLICKED_REQUEST: {
      console.log('Requisição em andamento');
      return state;
    }

    default: {
      return state;
    }
  }
}

export default reducer;
