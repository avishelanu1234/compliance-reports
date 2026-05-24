# Actionable Insights for Chargeback-Prone Signals and Fraud Detection Rules

## Chargeback-Prone Signals Insights

- Monitor refund requests outside the 14-day purchase window as potential abuse.
- Track feature usage prior to refund requests; users exceeding 20% usage may exploit policies.
- Flag users with more than 2 refund requests within 12 months as possible fraud cases.
- Deny refunds for suspected fraudulent transactions or account misrepresentation.
- Correlate refund requests with bank payment disputes to identify chargeback fraud.
- Enforce refund denial for Terms of Service violations.
- Auto-approve refunds only for verified billing errors, allowing exceptions for technical issues.
- Issue refunds only to the original payment method, excluding transaction fees.
- Provide clear denial reasons and appeal options compliant with consumer protection laws.

## Proposed Fraud Detection Rules

### Velocity Limits
- Implement velocity checks to detect rapid multiple transactions by a user/account within short time frames.
- Example: More than 5 transactions in 1 minute triggers alert.

### Suspicious Patterns Detection
- Flag emails from disposable, test, or temporary domains using regex patterns.
- Detect API keys, secrets, and tokens in transaction metadata or inputs using regex patterns.
- Identify credit card numbers using regex for major card providers.
- Track consecutive failed payment attempts; alert on high failure rates.
- Flag transactions from high-risk IPs or known proxies/VPNs.
- Detect mismatched billing and shipping or user data inconsistencies.

## Integration and Implementation Recommendations

- Regularly update detection rules to adapt to emerging fraud patterns.
- Integrate rules into real-time transaction monitoring and alerting systems.
- Combine pattern detection with behavioral analytics and external fraud intelligence.
- Use CI/CD pipelines for continuous rule and model updates.
- Maintain logs and audit trails for all flagged transactions for review and compliance.

This document consolidates key actionable insights for enhancing chargeback fraud detection and prevention frameworks.