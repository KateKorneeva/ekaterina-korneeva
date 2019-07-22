# Monefy app test suit

Priorities: :arrow_down_small: low, :arrow_up_small: middle, :arrow_double_up: high.

## General
* :arrow_double_up: App works after sending it to background and reactivating. State is saved (another date, opened menus)
* :arrow_down_small: App battery usage after half an hour of active usage is not too high, comparing to half an hour of just active homescreen. Exact numbers should be discussed.

## Main view
* :arrow_double_up: Current date view with 0 expenses/incomes is displayed correctly. Balance shows message for empty list
* :arrow_double_up: Current date with incomes and expenses is displayed correctly. Balance shows incomes and expenses in categories

### Edit expense/income
* :arrow_double_up: Change date -> previous date does not have this transaction. New date has it. Balance for the day is different. Balance for the period that contains both dates is unchanged.
* :arrow_double_up: Change category -> transation is moved to another category, this is true for all time periods with this day
* :arrow_double_up: Change account -> old and new account balance is changed. Day, week, etc. balance is not changed.

#### Change amount
* :arrow_double_up: Change amount -> balance is canged for day, week, month
* :arrow_up_small: Changing amount to 0 is not possible
* :arrow_up_small: Sum of three normal numbers works (like 300, 563 and 41)
* :arrow_up_small: Sum of 999999999 and 999999999 returns 0
* :arrow_up_small: Same for multiplication that causes field overflow
* :arrow_double_up: If substraction results in negative number, it is not saved. Latest saved is used instead
* :arrow_double_up: Division by 0 returns 0
* :arrow_down_small: ...Some more test cases with decimal numbers

## Categories
### Menu
* :arrow_down_small: Categories menu section can be opened and closed
* :arrow_down_small: Categories menu section can be opened after opening and closing another section (e.g. Accounts)

### Create Category (skipped, paid option)

### Edit category
* :arrow_up_small: Category name can be changed
* :arrow_double_up: New category name is dislayed when creating new expenses/incomes
* :arrow_double_up: New category name is displayed for existing expenses/incomes
* :arrow_double_up: New category name is used for editing existing expenses/incomes

### Enable/Disable category
* :arrow_up_small: Category name can be disabled
* :arrow_up_small: Disabled category is not in the list when creating new expenses/incomes
* :arrow_up_small: Disabled category is not in the list when editing existing expenses/incomes
* :arrow_up_small: Disabled category is still displayed for existing expenses/incomes with this category
* :arrow_up_small: Reenabling category returns it into working state for
    * creating new expenses/incomes screen
    * editing existing expenses/incomes screen

### Merge category
* :arrow_up_small: Merging two enabled expenses/incomes categories works. 
    * :arrow_double_up: The merged category disappears from the list of categories. 
    * :arrow_double_up: All expenses/incomes from the merged category are included into another category (to which merge was done)
    * :arrow_double_up: New expenses/incomes works with the resulting category. Merged one is abscent in the list.
    * :arrow_double_up: Edit expenses/incomes works with the resulting category. Merged one is abscent in the list.
* :arrow_up_small: There is no option to merge expences category into incomes category (and vice versa)
* :arrow_down_small: There is no option to merge category into disabled category (it is not on the list)
* :arrow_down_small: It is possible to merge disabled category into enabled category. Apply the checks from two similar enabled categories merge.

### Delete category
* :arrow_up_small: Deleted category is not in the list when creating new expenses/incomes
* :arrow_up_small: Deleted category is not in the list when editing existing expenses/incomes
* :arrow_double_up: All expenses/incomes withing the deleted category are also deleted
* :arrow_up_small: Three above cases also true if disabled category is deleted

... More categories to cover:

## Accounts
### Add account
### Edit account
### Transfer money
### Merge accounts
### Enable/disable account 

## Currencies
## Settings
