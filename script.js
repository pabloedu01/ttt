fetch('/api/mensagem')
  .then(response => response.json())
  .then(data => {
    document.getElementById('mensagem').innerText = data.mensagem;
  })
  .catch(err => {
    document.getElementById('mensagem').innerText = 'Erro ao carregar mensagem';
    console.error(err);
  });
