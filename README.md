## Running the tests

| Command | What it does |
| --- | --- |
| `npm test` | Runs all 4 tests in 3 browsers (12 runs) |
| `npx playwright test --project=chromium --headed` | Runs one browser with a visible window |
| `npm run test:ui` | Opens UI mode, where you can step through each action |
| `npm run report` | Opens the HTML report |

> **Tip:** Spend time in UI mode. It is the biggest difference from Selenide.

### Switching environments

Set the `ENV` variable to load a different `.env.<name>` file (default is `qa`).

```bash
# macOS / Linux
ENV=staging npm test
```

```powershell
# PowerShell
$env:ENV="staging"; npm test
```