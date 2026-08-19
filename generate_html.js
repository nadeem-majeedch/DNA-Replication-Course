// Simple markdown to HTML converter for PDF generation
const fs = require('fs');
const path = require('path');

// Simple markdown converter (handles basic formatting)
function mdToHtml(md) {
  let html = md;
  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  // Code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  // Inline code
  html = html.replace(/`(.+?)`/g, '<code>$1</code>');
  // Lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>');
  // Tables
  html = html.replace(/\|(.+)\|/g, (match) => {
    const cells = match.split('|').filter(c => c.trim());
    return '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
  });
  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr>');
  // Links
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  // Line breaks
  html = html.replace(/\n/g, '<br>');
  return html;
}

// Create HTML wrapper
function createHtmlPage(title, content) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${title}</title>
<style>
  body { font-family: Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px; line-height: 1.6; }
  h1 { color: #1B4F72; border-bottom: 3px solid #2E86C1; padding-bottom: 10px; }
  h2 { color: #2E86C1; margin-top: 30px; }
  h3 { color: #16A085; }
  table { border-collapse: collapse; width: 100%; margin: 15px 0; }
  th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
  th { background-color: #1B4F72; color: white; }
  tr:nth-child(even) { background-color: #f2f2f2; }
  pre { background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; }
  code { background-color: #f4f4f4; padding: 2px 5px; border-radius: 3px; }
  blockquote { border-left: 4px solid #2E86C1; margin: 0; padding: 10px 20px; background-color: #f9f9f9; }
  @media print { body { font-size: 11pt; } h1 { page-break-before: always; } }
</style>
</head>
<body>
${content}
</body>
</html>`;
}

// Process markdown files
const mdFiles = [
  'MARKDOWN/01-Introduction-to-DNA-Replication.md',
  'MARKDOWN/02-Core-Concepts.md',
  'MARKDOWN/03-Prokaryotic-DNA-Replication.md',
  'MARKDOWN/04-Eukaryotic-DNA-Replication.md',
  'MARKDOWN/05-Replication-Fidelity-and-Repair.md',
  'MARKDOWN/06-Telomeres-and-Telomerase.md',
  'MARKDOWN/07-Replication-Stress-and-Checkpoints.md',
  'MARKDOWN/08-Prokaryote-vs-Eukaryote.md',
  'MARKDOWN/09-Experimental-Methods.md',
  'MARKDOWN/10-Data-Analysis-and-Interpretation.md',
  'MARKDOWN/11-Clinical-and-Biotechnology-Applications.md',
  'MARKDOWN/12-Advanced-Topics.md'
];

// Create combined HTML for full tutorial
let combinedContent = '<h1>DNA Replication in Prokaryotes and Eukaryotes</h1>\n<h2>Complete Teaching Package</h2>\n<hr>\n';

mdFiles.forEach(file => {
  try {
    const md = fs.readFileSync(path.join(__dirname, file), 'utf8');
    combinedContent += mdToHtml(md) + '\n<hr>\n';
    console.log(`Processed: ${file}`);
  } catch (e) {
    console.log(`Error reading ${file}: ${e.message}`);
  }
});

const fullHtml = createHtmlPage('DNA Replication — Complete Tutorial', combinedContent);
fs.writeFileSync(path.join(__dirname, 'PDF', 'DNA_Replication_Complete_Tutorial.html'), fullHtml);
console.log('Generated: PDF/DNA_Replication_Complete_Tutorial.html');

// Create cheat sheet HTML
try {
  const cheatSheet = fs.readFileSync(path.join(__dirname, 'CHEAT-SHEET', 'DNA-Replication-Cheat-Sheet.md'), 'utf8');
  const cheatHtml = createHtmlPage('DNA Replication — Cheat Sheet', mdToHtml(cheatSheet));
  fs.writeFileSync(path.join(__dirname, 'PDF', 'DNA_Replication_Cheat_Sheet.html'), cheatHtml);
  console.log('Generated: PDF/DNA_Replication_Cheat_Sheet.html');
} catch (e) {
  console.log('Error generating cheat sheet:', e.message);
}

// Create FAQ HTML
try {
  const faq = fs.readFileSync(path.join(__dirname, 'FAQ', 'DNA-Replication-FAQs.md'), 'utf8');
  const faqHtml = createHtmlPage('DNA Replication — FAQs', mdToHtml(faq));
  fs.writeFileSync(path.join(__dirname, 'PDF', 'DNA_Replication_FAQs.html'), faqHtml);
  console.log('Generated: PDF/DNA_Replication_FAQs.html');
} catch (e) {
  console.log('Error generating FAQ:', e.message);
}

// Create assessment HTML
try {
  let assessmentContent = '';
  const assessmentFiles = ['MCQs.md', 'Short-Questions.md', 'Long-Questions.md', 'Viva-Questions.md', 'Case-Studies.md'];
  assessmentFiles.forEach(f => {
    try {
      const content = fs.readFileSync(path.join(__dirname, 'ASSESSMENT', f), 'utf8');
      assessmentContent += mdToHtml(content) + '\n<hr>\n';
    } catch (e) {}
  });
  const assessHtml = createHtmlPage('DNA Replication — Assessment Package', assessmentContent);
  fs.writeFileSync(path.join(__dirname, 'PDF', 'DNA_Replication_Assessment.html'), assessHtml);
  console.log('Generated: PDF/DNA_Replication_Assessment.html');
} catch (e) {
  console.log('Error generating assessment:', e.message);
}

// Create lab workbook HTML
try {
  const workbook = fs.readFileSync(path.join(__dirname, 'WORKBOOK', 'DNA-Replication-Lab-Workbook.md'), 'utf8');
  const workbookHtml = createHtmlPage('DNA Replication — Lab Workbook', mdToHtml(workbook));
  fs.writeFileSync(path.join(__dirname, 'PDF', 'DNA_Replication_Lab_Workbook.html'), workbookHtml);
  console.log('Generated: PDF/DNA_Replication_Lab_Workbook.html');
} catch (e) {
  console.log('Error generating workbook:', e.message);
}

console.log('\nAll HTML files generated in PDF/ directory.');
console.log('To create PDFs: Open each .html file in a browser and use Print > Save as PDF.');
