# PCI-DSS Compliance Checklist

This checklist outlines essential PCI-DSS requirements to help ensure compliance and identify any gaps in cardholder data security.

## Build and Maintain a Secure Network and Systems
- [ ] Install and maintain a firewall configuration to protect cardholder data, with documented and regularly reviewed rules tailored to business needs.
- [ ] Do not use vendor-supplied defaults for system passwords and other security parameters; enforce strong password complexity and rotation policies.

## Protect Cardholder Data
- [ ] Protect stored cardholder data through encryption or other strong cryptography that meets PCI-DSS standards.
- [ ] Encrypt transmission of cardholder data across open, public networks using strong protocols.
- [ ] Implement secure key management practices and ensure secure deletion of cardholder data when no longer needed.

## Maintain a Vulnerability Management Program
- [ ] Use and regularly update PCI-approved anti-virus software, with documented scans.
- [ ] Develop and maintain secure systems and applications, including regular application security testing such as code reviews and penetration testing.

## Implement Strong Access Control Measures
- [ ] Restrict access to cardholder data by business need-to-know, conducting regular access reviews.
- [ ] Assign a unique ID to each person with computer access.
- [ ] Implement multi-factor authentication (MFA) for access to cardholder data and systems.
- [ ] Restrict physical access to cardholder data, including visitor logs and secure areas.

## Regularly Monitor and Test Networks
- [ ] Track and monitor all access to network resources and cardholder data.
- [ ] Regularly test security systems and processes, including intrusion detection/prevention systems (IDS/IPS).
- [ ] Conduct frequent penetration testing and vulnerability scans as per PCI-DSS requirements.

## Maintain an Information Security Policy
- [ ] Maintain a policy that addresses information security for all personnel.
- [ ] Include incident response and breach notification procedures compliant with PCI-DSS.
- [ ] Review and update policies at least annually.

## Additional Recommendations
- [ ] Conduct regular PCI-DSS self-assessments.
- [ ] Document all controls, processes, and remediation activities.
- [ ] Provide continuous training and awareness programs for employees, including phishing awareness.
- [ ] Manage and ensure compliance of third-party service providers.

---

This checklist is a starting point and should be tailored to your specific environment and PCI-DSS scope.
