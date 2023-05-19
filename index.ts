export function removeAllChildren(node: Node): void {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
