function updateLight(current) {
  current == "green"
    ? "yellow"
    : current == "yellow"
    ? "red"
    : current == "red"
    ? "green"
    : null;
}
