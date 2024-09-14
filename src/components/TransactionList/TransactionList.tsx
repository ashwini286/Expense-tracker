import React, { FC } from 'react'
/* Redux */
import { useStoreState } from '../../store'
/* Styles */
import useStyles from './styles'
/* Components */
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import TransactionListItem from './TransactionListItem'

const TransactionList: FC = () => {
  const transactions = useStoreState((state) => state.transactions.transactions)

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography variant='h5' component='h3'>Transactions:</Typography>
      <Divider />
      <List classes={{ root: classes.listContainer }}>
        { transactions.map((t) => {
            return (
              <TransactionListItem
                key={t.id}
                id={t.id}
                description={t.description}
                amount={t.amount}
              />
            )
          })
        }
      </List>
    </div>
  )
}

export default TransactionList
