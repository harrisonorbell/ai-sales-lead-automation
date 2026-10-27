# AI Sales Lead Automation

An AI-powered sales lead management system that automatically receives, validates, analyses, prioritises and stores customer enquiries.

Built using **n8n, Claude AI, JavaScript, HTML and CSS**, this project demonstrates how AI and workflow automation can help businesses manage incoming sales enquiries more efficiently.

## Overview

Businesses often receive customer enquiries through website forms and must manually review each submission, determine its importance and decide how quickly to respond.

This project automates that process.

When a customer submits an enquiry through the website, the system:

1. Receives the enquiry through an n8n webhook.
2. Validates the submitted customer information.
3. Checks whether the customer already exists in the database.
4. Stores new enquiries in an n8n Data Table.
5. Uses Claude AI to analyse and classify the enquiry.
6. Updates the database with the AI-generated analysis.
7. Sends email notifications for high- and medium-priority enquiries.
8. Tracks notification status and handles selected workflow errors.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML | Customer enquiry form |
| CSS | Responsive website styling |
| JavaScript | Form handling and HTTP requests |
| n8n | Workflow orchestration and automation |
| Claude AI (Anthropic) | Enquiry analysis and prioritisation |
| n8n Data Tables | Customer and analysis storage |
| SMTP | Automated email notifications |
| JSON | Data exchange and workflow configuration |

## Key Features

### Customer Enquiry Website

A responsive web form collects:

- Customer name
- Email address
- Requested service
- Estimated budget
- Project description

JavaScript submits the information to an n8n webhook using an HTTP POST request.

The website displays loading, success and error messages to provide feedback to customers.

### AI-Powered Lead Analysis

Claude AI analyses each enquiry and generates:

- **Priority:** High, medium or low
- **Category:** Type of service requested
- **Summary:** Concise description of the enquiry
- **Recommended action:** Suggested next step for the sales team

The AI response is parsed and validated before being saved to the database.

### Automated Priority Routing

| Priority | Automated Action |
|---|---|
| High | Send a high-priority email notification |
| Medium | Send a medium-priority email notification |
| Low | Save the analysis without sending an email |

### Database Management

Customer enquiries and AI-generated analyses are stored in an n8n Data Table.

Each record contains customer details, AI-generated insights, processing status and notification status.

### Error Handling

The workflow includes:

- Customer information validation
- Duplicate-email detection
- Database operation retries
- AI API failure handling
- AI response validation
- Email notification retries
- Error notification emails

## How the Automation Works

The system operates through five main stages.

### 1. Customer Submission

A customer completes the website enquiry form.

JavaScript collects the information and sends it to the n8n webhook using an HTTP POST request containing JSON data.

### 2. Validation and Storage

n8n validates the submitted information and checks whether the customer's email address already exists in the database.

New enquiries are stored in an n8n Data Table.

### 3. AI Analysis

The enquiry is sent to Claude AI through an API integration.

Claude analyses the customer's requirements, estimated budget and project description to determine the enquiry's priority, category, summary and recommended action.

### 4. Automated Decision-Making

The workflow evaluates the AI-generated priority.

High- and medium-priority enquiries trigger automated email notifications containing the customer details and AI analysis.

Low-priority enquiries are recorded without sending an email notification.

### 5. Status Tracking

The database is updated with the AI analysis and notification status.

The workflow also includes error-handling branches to identify and report selected processing failures.

## Running the Project Locally

This repository contains a functional portfolio prototype rather than a publicly hosted production service.

To run the project locally:

1. Install and start n8n.
2. Import the workflow from `workflow/ai-sales-lead-workflow.json`.
3. Configure your own Anthropic API and SMTP credentials.
4. Create an n8n Data Table named `sales_leads`.
5. Add the required database fields:
   - `name`
   - `email`
   - `service`
   - `budget`
   - `message`
   - `status`
   - `priority`
   - `category`
   - `summary`
   - `recommended_action`
   - `notification_status`
6. Update the imported Data Table nodes to reference your database.
7. Configure the sender and recipient email addresses.
8. Start a test execution of the workflow.
9. Open `frontend/index.html` in a browser.
10. Submit a test enquiry.

**Note:** The frontend currently uses a local n8n test webhook. Update the webhook URL in `script.js` if your n8n instance uses a different address.

## Testing

The system was tested using simulated customer enquiries representing different business requirements, budgets and project timelines.

Testing covered:

- High-priority enquiries
- Medium-priority enquiries
- Low-priority enquiries
- Duplicate-customer detection
- Invalid customer information
- AI response validation
- Selected error-handling paths

Successful end-to-end tests confirmed that customer submissions could trigger the workflow, generate AI analysis, update the database and send the appropriate email notifications.

## Current Limitations

This project is a local prototype.

Before production deployment, further development would be required for:

- Public hosting and HTTPS
- Authentication, abuse prevention and rate limiting
- Secure CORS configuration
- Comprehensive error recovery and monitoring
- Production webhook configuration
- Improved customer-facing responses

## Future Improvements

Potential extensions include:

- CRM integrations
- Customer confirmation emails
- Lead management dashboards
- Automated follow-up scheduling
- Integration with additional communication platforms
- Cloud deployment

## Project Status

**Completed — Functional Portfolio Prototype**

The frontend, n8n workflow, Claude AI integration, database storage and automated email notifications have been implemented and successfully tested.

This project demonstrates practical experience with **API integrations, AI-powered decision-making, workflow automation, database operations, HTTP requests and automated business communications**.
