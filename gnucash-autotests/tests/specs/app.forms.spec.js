import AccountFormScreen from '../screenobjects/account-form.screen';
import AccountListScreen from '../screenobjects/account-list.screen';

describe('At the Create Account Form,', () => {
    beforeEach(() => {
        AccountListScreen.createAccountBtn.waitForDisplayed(20000);
        AccountListScreen.createAccountBtn.click();
        AccountFormScreen.waitForIsShown(true);
    });

    it('account creation works and account is displayed', () => {
        const name = 'Muster account';
        const currencyValue = 'UYU - Peso Uruguayo';
        const colorOptionIndex = 7;
        const accountType = 'INCOME';
        const description = 'Muster description';

        // Fill name input with correct value
        AccountFormScreen.nameInput.setValue(name);
        expect(AccountFormScreen.nameInput.getText()).toEqual(name);

        // Hide keyboard
        if (driver.isKeyboardShown()) {
            driver.hideKeyboard();
        }

        // Pick non-default currency
        AccountFormScreen.currencySpinner.click();
        AccountFormScreen.picker.selectValue(currencyValue);
        expect(AccountFormScreen.currencyField.getText()).toEqual(currencyValue);

        // Pick non-default color
        AccountFormScreen.colorPicker.click();
        AccountFormScreen.allColorOptions[colorOptionIndex].click();
        // check selected

        // Pick non-default account type
        AccountFormScreen.accountTypeSpinner.click();
        AccountFormScreen.picker.selectValue(accountType);

        // Fill name input with correct value
        AccountFormScreen.descriptionInput.setValue(description);
        expect(AccountFormScreen.descriptionInput.getText()).toEqual(description);

        // Mark account as a placeholder one
        AccountFormScreen.placeholderChkbox.click();
        expect(AccountFormScreen.placeholderChkbox.getAttribute('checked')).toEqual('true');

        AccountFormScreen.saveBtn.click();
        AccountListScreen.waitForIsShown(true);

        // Verify that created account is in the list
        expect($(`android=new UiSelector().text("${name}")`).isDisplayed()).toBe(true);
    });
});
