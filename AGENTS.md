<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `bunx nx` (i.e.
  `bunx nx run`, `bunx nx run-many`, `bunx nx affected`) instead of using the underlying tooling directly
- You have access to the Nx MCP server and its tools, use them to help the user
- When answering questions about the repository, use the `nx_workspace` tool first to gain an understanding of the
  workspace architecture where applicable.
- When working in individual projects, use the `nx_project_details` mcp tool to analyze and understand the specific
  project structure and dependencies
- For questions around nx configuration, best practices or if you're unsure, use the `nx_docs` tool to get relevant,
  up-to-date docs. Always use this instead of assuming things about nx configuration
- If the user needs help with an Nx configuration or project graph error, use the `nx_workspace` tool to get any errors

<!-- nx configuration end-->

# Existing apps

## apps/api:

Laravel project, using sanctum, session-based authentication.

## apps/web:

React project with tanstack router (for anything related to tanstack libraries check the `doc`, `search-doc`,
`list-libraries` tools of the `tanstack` mcp server), i18next-react for i18n, this also strictly follows Feature-sliced
design
