// src/data.js

export const airports = {
  GRU: { id: 'GRU', name: 'Aeroporto Internacional de São Paulo/Guarulhos', position: [-23.4306, -46.4731] },
  GIG: { id: 'GIG', name: 'Aeroporto Internacional do Rio de Janeiro/Galeão', position: [-22.8089, -43.2436] },
  CNF: { id: 'CNF', name: 'Aeroporto Internacional de Belo Horizonte/Confins', position: [-19.6244, -43.9719] },
  BSB: { id: 'BSB', name: 'Aeroporto Internacional de Brasília', position: [-15.8697, -47.9208] },
  SSA: { id: 'SSA', name: 'Aeroporto Internacional de Salvador', position: [-12.9714, -38.5014] },
  FOR: { id: 'FOR', name: 'Aeroporto Internacional de Fortaleza', position: [-3.7760, -38.5323] },
  // ... outros aeroportos
};

export const routes = [
  { from: 'GRU', to: 'GIG', distance: 338 },
  { from: 'GRU', to: 'CNF', distance: 489 },
  { from: 'CNF', to: 'BSB', distance: 624 },
  { from: 'BSB', to: 'SSA', distance: 1060 },
  { from: 'SSA', to: 'FOR', distance: 1389 },
  { from: 'GIG', to: 'CNF', distance: 339 },
  // ... outras rotas
];
