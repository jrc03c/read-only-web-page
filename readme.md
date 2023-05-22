# Intro

This tool makes it easy to put a browser tab into read-only mode. It accomplishes this by adding all possible event listeners to all elements in the page (including new elements that might appear later) and cancelling their events as they arise. My goal is eventually to make a browser extension that fulfills this purpose; but I've only made a standalone script so far.

# Usage

Copy the contents of `standalone.min.js` (or the original, `standalone.js`, if you prefer), paste it into the browser's developer console, and press the Enter key to run it. It should execute immediately.

The script can sometimes take a couple seconds to finish running. That's because it's finding every element in the page and adding every possible event listener to it. For reference, on my computer, in a page containing ~7,000 elements, the script took 2-3 seconds to finish running.

To disable read-only mode, just refresh the page! 😁

# Caveat

It's probably not hard to defeat the effects of this script. It's not meant to be 100% foolproof and secure; it's just meant to solve a particular problem for me, which is that I occasionally need to get information from a web page without changing anything on the page.
