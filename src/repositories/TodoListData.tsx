import { gql } from '@apollo/client';

const TODO_LIST = gql`
  query MyQuery {
    todos(where: {softDeleted: {_eq: false}}) {
      id
      title
      dueDate
    }
  }
`

const SOFT_DELETED_LIST = gql`
  query MyQuery {
    todos(where: {softDeleted: {_eq: true}}) {
      id
      title
      dueDate
    }
  }
`

const ADD_ITEM = gql`
  mutation addItem(
    $id: Int!, 
    $title: String!, 
    $dueDate: date, 
    $completedDate: date
  ) {
    insert_todos_one(
      object: {
        id: $id, 
        title: $title, 
        dueDate: $dueDate, 
        completedDate: $completedDate
      })
    {
      id
      title
    }
  }
`

const SOFT_DELETE_ITEM = gql`
  mutation updateItem($id: Int!) {
    update_todos_by_pk(
      pk_columns: {id: $id}, 
      _set: {softDeleted: true}
    ) {
      id
      softDeleted
    }
  }
`

const DELETE_ITEM = gql`
  mutation DeleteItem($id: Int!){
    delete_todos_by_pk(id: $id)
    {
      id
      title
    }
  }
`

export { TODO_LIST, SOFT_DELETED_LIST, ADD_ITEM, SOFT_DELETE_ITEM, DELETE_ITEM };