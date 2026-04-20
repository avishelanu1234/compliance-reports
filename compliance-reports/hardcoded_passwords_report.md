# Compliance Report on Hardcoded Passwords

## Findings

1. **File:** `scanners/sast_runner.py`
   - **Issue:** Potential hardcoded password found in SQL concatenation patterns.
   - **Details:** The regex pattern used may allow for vulnerabilities due to improper concatenation techniques.

2. **File:** `tests/test_sast_runner.py`
   - **Issue:** Tests for SQL concatenation detection.
   - **Details:** The tests validate the detection of concatenated SQL strings which may be prone to SQL injection if used improperly.

## Recommendations
- Review SQL concatenation practices to avoid vulnerabilities.
- Consider using parameterized queries instead of string concatenation for SQL commands.