# Welcome to Dividesmart!

[Live!](https://dividesmart.herokuapp.com/#/ "Dividesmart")

Dividesmart is a bill splitting web application inspired by Splitwise. Organize your shared expenses and keep track of IOUs all in one place. Keep track of how much you owe and your overall balance at all times.
Join us and you'll never have to calculate bills again. 

[Dividesmart Design Documents](https://github.com/AndreC93/dividesmart/wiki "Dividesmart Wiki")

## Key Features

### User Authentication
* Users can sign up or log into an existing account.
* Error messages for invalid credientials during log in and sign up.
* Demo Login button for user to see the site before joining. 

### Friends
* Users can add other users as friends, using either their username or email address. 
* Friends will show up on the sidebar. 
* Users can delete a friend on friend's show page.

### Bills
* Users can create bills and delete bills.
* Users can only add bills with current friends.
* Users can see all their bills and the associated friends on each bill.
* Users can specify type of bill, ex. Food or General
* Dashboard shows current balance, debt amount and credit amount.
* Friend show pages only show bills between that user and the current user.
* Bill show pages show all friends that are associated with the bill and how much each of them owe or paid to the bill.
* Bills will be split and remaining cents will be distributed randomly one at a time. 
* Bills with users that are no longer friends will not be shown. 

### Calculators
* Bills can be split equally. 
* Able to choose who paid from those involved in the bill so far.
* When creating a bill, the user who paid for the bill can be specified and credited, while all other users will be added as debtors to the bill. 
* Future calculators to be added, including splitting by percentages, shares and unequally. 

### Features in Progress 
* Settling of bills, adding payments and users to bills.
* Commenting on bills by users in the bill.
* Transaction History of all activity, such as friending, bill creation and editing.