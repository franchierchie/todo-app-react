import React from 'react'

export const Todo = ({ todos = [], onDeleteTodo, onToggleTodo }) => {

  const completedTasks = todos.filter( todo => todo.completed );
  const incompletedTasks = todos.filter( todo => !todo.completed );

  return (
    <>
      <h2>To do: { incompletedTasks.length }</h2>
      {
        incompletedTasks.map(todo => (
        <div key={ todo.id } className={ `todo-item ${ todo.completed && "completed" }` }>
            <input type="checkbox" onClick={ () => onToggleTodo( todo.id ) } />
            <p className="todo">{ todo.task }</p>
            <button className="btn btn-delete" onClick={ () => onDeleteTodo( todo.id ) }>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </button>
        </div>
        ))
      }

      <h2>Completed: { completedTasks.length }</h2>
      {
        completedTasks.map( todo => (
        <div key={ todo.id } className={ `todo-item ${ todo.completed && "completed" }` }>
          <input type="checkbox" onClick={ () => onToggleTodo( todo.id ) }  checked />
          <p className="todo">{ todo.task }</p>
          <button className="btn btn-delete" onClick={ () => onDeleteTodo( todo.id ) }>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
        </div>
        ))
      }
    </>
  )
}
