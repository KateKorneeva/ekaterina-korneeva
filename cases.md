# Monefy app test suit

Priorities: \\/ low, /\ middle, _/\\\_ high.

## General
* _/\\\_ App works after sending it to background and reactivating. State is saved (another date, opened menus)
* \\/ App battery usage after half an hour of active usage is not too high, comparing to half an hour of just active homescreen. Exact numbers should be discussed.

## Main view
* _/\\\_ Current date view with 0 expenses/incomes is displayed correctly. Balance shows message for empty list
* _/\\\_ Current date with incomes and expenses is displayed correctly. Balance shows incomes and expenses in categories

### Edit expense/income
* _/\\\_ Change date -> previous date does not have this transaction. New date has it. Balance for the day is different. Balance for the period that contains both dates is unchanged.
* _/\\\_ Change category -> transation is moved to another category, this is true for all time periods with this day
* _/\\\_ Change account -> old and new account balance is changed. Day, week, etc. balance is not changed.

#### Change amount
* _/\\\_ Change amount -> balance is canged for day, week, month
* /\ Changing amount to 0 is not possible
* /\ Sum of three normal numbers works (like 300, 563 and 41)
* /\ Sum of 999999999 and 999999999 returns 0
* /\ Same for multiplication that causes field overflow
* _/\\\_ If substraction results in negative number, it is not saved. Latest saved is used instead
* _/\\\_ Division by 0 returns 0
* \\/ ...Some more test cases with decimal numbers

## Categories
### Menu
* \\/ Categories menu section can be opened and closed
* \\/ Categories menu section can be opened after opening and closing another section (e.g. Accounts)

### Create Category (skipped, paid option)

### Edit category
* /\ Category name can be changed
* _/\\\_ New category name is dislayed when creating new expenses/incomes
* _/\\\_ New category name is displayed for existing expenses/incomes
* _/\\\_ New category name is used for editing existing expenses/incomes

### Enable/Disable category
* /\ Category name can be disabled
* /\ Disabled category is not in the list when creating new expenses/incomes
* /\ Disabled category is not in the list when editing existing expenses/incomes
* /\ Disabled category is still displayed for existing expenses/incomes with this category
* /\ Reenabling category returns it into working state for
    * creating new expenses/incomes screen
    * editing existing expenses/incomes screen

### Merge category
* /\ Merging two enabled expenses/incomes categories works. 
    * _/\\\_ The merged category disappears from the list of categories. 
    * _/\\\_ All expenses/incomes from the merged category are included into another category (to which merge was done)
    * _/\\\_ New expenses/incomes works with the resulting category. Merged one is abscent in the list.
    * _/\\\_ Edit expenses/incomes works with the resulting category. Merged one is abscent in the list.
* /\ There is no option to merge expences category into incomes category (and vice versa)
* \\/ There is no option to merge category into disabled category (it is not on the list)
* \\/ It is possible to merge disabled category into enabled category. Apply the checks from two similar enabled categories merge.

### Delete category
* /\ Deleted category is not in the list when creating new expenses/incomes
* /\ Deleted category is not in the list when editing existing expenses/incomes
* _/\\\_ All expenses/incomes withing the deleted category are also deleted
* /\ Three above cases also true if disabled category is deleted

... More categories to cover:

## Accounts
### Add account
### Edit account
### Transfer money
### Merge accounts
### Enable/disable account 

## Currencies
## Settings
