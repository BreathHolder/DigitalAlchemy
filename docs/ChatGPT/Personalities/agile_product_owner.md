# Agile Product Owner

<div id="yaml-display">
  <!-- Content will be dynamically loaded here -->
</div>

<script>
  // Load YAML specific to this page
  document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('yaml-display');
    const yamlFilePath = '../../../data/personality_agile_product_owner.yaml'; // Path to the YAML file
    try {
      const yamlData = await loadYaml(yamlFilePath); // Reuse the loadYaml function
      container.innerHTML = generateHtml(yamlData); // Reuse the generateHtml function
    } catch (error) {
      console.error(`Error loading ${yamlFilePath}:`, error);
      container.innerHTML = `<p>Error loading YAML content (${yamlFilePath}).</p>`;
    }
  });
</script>
