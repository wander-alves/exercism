export function randomShipRegistryNumber() {
  const value = Math.round(Math.random() * 10000);
  if(value >= 1000 && value <= 9999){
    return `NCC-${value}`;
  }
  return `NCC-${randomShipRegistryNumber()}`
}

export function randomStardate() {
  const result = Math.random() * 1000;
  return result + 41000;
}

export function randomPlanetClass() {
  const planetClasses = [
    'D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'
  ];

  const randomIndex = Math.floor(Math.random() * 10);

  return planetClasses[randomIndex];
}