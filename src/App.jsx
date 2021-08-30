import transactions from './Data/transactions.json';
import {avatar, name, tag, location, stats} from './Data/user.json';
import statisticalData from './Data/statistical-data.json';
import friends from './Data/friends.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';
import MainContainer from './components/container/MainContainer';



export default function App() {
  return (
    <MainContainer>
      <Profile
        avatar={avatar}
        name={name}
        tag={tag}
        location={location}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </MainContainer>
  );
}
