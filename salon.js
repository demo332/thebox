// The Box — réglages du salon (modifie ici, le site et l'agenda se mettent à jour)

// Prestations : nom, durée en minutes, prix affiché, prix en € (pour le chiffre estimé de l'agenda) et couleur dans l'agenda.
// Une prestation de plus de 30 min occupe plusieurs créneaux (ex. 40 min = 2 créneaux de 30 min).
export const SERVICES = [
  { n: 'Barbe + soin',                       dur: 15, p: 'à partir de 15 €',  prix: 15,  color: '#14b8a6' },
  { n: 'Coupe cheveux courts',               dur: 30, p: 'à partir de 20 €',  prix: 20,  color: '#2f6fe4' },
  { n: 'Couleur / teinture + coupe',         dur: 30, p: 'de 100 € à 140 €',  prix: 100, color: '#8b5cf6' },
  { n: 'Coupe + dessin',                     dur: 30, p: 'à partir de 25 €',  prix: 25,  color: '#e0262b' },
  { n: 'Coupe homme + taille de barbe',      dur: 30, p: 'à partir de 30 €',  prix: 30,  color: '#f59e0b' },
  { n: 'Coupe cheveux mi-longs',             dur: 30, p: 'à partir de 30 €',  prix: 30,  color: '#ec4899' },
  { n: 'Coupe cheveux longs transformation', dur: 40, p: 'à partir de 50 €',  prix: 50,  color: '#a16207' }
  // Pour en ajouter une : copie une ligne, mets une virgule entre les lignes et choisis une autre couleur.
];

// Les salons. Chaque salon a son propre planning et son propre compte admin (e-mail + mot de passe).
// Les coiffeurs ne sont plus ici : ils s'ajoutent et se suppriment depuis la page admin.
// ⚠️ Mets ici les e-mails des comptes créés dans Firebase > Authentication (un par salon),
//    et les mêmes dans les règles Firestore.
export const SHOPS = [
  { id: 's1', name: 'The Box · Salon 1', addr: '6 Rue du Général Leclerc, 76000 Rouen',  email: 'leogiffard27@gmail.com' },
  { id: 's2', name: 'The Box · Salon 2', addr: '31 Rue du Général Leclerc, 76000 Rouen', email: 'lgiffard76@gmail.com' }
];

// Compte « gestion » (Firebase > Authentication) : son mot de passe est demandé pour ajouter ou supprimer un coiffeur.
export const MANAGER_EMAIL = 'gestion@thebox-rouen.fr';

export const OPEN_HOUR = 8;      // ouverture : 8h00
export const CLOSE_HOUR = 20;    // fermeture : 20h00 (dernier créneau 19h30)
export const CLOSED_DAYS = [0];  // 0 = dimanche, 1 = lundi, ... 6 = samedi

// Un coiffeur travaille-t-il ce jour-là ? (d = Date) — tient compte des jours de repos et des congés
export const works = (barber, d) => {
  if (CLOSED_DAYS.includes(d.getDay())) return false;
  if (!barber) return true;
  if ((barber.off || []).includes(d.getDay())) return false;            // jour de repos chaque semaine
  const k = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  return !(barber.leave || []).some(r => r && k >= r.from && k <= r.to); // congés (du … au …)
};

// Nombre de créneaux de 30 min qu'occupe une prestation
export const slotsFor = s => Math.max(1, Math.ceil(((s && s.dur) || 30) / 30));
