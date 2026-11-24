// The Box — réglages du salon (modifie ici, les deux pages se mettent à jour)

// Prestations : nom, description, durée, prix affiché, prix en € (pour le total de l'agenda) et couleur dans l'agenda
export const SERVICES = [
  { n: 'Coupe + dessin', d: 'Coupe avec motif tracé à la tondeuse.', t: '30 min', p: 'à partir de 25 €', prix: 25, color: '#e0262b' },
  { n: 'Coupe homme + taille de barbe', d: 'La formule complète : coupe et barbe nette.', t: '30 min', p: 'à partir de 30 €', prix: 30, color: '#2f6fe4' }
  // Pour en ajouter une, copie une ligne au-dessus, mets une virgule entre les deux et choisis une couleur,
  // par exemple '#f59e0b' (orange), '#8b5cf6' (violet), '#14b8a6' (turquoise), '#ec4899' (rose).
];

export const OPEN_HOUR = 8;      // ouverture : 8h00
export const CLOSE_HOUR = 20;    // fermeture : 20h00 (dernier créneau 19h30)
export const CLOSED_DAYS = [0];  // 0 = dimanche, 1 = lundi, ... 6 = samedi
