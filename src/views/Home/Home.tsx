// import React, { FC } from 'react'
// /* Components */
// import Balance from '../../components/Balance'
// import IncomeExpenses from '../../components/IncomeExpenses'
// import TransactionList from '../../components/TransactionList'


// const Home: FC = () => {
//   return (
//     <>
//       <Balance />
//       <IncomeExpenses />
//       <TransactionList />
//     </>
//   )
// }

// export default Home
import React, { FC } from 'react';
/* Components */
import Balance from '../../components/Balance';
import IncomeExpenses from '../../components/IncomeExpenses';
import TransactionList from '../../components/TransactionList';

const Home: FC = () => {
  return (
    <div>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
    </div>
  );
};

export default Home;
