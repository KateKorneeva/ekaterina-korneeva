import AppScreen from './app.screen';

const SELECTORS = {
    LIST_SCREEN: 'android=new UiSelector().resourceId("org.gnucash.android:id/fragment_account_list")',
    CREATE_BTN: 'android=new UiSelector().resourceId("org.gnucash.android:id/fab_create_account")',
};

class AccountListScreen extends AppScreen {
    constructor () {
        super(SELECTORS.LIST_SCREEN);
    }

    get createAccountBtn () {
        return $(SELECTORS.CREATE_BTN);
    }
}

export default new AccountListScreen();
