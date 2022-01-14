function enough(cap, on, wait) {
  let people = (on + wait) - cap;
  return people <= 0 ? 0 : people 
}
