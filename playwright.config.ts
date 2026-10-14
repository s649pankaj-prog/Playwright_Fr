import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// ENV=qa (default) loads .env.qa
dotenv.config({ path: `.env.${process.env.ENV ?? 'qa'}` });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
use: {
  baseURL: process.env.BASE_URL,
  testIdAttribute: 'data-test',
  viewport: { width: 1920, height: 1080 },
  actionTimeout: 10_000,
  launchOptions: { slowMo: Number(process.env.SLOW_MO ?? 0) },
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
},
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});