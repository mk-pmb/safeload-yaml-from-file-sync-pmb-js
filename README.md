
<!--#echo json="package.json" key="name" underline="=" -->
safeload-yaml-from-file-sync-pmb
================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Legacy code compatibility cancer. Avoid if you can.
<!--/#echo -->


Avoid if you can.
-----------------

Use this module if your only other viable option would be to re-create
it as untested inline code.

The good solution would be to factor out your sync sludge to use Promises,
and then use the `read-data-file` module instead.



API
---

This module exports one function with some extra properties:


### lyff(path[, rqr])

Load Yaml From File.
Synchronously.

If `rqr` is given, it's assumed to be your module's `require` function,
and `rqr.resolve` will be used to find the absolute path.


### lyff.default

Same as `lyff`, to help with broken module importers.



&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
