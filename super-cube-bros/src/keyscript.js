export let keys = [];

export function getkeyspressed() {
  document.addEventListener('keydown', (event) => {
    if (!keys.includes(event.key)) {
        keys.push(event.key);
    }
  });
  document.addEventListener('keyup', (event) => {
    const index = keys.indexOf(event.key);
    if (index > -1) {
        keys.splice(index, 1);
    }
  });
  return keys;
}

//WARNING: N00B CODE ALERT!

//export function cubexmovement() {
//  if (keys.includes('d')) {
//    return(1);
//  }
//  if (keys.includes('a')) {
//    return(-1);
//  }
//}

//export function cubeymovement() {
//  pass();
//}

//export function cubezmovement() {
//  if (keys.includes('w')) {
//    return(1);
//  }
//  if (keys.includes('s')) {
//    return(-1);
//  }
//}