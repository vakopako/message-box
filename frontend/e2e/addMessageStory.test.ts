import { test, expect } from '@playwright/test';

import { CONSTANTS } from './constants';

const testMessage = 'One two three';

test('can add message', async ({ page }) => {
  // visit homepage
  await page.goto(CONSTANTS.url.dev);

  // click on the link of a group
  await page.getByRole('link', { name: 'or just click here' }).click();

  // it should contain the list of messages
  await expect(page.getByRole('list')).toBeVisible();

  // send out a message
  await page.getByRole('textbox').fill(testMessage);
  await page.getByRole('button', { name: 'Add' }).click();

  // the message should be added to the list
  await expect(page.getByRole('list')).toContainText(testMessage);
});
