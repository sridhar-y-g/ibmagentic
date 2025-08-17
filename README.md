# Sampoorna Krishi

A comprehensive, AI-powered FinTech web application for Indian farmers. Integrates IBM watsonx.ai and watsonx Orchestrate to provide financial tools, government scheme access, and intelligent agricultural advisories via a multilingual interface.

## Structure
- `frontend/` — React web app
- `backend/` — Node.js API server
- `.github/` — Project instructions

## Next Steps
- Scaffold frontend and backend
- Integrate IBM Cloud APIs
- Build core features


# Agentic AI and IBM watsonx Usage in Sampoorna Krishi

## Overview
Sampoorna Krishi is a comprehensive, AI-powered FinTech web application designed to empower Indian farmers. The platform integrates agentic AI capabilities using IBM watsonx.ai and IBM watsonx Orchestrate to deliver intelligent, automated solutions for financial, agricultural, and government scheme needs.

## Agentic AI Implementation
- **IBM watsonx.ai**: Used for generative AI advisories, multilingual support, and personalized recommendations. Farmers interact with the system via the `/advisory` API endpoint, which calls IBM watsonx.ai to generate context-aware responses and advisories.
- **IBM watsonx Orchestrate**: Automates complex workflows such as onboarding, document verification, and government scheme applications. The backend exposes the `orchestrateWorkflow` function to trigger and manage these workflows using IBM Cloud APIs.

## Integration Details
- All AI and workflow automation features are implemented in the backend (`ibmIntegration.js`).
- API calls to IBM watsonx.ai and Orchestrate are securely managed using IBM Cloud credentials and endpoints.
- The frontend communicates with the backend to provide farmers with real-time advisories and automated services.

## Benefits
- **Personalized Support**: Farmers receive tailored advisories and recommendations in their preferred language.
- **Automated Processes**: Key workflows are streamlined, reducing manual effort and improving access to financial and government resources.
- **Secure and Scalable**: All integrations use IBM Cloud APIs, ensuring data security and scalability for large user bases.

## Example Usage
- A farmer submits a query for crop advice; the backend calls watsonx.ai and returns a personalized advisory.
- During onboarding, Orchestrate automates document verification and eligibility checks for government schemes.

## Future Enhancements
- Expand AI capabilities for predictive analytics and market insights.
- Integrate additional IBM Cloud services for enhanced automation and support.

---
For technical details, see `backend/ibmIntegration.js` and related API route implementations.
