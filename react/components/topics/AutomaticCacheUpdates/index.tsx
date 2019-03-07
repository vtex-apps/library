import React, { Fragment } from 'react'
import { Spinner } from 'vtex.styleguide'

import listBooks from '../../../graphql/books.graphql'
import { Book } from '../../../typings/custom'
import BooksTable from '../../BooksTable'
import DetailsEditor from '../../DetailsEditor'
import MarkdownBlock from '../../MarkdownBlock'
import SyncQueryData from '../../SyncQueryData'

interface Props {
  id?: string
}

const AutomaticCacheUpdates: React.SFC<Props> = ({ id }) => {
  const topicPage = 'automatic-cache-updates'

  return (
    <Fragment>
      <MarkdownBlock source="automatic-cache-updates/before" />
      <SyncQueryData prop="books" query={listBooks}>
        {({ data: { books }, loading }) =>
          loading ? (
            <Spinner />
          ) : id ? (
            <DetailsEditor
              book={books.find((book: Book) => book.id === id)}
              topicPage={topicPage}
            />
          ) : (
            <BooksTable items={books} topicPage={topicPage} />
          )
        }
      </SyncQueryData>
      <MarkdownBlock source="automatic-cache-updates/after" />
    </Fragment>
  )
}

export default AutomaticCacheUpdates
