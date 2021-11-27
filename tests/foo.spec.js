const { test, expect } = require('@playwright/test');

var _urlpage='https://newdev2.sphere.ro/';

test.beforeAll(async () => {
  console.log('Before tests');
});

test.afterAll(async () => {
  console.log('After tests');
});

  test('Login test', async ({ page }, urlpage ) => {
    urlpage=_urlpage;
    await page.goto(urlpage);
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/LiveUnicorns/);

    // Expect an attribute "to be strictly equal" to the value.
    await expect(page.locator('text=Login').first()).toHaveAttribute('href', '/login');

    // Expect an element "to be visible".
    await expect(page.locator('text=Homepage').first()).toBeVisible();

    await page.click('text=Login');

    // Expect some text to be visible on the page.
    await expect(page.locator('text=Login to LiveUnicorns').first()).toBeVisible();

    // Compare screenshot with a stored reference.
    await expect(await page.screenshot()).toMatchSnapshot('Login2-Newdev2.png');

    // Text input
    await page.fill('.ds__text_input_wrapper .ds__email_input', 'carlo@gmail.com');

    //.icon_right_wrapper .ds__icon 
    await page.click('text=visibility');

    // Text input
    await page.fill('.icons_wrapper .ds_password_input', '123456');

      // Compare screenshot with a stored reference.
    expect(await page.screenshot()).toMatchSnapshot('Login2-Data-Newdev2.png');

    //await page.click('text=Login');
    await page.click('button >> text=Login');

    page.on('load', (event) => {
      console.log('page is fully loaded');
    });

    // Expect an element "to be visible".
    await page.innerText('.ds__tab .active'); 

    // Compare screenshot with a stored reference.
    //expect(await page.screenshot()).toMatchSnapshot('Dash-Newdev2.png');
   
    // Expect an attribute "to be strictly equal" to the value.
    //await expect(page.locator('.box_curtain').first()).toHaveAttribute('href','/recorded-show?v=%242y%2412%248y930AH56X.MEMf.1orHmu.rO4VPncw4T3bnh7wvd7upjVbmGhUwC');

    //await page.click('text=Carla');
    await page.click('text=people');

    await expect(page.locator('text=Carla').first()).toBeVisible();

    await page.click('text=Carla');

    page.on('load', (event) => {
      console.log('page is fully loaded');
    });

    // Expect some text to be visible on the page.Characteristics
    await expect(page.locator('text=Carla').first()).toBeVisible();

    await expect(page.locator('button.active >> text=/Media/').first()).toBeVisible();
    
    // Expect some text to be visible on the page.Characteristics
    await expect(page.locator('span >> text=Characteristics').first()).toBeVisible();

     // Compare screenshot with a stored reference.
    //expect(await page.screenshot()).toMatchSnapshot('CarlaModel22-Newdev2.png');

    //await page.click('text=Carla');
    await page.click('button >> text=/My shows/');
    // My shows 
    await expect(page.locator('button.active >> text=/My shows/').first()).toBeVisible();

  });

