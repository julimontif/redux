const initialState = {
  entities: [],
}

export const reducer = (state = initialState, action) => {
  console.log(state)
  return state
}

const App = () => {
  return (
    <div>
      <form>
        <input />
      </form>
      <button>Mostrat todos</button>
      <button>Completados</button>
      <button>Incompletos</button>
      <ul>
        <li>todo 1</li>
        <li>todo 2</li>
      </ul>
    </div>
  )
}

export default App