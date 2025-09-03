export const Item = ({todo, onDeleteTodo, onToggleTodo}) => {
    return (
      <>
      <div className="col-12">
      <li className="list-group-item d-flex justify-content-between">
                 <span
                  className={`align-self-center ${ todo.done && 'text-decoration-line-through' } `}
                  onClick={ () => onToggleTodo(todo.id)}
                  aria-label ="span"
                  >
                      {todo.description1}  {todo.description2}</span>
       </li>

         <button
        className="btn btn-danger"
        onClick={() => onDeleteTodo(todo.id)}
        style={{
          position: 'absolute',
          top: 0,
          left: '200px',
          borderRadius: '8px',
          border: '1px solid white',
          padding: '0.6em 1.2em',
          fontSize: '1em',
          fontWeight: '500',
          fontFamily: 'inherit',
          backgroundColor: '#ff4546',
          cursor: 'pointer',
          transition: 'border-color 0.25s',
        }}
        >
        Borrar
      </button>
     
      </div>
      </>
    )
  }
  