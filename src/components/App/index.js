import {useReducer} from 'react';
import initialState from '../../state/initialState';
import {AppContext} from '../../state/context';
import reducer from '../../state/reducer';

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default App;
