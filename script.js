fetch('data/annonces.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('annonces');
    data.forEach(annonce => {
      const div = document.createElement('div');
      div.className = 'annonce';
      div.innerHTML = `
        <h2>${annonce.titre}</h2>
        <p>${annonce.description}</p>
        <strong>🎁 Récompense : ${annonce.recompense}</strong>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier JSON :', error);
    document.getElementById('annonces').innerText = "Erreur de chargement des annonces.";
  });
