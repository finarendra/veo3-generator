function generatePrompt() {
  const input = document.getElementById('promptInput').value.trim();
  if (!input) { alert('Isi dulu promptnya!'); return; }
  const result = {
    model: 'veo-3',
    input: input,
    voice: 'default'
  };
  document.getElementById('output').textContent = JSON.stringify(result, null, 2);
}

function exportJSON() {
  const output = document.getElementById('output').textContent;
  if (!output) { alert('Belum ada hasil prompt untuk diexport!'); return; }
  const blob = new Blob([output], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'prompt.json';
  a.click();
  URL.revokeObjectURL(url);
}

function clearAll() {
  document.getElementById('promptInput').value = '';
  document.getElementById('output').textContent = '';
}