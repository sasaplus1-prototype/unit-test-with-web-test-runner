import * as iconv from 'iconv-lite';

export function removeAllChildren(node: Node): void {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

export function convertToMs932(text: string): string {
  return iconv.encode(text, 'MS932');
}
