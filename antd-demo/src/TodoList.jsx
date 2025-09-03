import { Item } from "./Item"

export const TodoList = ({todos = [], onDeleteTodo}) => {
  return (
    <ul className="list-group">
       {todos.length === 0 ? (
        <p>You don't have any task to do.</p>
      ) : (
        todos.map(todo => (
          <Item
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
          />
        ))
      )}
         </ul>
  )
}
