// src/dijkstra.js

export const dijkstra = (airports, routes, start, end) => {
  const graph = buildGraph(routes);
  const distances = {};
  const visited = {};
  const previous = {};

  Object.keys(airports).forEach(airport => {
    distances[airport] = Infinity;
    visited[airport] = false;
  });

  distances[start] = 0;

  for (let i = 0; i < Object.keys(airports).length; i++) {
    const unvisited = Object.keys(visited).filter(a => !visited[a]);
    const nextAirport = unvisited.reduce((nearest, airport) => {
      const shortest = distances[airport] < distances[nearest] || distances[nearest] === undefined;
      return shortest ? airport : nearest;
    }, undefined);

    if (!nextAirport) break;

    visited[nextAirport] = true;
    const currentDistance = distances[nextAirport];
    const neighbors = graph[nextAirport] || {};

    Object.keys(neighbors).forEach(neighbor => {
      const distance = currentDistance + neighbors[neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = nextAirport;
      }
    });
  }

  const path = [end];
  let parent = previous[end];
  while (parent) {
    path.unshift(parent);
    parent = previous[parent];
  }

  return {
    distance: distances[end],
    path
  };
};

export const buildGraph = (routes) => { 
  const graph = {};
  routes.forEach(route => {
    const { from, to, distance } = route;
    graph[from] = graph[from] || {};
    graph[from][to] = distance;
  });
  return graph;
};

export const findAllPaths = (graph, start, end, visited = {}, path = []) => {
  visited[start] = true;
  path.push(start);

  let paths = [];

  if (start === end) {
      paths.push([...path]);  // Adiciona o caminho atual à lista de caminhos
  } else {
      for (const neighbor in graph[start] || {}) {
          if (!visited[neighbor]) {
              const newPaths = findAllPaths(graph, neighbor, end, { ...visited }, [...path]);
              paths = paths.concat(newPaths);
          }
      }
  }

  path.pop();
  visited[start] = false;
  return paths;
};


