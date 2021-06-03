import React from 'react';
import Profile from './components/Profile/Profile';
import { avatar, name, tag, location, stats } from './data/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';

import FriendsList from './components/Friends/FriendsList';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

import Container from './components/Container/Container';

const App = () => (
  <Container>
    <Profile
      avatar={avatar}
      tag={tag}
      name={name}
      location={location}
      stats={stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendsList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </Container>
);

export default App;
