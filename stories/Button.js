import { html } from 'lit-html';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  function internalOnClickFunction(e) {
    console.log('logged from internalOnClickFunction', e);
  }

  return html`
    <button
      type="button"
      class=${['storybook-button', `storybook-button--${size || 'medium'}`, mode].join(' ')}
      style=${backgroundColor && { backgroundColor }}
      @click=${internalOnClickFunction}
    >
      ${label}
    </button>
  `;
};
