
const webdriverio = require('webdriverio');
const assert = require('chai').assert;

const androidOptions = {
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "8.1.0",
    deviceName: "Galaxy8",
    app: "/home/kate/ekaterina-korneeva/GnucashAndroid_v2.4.0.apk",
    deviceId: "192.168.0.184:5555",
    automationName: "UiAutomator2",
    noReset: false,
    autoGrantPermissions: true
  }
};

const DEVICE_HASH = 'CB:F6:4D:6D:D1:58';

describe('Moeco app', function () {
  let client;

  before(async function () {
    client = await webdriverio.remote(androidOptions);

    const res = await client.status();
    assert.isObject(res.build);

    // Check Moeco app is really opened
    const current_package = await client.getCurrentPackage();
    assert.equal(current_package, 'io.moeco.moecoapp.dev');
  });

  beforeEach(async function () {
    // Click on hamburger icon to open menu
    const hamburgerBtn = await client.$("android.widget.ImageButton");
    const desc = await hamburgerBtn.getAttribute("content-desc");
    assert.equal(desc, 'Open navigation drawer');
    await hamburgerBtn.click();
  });

  after(async function () {
    const delete_session = await client.deleteSession();
    assert.isNull(delete_session);
  });

  it('should show transactions screen', async function () {
    // Click on Transactions menu item
    const menuItemTrxSelector = 'new UiSelector().className("android.support.v7.widget.LinearLayoutCompat").index(3)';
    const menuItemTrx = await client.$(`android=${menuItemTrxSelector}`);
    await menuItemTrx.click();

    const header = await client.$('android=new UiSelector().className(android.widget.TextView).index(1)');
    const headerText = await header.getText();
    assert.equal(headerText, 'Transactions');
  });

  it('should show bad transactions screen', async function () {
    // Click on Bad transactions menu item
    const menuItemTrxSelector = 'new UiSelector().className("android.support.v7.widget.LinearLayoutCompat").index(4)';
    const menuItemTrx = await client.$(`android=${menuItemTrxSelector}`);
    await menuItemTrx.click();

    const header = await client.$('android=new UiSelector().className(android.widget.TextView).index(1)');
    const headerText = await header.getText();
    assert.equal(headerText, 'Bad Transactions');
  });

  it('should find specified device', async function () {
    // Click on Devices menu item
    const menuItemTrxSelector = 'new UiSelector().className("android.support.v7.widget.LinearLayoutCompat").index(2)';
    const menuItemTrx = await client.$(`android=${menuItemTrxSelector}`);
    await menuItemTrx.click();

    const header = await client.$('android=new UiSelector().className(android.widget.TextView).index(1)');
    const headerText = await header.getText();
    assert.equal(headerText, 'Found devices');

    client.setImplicitTimeout(15000);

    // Iterate throgh scanned devices to find the one with desired DEVICE_HASH
    const devices = await client.$$('android=new UiSelector().resourceId("io.moeco.moecoapp.dev:id/device_address")');
    let deviceHashIsPresent = false;
    for (i in devices) {
      const text = await devices[i].getText();
      if (text === DEVICE_HASH) {
        deviceHashIsPresent = true;
      }
    }
    assert.ok(deviceHashIsPresent);
  });

  it.only('should send tansactions to masternode', async function () {
    // Click on Transactions menu item
    const menuItemTrxSelector = 'new UiSelector().className("android.support.v7.widget.LinearLayoutCompat").index(3)';
    const menuItemTrx = await client.$(`android=${menuItemTrxSelector}`);
    await menuItemTrx.click();

    const header = await client.$('android=new UiSelector().className(android.widget.TextView).index(1)');
    const headerText = await header.getText();
    assert.equal(headerText, 'Transactions');

    client.setImplicitTimeout(5000);
    // TODO: trigger sync

    const transactions = await client.$$('android=new UiSelector().resourceId("io.moeco.moecoapp.dev:id/transaction_hash")');
    let dataIsSent = false;
    let transactionStatus;
    for (i = 0; i < transactions.length, dataIsSent === false; i++) {
      await transactions[i].click();
      let deviceHash = await client.$('android=new UiSelector().resourceId("io.moeco.moecoapp.dev:id/transaction_device_hash_text")');
      const text = await deviceHash.getText();
      if (text === DEVICE_HASH.toLowerCase()) {
        dataIsSent = true;
        let trxStatusElem = await client.$('android=new UiSelector().resourceId("io.moeco.moecoapp.dev:id/transaction_status_text")');
        transactionStatus = await trxStatusElem.getText();
      }
      await client.back();

      // Following needed because back button sends app to background, and UiAutomator2 
      // does not have function to activate app
      await client.reset();
      const hamburgerBtn = await client.$("android.widget.ImageButton");
      const desc = await hamburgerBtn.getAttribute("content-desc");
      assert.equal(desc, 'Open navigation drawer');
      await hamburgerBtn.click();
      // Click on Transactions menu item
      const menuItemTrxSelector = 'new UiSelector().className("android.support.v7.widget.LinearLayoutCompat").index(3)';
      const menuItemTrx = await client.$(`android=${menuItemTrxSelector}`);
      await menuItemTrx.click();
    }
    assert.ok(dataIsSent);
    const goodStatuses = ['Paid', 'Accepted', 'Invoice Approved', 'Invoiced', 'Valid']; // No 'Init' here. May be a problem
    assert.ok(goodStatuses.includes(transactionStatus));
  });
});