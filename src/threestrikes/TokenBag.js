import { html } from "htm/react";
import { useRecoilValue } from "recoil";

import { tokenDigitsValue, tokenModsState } from "./state.js";

export const TokenBag = ({ bagText, onClick }) => {
  const tokenDigits = useRecoilValue(tokenDigitsValue);
  const tokenMods = useRecoilValue(tokenModsState);

  const tokens = tokenDigits.map((c, i) => {
    const { raised = false, rotated = false, discarded = false } = tokenMods[i];
    let className = "token";
    if (c === "X") className += " strikeToken";
    if (raised) className += " raiseToken";
    if (rotated) className += " rotate";
    if (discarded) className += " hide";
    return html`<div key=${i} class=${className}>${c}</div>`;
  });

  const disabled = !onClick;

  return html`
    <div class="bag">
      ${tokens}
      <button class="button" disabled=${disabled} onClick=${onClick}>
        ${bagText}
      </button>
    </div>
  `;
};
