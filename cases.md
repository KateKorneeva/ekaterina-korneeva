# Monefy app test suit
**You'd better really specify some particular part of the app. 2-4 hours is only enough for a 10-20% of the app test coverage.**

## General
* App works after sending it to background and reactivating. State is saved (another date, opened menus)
* App battery usage after half an hour of active usage is not too high, comparing to half an hour of just active homescreen. Exact numbers should be discussed.
* 

## Main view
* Current date view with 0 expenses/incomes is displayed correctly. Balance shows message for empty list
* Current date with incomes and expenses is displayed correctly. Balance shows incomes and expenses in categories

### Edit expende/income
* Change date -> previous date does not have this transaction. New date has it. Balance for the day is different. Balance for the period that contains both dates is unchanged.
* Change category -> transation is moved to another category, this is true for all time periods with this day
* Change account -> old and new account balance is changed. Day, week, etc. balance is not changed.

#### Change amount
* Change amount -> balance is canged for day, week, month
* Changing amount to 0 is not possible
* Sum of three normal numbers works (like 300, 563 and 41)
* Sum of 999999999 and 999999999 returns 0
* Same for multiplication that causes field overflow
* If substraction results in negative number, it is not saved. Latest saved is used instead
* Division by 0 returns 0
* Some more test cases with decimal numbers

## Categories
### Menu
* Categories menu section can be opened
* Categories menu section can be closed
* Categories menu section can be opened after opening and closing another section (e.g. Accounts)
### Create Category (skipped, paid option)

### Edit category
* Category name can be changed
* (Int) New category name is dislayed when creating new expenses/incomes
* (Int) New category name is displayed for existing expenses/incomes
* (Int) New category name is used for editing existing expenses/incomes

### Enable/Disable category
* (Int) Disabled category is not in the list when creating new expenses/incomes
* (Int) Disabled category is not in the list when editing existing expenses/incomes
* (Int) Disabled category is still displayed for existing expenses/incomes with this category
* Reenabling category returns it into working state for
    * creating new expenses/incomes screen
    * editing existing expenses/incomes screen

### Merge category
* Merging two enabled expenses/incomes categories works. 
    * The merged category disappears from the list of categories. 
    * All expenses/incomes from the merged category are included into another category (to which merge was done)
    * New expenses/incomes works with the resulting category. Merged one is abscent in the list.
    * Edit expenses/incomes works with the resulting category. Merged one is abscent in the list.
* There is no option to merge expences category into incomes category (and vice versa)
* There is no option to merge category into disabled category (it is not on the list)
* It is possible to merge disabled category into enabled category. Apply the checks from two similar enabled categories merge.

### Delete category
* (Int) Deleted category is not in the list when creating new expenses/incomes
* (Int) Deleted category is not in the list when editing existing expenses/incomes
* (Int) All expenses/incomes withing the deleted category are also deleted
* Three above cases also true if disabled category is deleted

## Accounts
### Add account
### Edit account
### Transfer money
### Merge accounts
### Enable/disable account 

## Currencies
## Settings

