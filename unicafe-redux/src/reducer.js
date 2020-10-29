const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      console.log('This is good')
      return {
        ...state,
        good: state.good+1
      }
    case 'OK':
      return state.ok + 1
    case 'BAD':
      return state.bad + 1
    case 'ZERO':
      return state = {
        good: 0, 
        ok: 0,
        bad: 0
      }
    default: return initialState
  }
  
}

export default counterReducer