import './App.css';
import React from 'react';

//task_1
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

//task_2
import Statistics from './components/Statistic/Statistics';
import statisticalData from './components/Statistic/statistical-data.json';

//task_3
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

//task_4
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
