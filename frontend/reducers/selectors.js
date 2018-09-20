export const grabAllFriends = state => {
  const friends = Object.values(state.entities.users);
  return friends.filter( friend => friend.id != state.session.currentUserId );
};

export const grabAllBills = (state, userId = state.session.currentUserId) => {
  const bills = Object.values(state.entities.bills);
  if (bills.length === 0) return false;
  const relatedBills = bills.filter( bill => {
    if (!bill) return false;
    if (!bill.payments) return false;

    const payments = bill.payments.map( payment => payment.userId );
    if (bill.creatorId === userId || payments.includes(userId)) {
      return true;
    } else {
      false;
    }
  });
  return relatedBills;
};

export const grabAllUsernames = state => {
  const users = Object.values(state.entities.users);
  const usernames = {};
  users.forEach( user => (
    usernames[user.id] = {
    username: user.username,
    userId: user.id,
    }
  ) );
  return usernames;
};
