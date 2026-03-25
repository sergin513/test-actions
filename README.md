# test-actions

## Email notifications on test failure

When a push or pull request to `main` causes unit tests (Jest) or E2E tests (Playwright) to fail, an email is automatically sent to the user who triggered the workflow.

### Required repository secrets

Configure the following secrets in **Settings → Secrets and variables → Actions**:

| Secret | Description |
|---|---|
| `MAIL_SERVER` | SMTP server hostname (e.g. `smtp.gmail.com`) |
| `MAIL_PORT` | SMTP port — use `465` for implicit SSL/TLS (recommended) |
| `MAIL_USERNAME` | SMTP login / sender email address |
| `MAIL_PASSWORD` | SMTP password or app-specific password |

The workflow uses `secure: true`, which enables implicit SSL/TLS — port `465` is the standard choice for this mode. If your provider only supports STARTTLS (port `587`), set `MAIL_PORT` to `587` and change `secure` to `false` in the workflow.

The notification email includes the event type, branch, commit SHA, direct link to the failed workflow run, and the status of each test suite.