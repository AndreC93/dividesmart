export const grabAllFriends = state => {
  const friends = Object.values(state.entities.users);
  return friends.filter( friend => friend.id != state.session.currentUserId );
};

export const grabAllBills = state => {
  const bills = Object.values(state.entities.bills);
  const currUserId = state.session.currentUserId;
  return bills.filter( bill => {
    const payments = bill.payments.map( payment => payment.userId );
    if (bill.creatorId === currUserId || payments.includes(currUserId)) {
      return true;
    } else {
      false;
    }
  });
};

export const grabAllUsernames = state => {
  const users = Object.values(state.entities.users);
  return users.map( user => ({
    username: user.username,
    userId: user.id,
  }) );
};
