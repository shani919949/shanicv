function updatePreview() {
    let name = document.getElementById('name').value || 'Your Name';
    let title = document.getElementById('title').value || 'Your Title';
    let email = document.getElementById('email').value || 'email@example.com';
    let phone = document.getElementById('phone').value || '123456789';
    let summary = document.getElementById('summary').value || 'Summary here';
    let experience = document.getElementById('experience').value || 'Experience here';
    let education = document.getElementById('education').value || 'Education here';
    let skills = document.getElementById('skills').value || 'Skills here';
    document.getElementById('preview').innerHTML = `
        <h2>${name}</h2>
        <p><strong>${title}</strong></p>
        <p>${email} | ${phone}</p>
        <h3>Summary</h3><p>${summary.replace(/\n/g,'<br>')}</p>
        <h3>Experience</h3><p>${experience.replace(/\n/g,'<br>')}</p>
        <h3>Education</h3><p>${education.replace(/\n/g,'<br>')}</p>
        <h3>Skills</h3><p>${skills.replace(/\n/g,'<br>')}</p>
    `;
}
function downloadPDF() {
    let element = document.getElementById('preview');
    html2pdf().from(element).save();
}
window.onload = updatePreview;  
