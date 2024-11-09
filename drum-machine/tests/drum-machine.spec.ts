import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test('I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements', async ({
  page,
}) => {
  await expect(page.locator("#drum-machine")).toBeVisible();
});

test('Within #drum-machine I can see an element with corresponding id="display".', async ({
  page,
}) => {
  const drumMachine = page.locator("#drum-machine");
  await expect(drumMachine.locator("#display")).toBeVisible();
});

test(`Within #drum-machine I can see 9 clickable "drum pad" elements,
  each with a class name of "drum-pad",
  a unique id that describes the audio clip the drum pad will be set up to trigger,
  and an inner text that corresponds to one of the following keys on the keyboard:
  Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.`, async ({
  page,
}) => {
  const drumMachine = page.locator("#drum-machine");
  const drumPads = drumMachine.locator(".drum-pad");

  await expect(drumPads).toHaveCount(9);

  const expectedKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  for (let i = 0; i < expectedKeys.length; i++) {
    await expect(drumPads.nth(i)).toHaveText(
      new RegExp(`${expectedKeys[i]}*$`)
    );
  }

  for (let i = 0; i < expectedKeys.length; i++) {
    const id = await drumPads.nth(i).getAttribute("id");
    await expect(id).not.toBe(null);
  }
});

test(`Within each .drum-pad, there should be an HTML5 <audio> element which has
  a src attribute pointing to an audio clip, a class name of "clip",
  and an id corresponding to the inner text of its parent 
  .drum-pad (e.g. id="Q", id="W", id="E" etc.).`, async ({ page }) => {
  const drumMachine = page.locator("#drum-machine");
  const drumPads = drumMachine.locator(".drum-pad");

  const expectedKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  for (let i = 0; i < (await drumPads.count()); i++) {
    const id = await drumPads.nth(i).locator(".clip").getAttribute("id");
    await expect(id).toBe(expectedKeys[i]);
  }
});

test(`When I click on a .drum-pad element, the audio clip contained in its child 
  <audio> element should be triggered.`, async ({ page }) => {
  const drumMachine = page.locator("#drum-machine");
  const drumPads = drumMachine.locator(".drum-pad");
  const audio = drumPads.first().locator(".clip");
  const audioId = await audio.getAttribute("id");

  expect(audio.getAttribute("src")).not.toBe(null);

  await drumPads.first().click();

  const isPlaying = await page.evaluate((id) => {
    const audioElement = document.querySelector(`#${id}`) as HTMLAudioElement;
    return audioElement && !audioElement.paused;
  }, audioId);

  expect(isPlaying).toBe(true);
});

test(`When I press the trigger key associated with each .drum-pad,
  the audio clip contained in its child <audio> element should be triggered 
  (e.g. pressing the Q key should trigger the drum pad which contains the string "Q",
  pressing the W key should trigger the drum pad which contains the string "W", etc.).`, async ({
  page,
}) => {
  const drumPads = page.locator(".drum-pad");
  const firstPad = await drumPads.first();

  await page.keyboard.press("Q");

  await expect(firstPad).toHaveClass(/active/);
});

test(`When a .drum-pad is triggered, a string describing the associated audio clip
  is displayed as the inner text of the #display element (each string must be unique).`, async ({ page }) => {
    const drumMachine = page.locator("#drum-machine");
    const drumPads = drumMachine.locator(".drum-pad");
    const audio = drumPads.first().locator(".clip");
  
    await expect(audio.getAttribute("src")).not.toBe(null);
  
    await drumPads.first().click();
  
    await expect(page.locator("#display")).toHaveText("Heater 1");
});
