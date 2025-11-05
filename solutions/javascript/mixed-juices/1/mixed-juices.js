// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 0
  switch (name) {
    case 'Pure Strawberry Joy':
      return time = 0.5;    
    case 'Energizer':
    case 'Green Garden':
      return time = 1.5;
    case 'Tropical Island':
      return time = 3;
    case 'All or Nothing':
      return time = 5;
    default:
      return time = 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limesCut = 0
  while (wedgesNeeded > 0 && limes.length > 0) {
    let wedges = 0
    switch (limes[0]) {
     case 'small':
       wedges = 6
       break;
     case 'medium':       
       wedges = 8
       break;
     case 'large':
       wedges = 10
       break;
   } 
    wedgesNeeded -= wedges
    limes.shift()
    limesCut += 1 
  }
  return limesCut
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    timeLeft -= timeToMixJuice(orders[0])
    orders.shift()
  } while (timeLeft > 0 && orders.length > 0)
  return orders
}