# agile-github-starter

A GitHub template for Agile teams, automating CI/CD pipelines and simplifying multi-environment deployments through PR-driven workflows.

Designed to integrate testing, environment-specific deployments, and team collaboration via **Pull Request comments**.

## 🚀 Key Features

- **Environment-Specific CI/CD Pipelines**  
  Isolated workflows for development, staging, and production.

- **Automated Testing**  
  Runs tests on each PR before offering deployment steps.

- **Comment-Driven Workflow Triggers**  
  Trigger CI/CD flows by commenting on the PR – no manual dispatches or UI clicks.

- **Progressive Promotion Model**  
  Code is promoted through `development → stage → main` via defined steps.

## 🧰 CI/CD Workflow Summary

Each stage of the pipeline is triggered by **PR comments** in the following sequence:

### 1. `merge & build and deploy for development`
- Merges the feature branch into `development`
- Builds and deploys to the **development environment**
- Workflow: `build-and-deploy-dev.yml`

### 2. `merge & build for staging`
- Merges `development` into `stage`
- Builds the code for the **staging environment**
- Workflow: `build-stage.yml`

### 3. `deploy for staging`
- Deploys from `stage` to the **staging environment**
- No merge occurs
- Workflow: `deploy-stage.yml`

### 4. `deploy for production`
- Deploys the already-reviewed PR branch to **production**
- No merge occurs — assumes PR is targeting `main`
- Workflow: `deploy-prod.yml`

> ⚠️ Always wait for each workflow to complete before triggering the next.

## 🔄 Pull Request Flow Example

1. Create a PR targeting `main`
2. CI runs tests and comments this guide
3. You, the developer or reviewer, comment each step sequentially
4. CI/CD workflows are triggered, and environments are progressively updated

## 🧪 Developer Commands (PR Comments)

- merge & build and deploy for development
- merge & build for staging
- deploy for staging
- deploy for production

## 📂 Workflow Files

| Workflow Name        | File Name                                    | Trigger Source           |
| -------------------- | -------------------------------------------- | ------------------------ |
| Test & Comment Guide | `.github/workflows/test.yml`                 | `pull_request: opened`   |
| PR Comment Handler   | `.github/workflows/handle-comment.yml`       | `issue_comment: created` |
| Dev CI/CD            | `.github/workflows/build-and-deploy-dev.yml` | PR Comment               |
| Staging Build        | `.github/workflows/build-stage.yml`          | PR Comment               |
| Staging Deploy       | `.github/workflows/deploy-stage.yml`         | PR Comment               |
| Production Deploy    | `.github/workflows/deploy-prod.yml`          | PR Comment               |

## 📌 Requirements
* Node.js 20+
* GitHub Actions enabled on your repository
* Protected branches: `main`, `stage`, `development` recommended

## 🙋‍♀️ Why Use This?

* ✅ Simplifies multi-env deployment 
* ✅ Keeps CI/CD steps visible and auditable
* ✅ Enables non-admins to trigger deployments safely
* ✅ Aligns development flow with Agile iteration cycles

## 🧭 Future Improvements

* [ ] Support for rollback triggers
* [ ] Slack/Discord notifications
* [ ] Built-in status tracking on PRs

## 📝 License

MIT License