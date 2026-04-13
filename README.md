# Integrating Remote Subagents Built by Google Apps Script with Gemini CLI

This repository provides sample scripts and configurations to integrate **Google Apps Script (GAS)** as remote subagents within the **Gemini CLI** using the **Agent-to-Agent (A2A)** protocol.

## Overview

By connecting Gemini CLI to GAS-based A2A servers, you can:
1.  **Automate Google Workspace:** Leverage 160+ skills across Gmail, Drive, Sheets, Docs, and more.
2.  **Overcome Tool Space Interference (TSI):** Delegate massive toolsets to remote subagents to preserve the main agent's reasoning stability.
3.  **Low-Code Deployment:** Deploy powerful AI agents as lightweight Web Apps without managing complex server infrastructure.

For a detailed walkthrough, please refer to the technical article:
**[Integrating Remote Subagents Built by Google Apps Script with Gemini CLI](YOUR_MEDIUM_ARTICLE_LINK_HERE)**

---

## Google Apps Script Projects

You can directly copy the Google Apps Script projects to your Google Drive using the following links:

### 1. Simple Agent: `sample-gas-agent`
A basic implementation featuring currency exchange and weather tools. Use this to test the initial connection.
- **[Copy Script Project](https://script.google.com/home/projects/1vcbr7E7XeJafVGdV6QKEgsr9H0-Vl_zLOQSjgysDCs2olWlrE43HGOne)**

### 2. Advanced Agent: `google-workspace-orchestrator`
A high-performance agent with 160+ skills for comprehensive Google Workspace orchestration.
- **[Copy Script Project](https://script.google.com/home/projects/1xIwskiWAychSp3JN25s7AVbpJf9aRlSvCE8C9szIxPnFHZBeeX3Eo7vT)**

---

## Setup Instructions

### 1. Deploy the Google Apps Script
1. Open the copied script project.
2. Click **Deploy** > **New deployment**.
3. Select **Web App**.
4. Set **Execute as** to "Me" and **Who has access** to "Anyone".
5. Copy the **Web App URL**.
6. In `code.gs` or `agent.gs`, update the `url` (or `webAppsUrl`) with your deployment URL and redeploy.

### 2. Configure Gemini CLI
Since GAS Web Apps require specific authorization for dynamic metadata retrieval, Gemini CLI integrates them by defining the **Agent Card** locally.

1. Create a directory: `.gemini/agents/` in your working directory.
2. Run the `getAgentCard()` function in the Google Apps Script console to get the JSON.
3. Create a Markdown file (e.g., `google-workspace-orchestrator.md`) in the folder and paste the following structure:

```yaml
---
kind: remote
name: google-workspace-orchestrator
agent_card_json: |
  {
    "name": "Google Workspace Orchestrator",
    ... (Paste your JSON here)
  }
---
```

### 3. Usage
Launch the Gemini CLI. The application will detect the new subagent.

```bash
# List available agents
/agents

# Use the specific subagent
@google-workspace-orchestrator Create a roadmap for my project in a new Spreadsheet.
```

---

<a name="license"></a>

## Licence

[MIT](LICENCE)

<a name="author"></a>

## Author

[Tanaike](https://tanaikech.github.io/about/)

[TOP](#top)

---

## Update History

- v1.0.0 (April 13, 2026)
  - Initial release.

