# Intro

This tool makes it easy to put a browser tab into read-only mode. It accomplishes this by (1) adding all possible event listeners to all elements in the page and cancelling their events as they arise; and (2) adding a translucent "glass" element on top of everything in the viewport to block touch and mouse events. My goal is eventually to make a browser extension that fulfills this purpose; but so far I've only made a standalone script.

# Usage

Copy the contents of `standalone.min.js` (or the original, `standalone.js`, if you prefer), paste it into the browser's developer console, and press the Enter key to run it. It should execute and put the page into read-only mode immediately. Then, when you're ready to disable read-only mode, just refresh the page! 😁

Note that the script can sometimes take a couple seconds to finish running, and the page may freeze up. That's because it's finding every element in the page and adding every possible event listener to it. For reference, on my computer, in a page containing ~7,000 elements, the script took 2-3 seconds to finish running.

Note that you can also create a bookmarklet for this tool! Just create a new bookmark that points to `javascript:<contents-of-standalone.min.js>` (replacing `<contents-of-standalone.min.js>` with the _actual_ contents of that file, of course). In Firefox, I haven't been able to invoke the bookmarklet by searching for it in the search / URL bar and then selecting it; but I _can_ invoke it by clicking on its button in the bookmarks bar. I don't know yet how other browsers handle bookmarklet invocations initiated in the search / URL bar.

# Caveat

It's probably not hard to defeat the effects of this script. It's not meant to be 100% foolproof and secure against all possible workarounds; it's just meant to handle some particular use cases for me, especially in cases where I need to be particularly careful about _not_ changing anything. The effects probably also won't be applied to iframes or shadow DOMs, but that's just a guess because I haven't tested them yet.
