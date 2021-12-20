export const removeUNwantedBehavious = () => {
  document.body.style.height = document.body.clientHeight + "px";
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );
  document.addEventListener(
    "keydown",
    function (e) {
      //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        disabledEvent(e);
      }
      // "C" key
      if (e.ctrlKey && e.shiftKey) {
        disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        disabledEvent(e);
      }
      // "S" key + macOS
      if (
        e.keyCode === 83 &&
        (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
      ) {
        disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode === 85) {
        disabledEvent(e);
      }
      // "F12" key
      if (e.keyCode === 123) {
        disabledEvent(e);
      }
    },
    false
  );
  function disabledEvent(e: KeyboardEvent) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (window.event) {
      window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
  }
  var allImages = document.getElementsByTagName("img");
  for (let index = 0; index < allImages.length; index++) {
    const element = allImages[index];
    element.ondragstart = (e) => {
      e.preventDefault();
    };
  }
};
