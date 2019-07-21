import Picker from '../helpers/Picker';
import AppScreen from './app.screen';

const SELECTORS = {
    FORM_SCREEN: 'android=new UiSelector().resourceId("org.gnucash.android:id/fragment_account_form")',
    NAME_INPUT: 'android=new UiSelector().resourceId("org.gnucash.android:id/input_account_name")',
    NAME_LAYOUT: 'android=new UiSelector().resourceId("org.gnucash.android:id/name_text_input_layout")',
    INPUT_ERROR: 'android=new UiSelector().resourceId("org.gnucash.android:id/textinput_error")',
    CURRENCY_SPINNER: 'android=new UiSelector().resourceId("org.gnucash.android:id/input_currency_spinner")',
    CURRENCY_FIELD: 'android=new UiSelector().resourceId("android:id/text1")',
    TYPE_SPINNER: 'android=new UiSelector().resourceId("org.gnucash.android:id/input_account_type_spinner")',
    COLOR_PICKER: 'android=new UiSelector().resourceId("org.gnucash.android:id/input_color_picker")',
    COLOR_OPTIONS: 'android=new UiSelector().resourceId("org.gnucash.android:id/color_picker_swatch")',
    DESCRIPTION_INPUT: 'android=new UiSelector().resourceId("org.gnucash.android:id/input_account_description")',
    PLACEHOLDER_CHECKBOX: 'android=new UiSelector().resourceId("org.gnucash.android:id/checkbox_placeholder_account")',
    PARENT_CHECKBOX: 'android=new UiSelector().resourceId("org.gnucash.android:id/checkbox_parent_account")',
    TRANSFER_CHECKBOX: 'android=new UiSelector().resourceId("org.gnucash.android:id/checkbox_default_transfer_account")',
    TRANSFER_SPINNER: 'android=new UiSelector().resourceId("org.gnucash.android:id/input_default_transfer_account")',
    SAVE_BTN: 'android=new UiSelector().resourceId("org.gnucash.android:id/menu_save")'
};

class AccountFormScreen extends AppScreen {
    constructor () {
        super(SELECTORS.FORM_SCREEN);
    }

    get nameInput () {
        return $(SELECTORS.NAME_INPUT);
    }

    get nameInputError () {
        return $(SELECTORS.NAME_LAYOUT).$(SELECTORS.INPUT_ERROR);
    }

    get currencySpinner () {
        return $(SELECTORS.CURRENCY_SPINNER);
    }

    get currencyField () {
        return $(SELECTORS.CURRENCY_SPINNER).$(SELECTORS.CURRENCY_FIELD);
    }

    get accountTypeSpinner () {
        return $(SELECTORS.TYPE_SPINNER);
    }

    get colorPicker () {
        return $(SELECTORS.COLOR_PICKER);
    }

    get allColorOptions () {
        return $$(SELECTORS.COLOR_OPTIONS);
    }

    get descriptionInput () {
        return $(SELECTORS.DESCRIPTION_INPUT);
    }

    get placeholderChkbox () {
        return $(SELECTORS.PLACEHOLDER_CHECKBOX);
    }

    get parentChkbox () {
        return $(SELECTORS.PARENT_CHECKBOX);
    }

    get defaultTransferChkbox () {
        return $(SELECTORS.TRANSFER_CHECKBOX);
    }

    get defaultTransferSpinner () {
        return $(SELECTORS.TRANSFER_SPINNER);
    }

    get saveBtn () {
        return $(SELECTORS.SAVE_BTN);
    }

    get picker () {
        return Picker;
    }
}

export default new AccountFormScreen();
