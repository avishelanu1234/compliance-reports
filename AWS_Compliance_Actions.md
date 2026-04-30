# AWS Compliance Actions

## Overview
This document outlines the actions required to ensure compliance in AWS environments with best practices aligned to the latest standards.

## Actions

1. **Review IAM Policies**
   - Ensure IAM policies follow the principle of least privilege.
   - Conduct regular reviews of IAM roles and permissions.
   - Use roles with temporary credentials where possible.
   - Enable Multi-Factor Authentication (MFA) for privileged accounts.

2. **Enable CloudTrail**
   - Enable CloudTrail in all regions to capture API calls.
   - Enable log file integrity validation for CloudTrail logs.
   - Centralize CloudTrail logs in a secure S3 bucket with restricted access.

3. **Configure S3 Bucket Policies**
   - Restrict public access using S3 Block Public Access settings.
   - Enforce encryption at rest using Server-Side Encryption (SSE).
   - Enforce encryption in transit using TLS.
   - Enable logging and monitoring of bucket access.
   - Apply bucket policies that deny unencrypted uploads.

4. **Enable AWS Config**
   - Use AWS Config to continuously monitor and record AWS resource configurations.

5. **Set Up AWS Security Hub**
   - Enable AWS Security Hub for centralized security and compliance checks.

6. **Enforce Encryption on Storage**
   - Enforce encryption on EBS volumes and RDS instances.

7. **Implement Threat Detection**
   - Enable AWS GuardDuty for continuous threat detection and monitoring.

8. **Maintain EC2 Security**
   - Regularly patch and run vulnerability scans on EC2 instances.

9. **Manage Secrets Securely**
   - Use AWS Secrets Manager or AWS Systems Manager Parameter Store for managing credentials and secrets securely.

## Review and Update
Regularly review and update these actions to align with evolving compliance requirements and AWS best practices.
