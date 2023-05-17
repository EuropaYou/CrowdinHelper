// ==UserScript==
// @name         CrowdinHelper
// @namespace    https://github.com/EuropaYou/CrowdinHelper
// @copyright    https://github.com/EuropaYou/CrowdinHelper
// @version      0.2
// @description  Adds tools that helps translating
// @author       EuropaYou
// @match        https://crowdin.com/translate/*/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=crowdin.com
// ==/UserScript==

(function() {
  'use strict';
  let interval = setInterval(() => {
    let sourceString = document.getElementsByClassName("selectable editor-source-container source-string-container");
    if(sourceString.length > 0) {
      if(sourceString[0].textContent != "") {
        const copySourceTextButton = document.createElement("button");
        copySourceTextButton.className = "crowdin-helper-copySourceText";
        copySourceTextButton.style.background = "#4d5765";
        copySourceTextButton.style.border = "2px solid #252a31";
        copySourceTextButton.style.color = "#8d98a9";
        copySourceTextButton.innerText = "Copy Source Text";
        copySourceTextButton.onclick = (e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(sourceString[0].textContent);
        };
        const copyTranslationTextButton = document.createElement("button");
        copyTranslationTextButton.className = "crowdin-helper-copyTranslationText";
        copyTranslationTextButton.innerText = "Copy Translation Text"
        copyTranslationTextButton.style.background = "#4d5765";
        copyTranslationTextButton.style.border = "2px solid #252a31";
        copyTranslationTextButton.style.color = "#8d98a9";
        copyTranslationTextButton.style.marginLeft = "5px";
        copyTranslationTextButton.onclick = (e) => {
          navigator.clipboard.writeText(document.getElementsByClassName("input-block-level ui-autocomplete-input")[0].value);
        };
        const pasteTranslationTextButton = document.createElement("button");
        pasteTranslationTextButton.className = "crowdin-helper-pasteTranslationText";
        pasteTranslationTextButton.innerText = "Paste Translation"
        pasteTranslationTextButton.style.background = "#4d5765";
        pasteTranslationTextButton.style.border = "2px solid #252a31";
        pasteTranslationTextButton.style.color = "#8d98a9";
        pasteTranslationTextButton.style.marginLeft = "5px";
        pasteTranslationTextButton.onclick = (e) => {
          let text = prompt("Enter Text.")
          document.getElementsByClassName("input-block-level ui-autocomplete-input")[0].value = text
        };
        let buttonContainer = document.getElementsByClassName("btn-toolbar no-margin pull-right")[0]
        buttonContainer.appendChild(copySourceTextButton);
        buttonContainer.appendChild(copyTranslationTextButton);
        buttonContainer.appendChild(pasteTranslationTextButton);
        clearInterval(interval)
      }
    }
  })
  })();
