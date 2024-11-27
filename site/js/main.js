// Utility function to fetch and parse YAML
async function loadYaml(filePath) {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const yamlText = await response.text();
    return jsyaml.load(yamlText);
  }
  
  // Utility function to generate HTML from YAML data
  function generateHtml(data) {
    let html = '<div class="yaml-content">';
  
    for (const [key, value] of Object.entries(data)) {
      html += `<h2>${key.replace(/_/g, ' ')}</h2>`;
      if (Array.isArray(value)) {
        html += '<ul>';
        value.forEach(item => {
          if (typeof item === 'object') {
            html += `<li>${generateHtml(item)}</li>`; // Recursively render nested objects
          } else {
            html += `<li>${item}</li>`;
          }
        });
        html += '</ul>';
      } else if (typeof value === 'object') {
        html += `<div class="nested-object">${generateHtml(value)}</div>`;
      } else {
        html += `<p>${value}</p>`;
      }
    }
  
    html += '</div>';
    return html;
  }
  
  // Dynamically determine YAML file and load content
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('yaml-display');
    const yamlFilePath = container.dataset.yamlFile; // Get file path from the data attribute
  
    if (!yamlFilePath) {
      console.error('No YAML file specified for this page.');
      container.innerHTML = `<p>Error: No YAML file specified for this page.</p>`;
      return;
    }
  
    // Load and render the YAML file
    loadYaml(yamlFilePath)
      .then(yamlData => {
        container.innerHTML = generateHtml(yamlData);
      })
      .catch(error => {
        console.error(`Error loading ${yamlFilePath}:`, error);
        container.innerHTML = `<p>Error loading YAML content (${yamlFilePath}).</p>`;
      });
  
    // Add copy-to-clipboard functionality
    const copyButton = document.getElementById('copy-button');
    if (copyButton) {
      copyButton.addEventListener('click', () => {
        const content = container.innerText;
        navigator.clipboard
          .writeText(content)
          .then(() => alert('Content copied to clipboard!'))
          .catch(err => {
            console.error('Error copying to clipboard:', err);
            alert('Failed to copy content. Please try again.');
          });
      });
    }
  });
  