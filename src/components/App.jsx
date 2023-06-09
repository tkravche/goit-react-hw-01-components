import user from '../data/user.json';
import transactions from '../data/transactions.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Bank/TransactionHistory';
import { AppStyle } from './App.styled';

export const App = () => {
  return (
    <AppStyle>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        views={user.stats.views}
        likes={user.stats.likes}
        followers={user.stats.followers}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </AppStyle>
  );
};
