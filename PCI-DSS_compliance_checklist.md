# PCI-DSS Compliance Checklist (Updated for Version 4.0)

This checklist outlines essential PCI-DSS version 4.0 requirements to help ensure compliance and identify any gaps in cardholder data security.

## Build and Maintain a Secure Network and Systems
- [ ] Install and maintain a firewall configuration to protect cardholder data, with documented and regularly reviewed rules tailored to business needs.
- [ ] Do not use vendor-supplied defaults for system passwords and other security parameters; enforce strong password complexity and rotation policies.
- [ ] Implement network segmentation and isolate cardholder data environment (CDE) to minimize scope.
- [ ] Maintain an inventory of system components in scope for PCI-DSS.
- [ ] Test firewall and router rule sets at least every six months.
- [ ] Verify that wireless access points are configured securely and monitored.

## Protect Cardholder Data
- [ ] Protect stored cardholder data through strong encryption or other approved cryptographic methods.
- [ ] Encrypt transmission of cardholder data across open, public networks using strong protocols (e.g., TLS 1.2 or higher).
- [ ] Implement secure key management, including key rotation and dual control.
- [ ] Ensure secure deletion and disposal of cardholder data and cryptographic keys when no longer needed.
- [ ] Use cryptographic protocols with strong algorithms and key lengths approved by PCI SSC.
- [ ] Validate key management processes including key generation, distribution, storage, and destruction.
- [ ] Conduct quarterly reviews of stored cardholder data to identify and securely remove unnecessary data.

## Maintain a Vulnerability Management Program
- [ ] Use and regularly update anti-virus and anti-malware software.
- [ ] Develop and maintain secure systems and applications with secure coding practices.
- [ ] Conduct regular application security testing, including static and dynamic code analysis and penetration testing.
- [ ] Timely apply security patches to all systems in scope.
- [ ] Perform internal and external vulnerability scans at least quarterly and after any significant change.
- [ ] Ensure software development lifecycle includes secure coding standards and code reviews.
- [ ] Conduct penetration testing on segmentation controls annually or after any significant change.

## Implement Strong Access Control Measures
- [ ] Restrict access to cardholder data and systems based on business need-to-know, with documented access policies.
- [ ] Assign unique IDs to all users with system access.
- [ ] Implement multi-factor authentication (MFA) for all access to the CDE and administrative access.
- [ ] Enforce least privilege principles and regularly review access rights.
- [ ] Restrict and monitor physical access to cardholder data and systems.
- [ ] Log all access to cardholder data and systems with sufficient detail to reconstruct events.
- [ ] Review access logs and user accounts monthly and upon role changes or terminations.
- [ ] Enforce multi-factor authentication for all non-console administrative access.

## Regularly Monitor and Test Networks
- [ ] Track and log all access to network resources and cardholder data.
- [ ] Monitor logs and security alerts continuously for suspicious activity.
- [ ] Regularly test security systems and processes, including IDS/IPS and firewall rule effectiveness.
- [ ] Conduct penetration testing and vulnerability scanning as required, addressing findings promptly.
- [ ] Implement automated alerting for suspicious or unauthorized activity.
- [ ] Validate the effectiveness of intrusion detection/prevention systems regularly.
- [ ] Test incident response plans through tabletop exercises annually.

## Maintain an Information Security Policy
- [ ] Maintain a comprehensive information security policy addressing all PCI-DSS requirements.
- [ ] Include incident response, data breach notification, and communication plans.
- [ ] Review and update policies and procedures at least annually or upon significant changes.
- [ ] Ensure policies are reviewed and approved by senior management annually.
- [ ] Include data retention and disposal policies aligned with PCI-DSS requirements.
- [ ] Provide role-based security training and awareness at least annually.

## Additional Recommendations
- [ ] Conduct regular PCI-DSS self-assessments and external audits.
- [ ] Document all controls, processes, and remediation activities thoroughly.
- [ ] Provide continuous security awareness and training programs for employees.
- [ ] Manage third-party service providers with due diligence and contractual requirements.
- [ ] Implement a risk-based approach for continuous improvement and exception management.

---

This updated checklist aligns with PCI-DSS version 4.0 and should be tailored to your specific environment and PCI-DSS scope.
