// Simple demo logic (no backend)
document.getElementById('year').textContent = new Date().getFullYear();

// Fake dashboard numbers
document.getElementById('score').textContent = '—'; // plug real score later
document.getElementById('removed').textContent = 0;
document.getElementById('open').textContent = 0;
document.getElementById('alerts').textContent = 0;

// Generate a dispute letter (plain text preview)
document.getElementById('disputeForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const item = f.get('item'), reason = f.get('reason'), details = f.get('details')||'';
  const letter = `
Joseph Stayton
8500 Harwood Rd #6718
North Richland Hills, TX 76180

Date: ${new Date().toLocaleDateString()}

To Whom It May Concern:

I am disputing the accuracy of the following item on my credit report:

Item: ${item}
Reason: ${reason}

Details: ${details}

Under FCRA §611, please investigate and remove or correct any information that is inaccurate or unverifiable. Please provide your results in writing.

Sincerely,
Joseph Stayton
  `.trim();
  document.getElementById('disputeResult').textContent = letter;
});

// Contact form (demo only)
document.getElementById('contactForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  document.getElementById('contactResult').textContent = 'Thanks! We’ll contact you shortly.';
});
