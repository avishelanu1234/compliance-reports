# Fraud Detection Checklist for Refund and Chargeback Policies

## 1. Refund Eligibility Verification
- Verify refund request is within 14-day window from purchase.
- Check user has used less than 20% of Pro features.
- Confirm user has not received previous refunds.
- Require valid reason provided for refund request.

## 2. Usage Monitoring
- Track feature usage percentage per user.
- Flag users exceeding 20% usage for refund ineligibility.

## 3. Refund Request Tracking
- Limit refund allowance to one per user account.
- Monitor number of refund requests per user within 12 months.
- Flag or restrict users with more than 2 refund requests in 12 months.

## 4. Fraud and Abuse Detection
- Deny refunds for suspected fraudulent transactions.
- Detect account misrepresentation or deception attempts.
- Deny refunds if payment disputes are already filed with bank.
- Deny refunds if user violated Terms of Service.

## 5. Special Case Handling
- Automatically approve refunds for billing errors (e.g., double charges).
- Provide exceptions for technical issues or service unavailability.

## 6. Refund Processing Controls
- Issue refunds only to original payment method.
- Exclude transaction fees, taxes, and currency conversion fees from refunds.

## 7. Communication and Compliance
- Provide clear denial reasons to users.
- Allow users to appeal or provide additional evidence on denial.
- Comply with consumer protection laws and regulations.

Ensure these strategies are implemented for effective fraud detection and prevention related to refunds and chargebacks.