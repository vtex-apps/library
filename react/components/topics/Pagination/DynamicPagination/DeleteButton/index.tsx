// This component is a delete button.

import React from 'react'
import { Mutation } from 'react-apollo'
import { Button, Spinner } from 'vtex.styleguide'

import deleteBookMutation from '../../../graphql/delete.graphql'

import { onClickDelete, update } from './utils'

const DeleteButton: React.SFC<{ id: string }> = ({ id }) => (
  <Mutation mutation={deleteBookMutation} update={update(id)}>
    {(deleteBook, { loading }) =>
      loading ? (
        <Spinner />
      ) : (
        <Button onClick={onClickDelete(id, deleteBook)}>Delete</Button>
      )
    }
  </Mutation>
)

export default DeleteButton
