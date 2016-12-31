SPAS - Single Page App Server
#############################

Development server for single-page apps.

For when ``python -m http.server`` is not enough.


Features
========

- Serve single-page apps, that is, serve the same HTML page no matter
  what the requested path.
- Serve static files as well
- Return "normal" 404s if a static file is missing, to avoid returning
  HTML when eg. a script was expected.
- Support SSL. This is mostly handy in case you want to test things
  like browser geolocation API locally using a custom domain (browsers
  only allow geolocation on HTTPS or localhost).


Sample usage
============

This will work nicely to serve the demo app::

    spas --bind 127.0.0.1 --port 8080 --root ./demo-app/ --static js,css,img --default-page index.html
