!(() => {
  const eventNames = [
    "DOMActivate",
    "DOMContentLoaded",
    "DOMMouseScroll",
    "abort",
    "activate",
    "addstream",
    "addtrack",
    "afterprint",
    "afterscriptexecute",
    "animationcancel",
    "animationend",
    "animationiteration",
    "animationstart",
    "appinstalled",
    "audioend",
    "audioprocess",
    "audiostart",
    "auxclick",
    "beforeinput",
    "beforeprint",
    "beforescriptexecute",
    "beforeunload",
    "beginEvent",
    "blocked",
    "blur",
    "boundary",
    "bufferedamountlow",
    "cancel",
    "canplay",
    "canplaythrough",
    "change",
    "click",
    "close",
    "closing",
    "complete",
    "compositionend",
    "compositionstart",
    "compositionupdate",
    "connect",
    "connectionstatechange",
    "contentdelete",
    "contextmenu",
    "copy",
    "cuechange",
    "cut",
    "datachannel",
    "dblclick",
    "devicechange",
    "devicemotion",
    "deviceorientation",
    "drag",
    "dragend",
    "dragenter",
    "dragleave",
    "dragover",
    "dragstart",
    "drop",
    "durationchange",
    "emptied",
    "end",
    "endEvent",
    "ended",
    "enterpictureinpicture",
    "error",
    "focus",
    "focusin",
    "focusout",
    "formdata",
    "fullscreenchange",
    "fullscreenerror",
    "gamepadconnected",
    "gamepaddisconnected",
    "gatheringstatechange",
    "gesturechange",
    "gestureend",
    "gesturestart",
    "gotpointercapture",
    "hashchange",
    "icecandidate",
    "icecandidateerror",
    "iceconnectionstatechange",
    "icegatheringstatechange",
    "input",
    "inputsourceschange",
    "install",
    "invalid",
    "keydown",
    "keypress",
    "keyup",
    "languagechange",
    "leavepictureinpicture",
    "load",
    "loadeddata",
    "loadedmetadata",
    "loadend",
    "loadstart",
    "lostpointercapture",
    "mark",
    "merchantvalidation",
    "message",
    "messageerror",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "mousewheel",
    "mute",
    "negotiationneeded",
    "nomatch",
    "notificationclick",
    "offline",
    "online",
    "open",
    "orientationchange",
    "pagehide",
    "pageshow",
    "paste",
    "pause",
    "payerdetailchange",
    "paymentmethodchange",
    "play",
    "playing",
    "pointercancel",
    "pointerdown",
    "pointerenter",
    "pointerleave",
    "pointerlockchange",
    "pointerlockerror",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "popstate",
    "progress",
    "push",
    "pushsubscriptionchange",
    "ratechange",
    "readystatechange",
    "rejectionhandled",
    "removeTrack",
    "removestream",
    "removetrack",
    "repeatEvent",
    "reset",
    "resize",
    "resourcetimingbufferfull",
    "result",
    "resume",
    "scroll",
    "search",
    "seeked",
    "seeking",
    "select",
    "selectedcandidatepairchange",
    "selectend",
    "selectionchange",
    "selectstart",
    "shippingaddresschange",
    "shippingoptionchange",
    "signalingstatechange",
    "slotchange",
    "soundend",
    "soundstart",
    "speechend",
    "speechstart",
    "squeeze",
    "squeezeend",
    "squeezestart",
    "stalled",
    "start",
    "statechange",
    "storage",
    "submit",
    "success",
    "suspend",
    "timeout",
    "timeupdate",
    "toggle",
    "tonechange",
    "touchcancel",
    "touchend",
    "touchmove",
    "touchstart",
    "track",
    "transitioncancel",
    "transitionend",
    "transitionrun",
    "transitionstart",
    "unhandledrejection",
    "unload",
    "unmute",
    "upgradeneeded",
    "versionchange",
    "visibilitychange",
    "voiceschanged",
    "volumechange",
    "vrdisplayactivate",
    "vrdisplayblur",
    "vrdisplayconnect",
    "vrdisplaydeactivate",
    "vrdisplaydisconnect",
    "vrdisplayfocus",
    "vrdisplaypointerrestricted",
    "vrdisplaypointerunrestricted",
    "vrdisplaypresentchange",
    "waiting",
    "webglcontextcreationerror",
    "webglcontextlost",
    "webglcontextrestored",
    "webkitmouseforcechanged",
    "webkitmouseforcedown",
    "webkitmouseforceup",
    "webkitmouseforcewillbegin",
    "wheel",
  ]

  function ignore(event) {
    event.preventDefault()
    event.stopPropagation()
    event.stopImmediatePropagation()
  }

  function applyEventListeners(el) {
    eventNames.forEach(eventName => {
      el.addEventListener(eventName, ignore, true)
    })

    // el.setAttribute("disabled", "")
    el.setAttribute("readonly", "")
    return el
  }

  function getAllElements(root) {
    root = root || document.getElementsByTagName("html")[0]
    let out = [root]

    Array.from(root.children).forEach(child => {
      out = out.concat(getAllElements(child))
    })

    return out
  }

  // add visible notification
  const shouldShowNotification = true

  if (shouldShowNotification) {
    const notification = document.createElement("div")

    notification.style = /* css */ `
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      box-sizing: border-box;
      min-width: 100vw;
      max-width: 100vw;
      height: auto;
      min-height: auto;
      max-height: 100vh;
      overflow: hidden;
      background-color: yellow;
      color: black;
      padding: 1em;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
      z-index: 999999;
      cursor: not-allowed;
      font-family: monospace;
      font-size: 1.25em;
    `

    notification.innerHTML =
      "This page is currently in read-only mode. To enable read-write mode again, just refresh the page."

    applyEventListeners(notification)
    document.body.appendChild(notification)
  }

  // put glass over notification and the rest of the viewport
  const shouldUseGlass = true

  if (shouldUseGlass) {
    const glass = document.createElement("div")

    glass.style = `position: fixed; left: 0; top: 0; width: 100vw; min-width: 100vw; max-width: 100vw; height: 100vh; min-height: 100vh; max-height: 100vh; overflow: hidden; cursor: not-allowed; z-index: 999998; background-color: rgba(128, 128, 128, 0.1);`

    applyEventListeners(glass)
    document.body.appendChild(glass)
  }

  setTimeout(() => {
    // add event listeners to elements
    getAllElements().forEach(el => {
      applyEventListeners(el)
    })
  }, 10)
})()
