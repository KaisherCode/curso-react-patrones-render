import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.searchedTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
      <ul>
      {props.searchedTodos.map(props.render || props.children)}
      </ul>
      <ul>
        {props.children}
      </ul>

    </section>
  );
}

export { TodoList };
