import { html } from 'lit-html';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label }) => {
  function internalOnClickFunction(e) {
    console.log('logged from internalOnClickFunction', e);

    this.dispatchEvent(new Event('foo'));
    this.dispatchEvent(new CustomEvent('bar', {detail: 'foo! bar!'}));
  }

  return html`
    <button
      id="mySelector"
      type="button"
      @click=${internalOnClickFunction}
    >
      ${label}
    </button>
  `;
};
