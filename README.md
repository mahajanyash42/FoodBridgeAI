# FoodBridge AI  
## Autonomous Food Rescue and Shelter Matching System  

FoodBridge AI is an end-to-end agentic AI system designed to address the coordination gap between food waste and food scarcity.  
The system does not simply recommend actions — it executes the full lifecycle of food redistribution in real-world conditions.

---

## Problem Statement

Large volumes of surplus food are discarded daily, while shelters and food banks face persistent shortages.  
The issue is not lack of supply, but lack of efficient coordination.

Existing approaches are:
- Manual and slow (calls, spreadsheets)
- Operationally unreliable
- Difficult to scale across regions
- Lacking outcome visibility and tracking

---

## Solution Overview

Replate AI automates the complete lifecycle of food rescue:

Donor Input → Data Structuring → Matching → Human Approval → Notification → Completion Tracking

This creates a closed-loop system where decisions are not only generated but also executed and verified.

---

## System Architecture

Replate AI is built as a modular multi-agent system. Each agent is responsible for a specific function within the pipeline.

### Intake Agent
Transforms raw donor input into structured data fields such as:
- Food type
- Quantity
- Pickup deadline
- Location
- Handling constraints

### Validation Agent
Applies deterministic checks to ensure data quality and feasibility:
- Valid quantity and format
- Time constraints
- Required fields

### Matching Agent (Core Decision Engine)
Performs intelligent selection using dynamic operational data:
- Filters infeasible shelters
- Scores candidates based on:
  - Urgency
  - Capacity
  - Compatibility
  - Distance
- Selects optimal shelter and fallback options using AI reasoning

This ensures decisions are both intelligent and operationally feasible.

### Human-in-the-loop Agent
Provides a safety layer via Slack-based approval:
- Approve recommended shelter
- Override selection
- Reject or escalate cases

### Communication Agent
Triggers downstream execution:
- Sends notifications to shelters and donors
- Initiates coordination process

### Impact Agent
Closes the loop:
- Tracks completion of transfers
- Logs performance metrics
- Enables outcome measurement

---

## Technology Stack

- n8n — workflow orchestration
- OpenAI (GPT-4o-mini) — reasoning layer
- Google Sheets — structured data storage
- Slack — approval interface
- Gmail API — email communication
- Vite + React + Tailwind — frontend UI

---

## How to Use

### 1. Setup Requirements
- n8n instance (local or cloud)
- OpenAI API key
- Google Sheets for data storage
- Slack App for approval workflow
- Optional: Twilio for SMS notifications

---

### 2. Import Workflows

Navigate to the `workflows/` directory and import the JSON files into n8n:

- 01-intake-and-structuring.json  
- 02-human-approval.json  
- 03-notifications.json  
- 04-completion-tracking.json  

---

### 3. Configure Integrations

Within n8n:
- Set OpenAI API credentials
- Connect Google Sheets
- Configure Slack integration
- Update webhook endpoints

---

### 4. Run the System

Trigger the system through:
- Frontend UI form
- Direct webhook request

Example input:
- Food type: Prepared meals
- Quantity: 40 meals
- Pickup deadline: urgent

---

### 5. Execution Flow

The system will:
- Structure and validate input
- Generate a ranked shortlist of shelters
- Send approval request to Slack
- Notify stakeholders upon approval
- Track completion and log outcomes

---
## Workflow Files and Security Note

The n8n workflow JSON files are not included in this repository.

These workflows contain environment-specific configurations and integration references (such as API credentials, webhook endpoints, and platform-specific settings) that are not safe to expose in a public repository.

To maintain security and prevent accidental leakage of sensitive tokens or configuration details, the workflow exports have been intentionally excluded.

For evaluation purposes:
- The complete system behavior is demonstrated in the demo video
- Detailed workflow logic is documented in the reproducibility report
- The architecture and execution flow are fully explained in this repository

If required, sanitized or redacted versions of the workflows can be shared separately.

## Performance and Cost

- Average response time: < 90 seconds  
- Cost per rescue: approximately $0.04  
- Fully automated pipeline with human safety checkpoint  

---

## Business Value

### For Donors
- Reduced food disposal costs
- Improved sustainability reporting
- ESG compliance support

### For Shelters
- Faster and more reliable food access
- Better resource allocation

### For System Operators
- Reduced manual coordination
- Scalable operational model
- Improved efficiency and response time

---

## Risks and Mitigation

| Risk | Mitigation |
|------|-----------|
| Incorrect matching | Human approval layer |
| Shelter rejection | Fallback selection logic |
| Data inconsistency | Validation agent |
| AI reasoning errors | Audit logs and traceability |

---

## System Dependencies

### Upstream
- Donor input quality
- Shelter dataset accuracy

### Downstream
- Shelter response time
- Pickup coordination
- Completion confirmation

---
## Project Structure

```
replate-ai/
├── public/
├── src/
├── workflows/
├── data/
├── docs/
├── README.md
├── package.json
└── vite.config.ts
```
---

## Reproducibility

The system is fully reproducible using:
- Provided workflow JSON files
- Synthetic or sample datasets
- Standard n8n setup

Each workflow is modular and can be tested independently.

---

## Future Enhancements

- Logistics and route optimization
- Real-time tracking and monitoring
- Learning-based matching improvements
- Multi-city deployment architecture

---

## Conclusion

FoodBridge AI is not a dashboard or recommendation engine.  
It is a complete agentic system that understands, decides, acts, and tracks outcomes.

The system is designed for real-world deployment under operational constraints, with a focus on scalability, reliability, and measurable impact.

---

## Author

Yash Mahajan  
MS in Information Systems (AI)  
University of Maryland, College Park  
Agentic AI Competition Project
