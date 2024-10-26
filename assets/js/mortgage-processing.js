
// Mortgage processing logic
document.getElementById('mortgageApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Check for compliance checkboxes
    const complianceCheck = document.getElementById('complianceCheck').checked;
    const slaCheck = document.getElementById('slaCheck').checked;
  
    if (!complianceCheck || !slaCheck) {
        alert('Please agree to the compliance and SLA checks before proceeding.');
        return;
    }
  
    // Validate PDF files
    const financialReport = document.getElementById('financialReport').files[0];
    const businessRegistration = document.getElementById('businessRegistration').files[0];
  
    if (financialReport && financialReport.type !== "application/pdf") {
        alert('Please upload a valid PDF file for the financial report.');
        return;
    }
  
    if (businessRegistration && businessRegistration.type !== "application/pdf") {
        alert('Please upload a valid PDF file for the business registration.');
        return;
    }
  
    // Simulate form submission and show response
    document.getElementById('formResponse').style.display = 'block';
    document.getElementById('formResponse').textContent = 'Your mortgage application has been successfully submitted!';
  });
