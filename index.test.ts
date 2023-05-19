import { assert } from '@esm-bundle/chai';

import { removeAllChildren } from './index';

describe('removeAllChildren', () => {
  it('removes all children', () => {
    const div = document.createElement('div');

    div.innerHTML = `
      <p>Hello!</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <hr />
    `;

    removeAllChildren(div);

    assert.strictEqual(div.children.length, 0);
  });
});
