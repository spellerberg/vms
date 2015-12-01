This is a Drupal 7 adaptation of the VMS plug-in.  It was put together for use specifically
with the Yerba Buena Center for the Arts website, http://ybca.org by Chris Brown,
cbrown@ybca.org.  Your mileage may vary!

This module assumes that you haven't yanked JQuery out of your Drupal implementation.
(And if you did, whaaa?)

HOW TO INSTALL:
---------------
To use, add the entire visitor_motivation_survey folder this to your sites/all/modules
folder.  Do not remove the .info or .module files, since these are required for Drupal to
recognize the module at all.  To activate, go to the modules administration page at
yoursite.org/admin/modules or use Drush:

	drush pm-enable visitor_motivation_survey

FILES TO EDIT:
--------------
You WILL need to edit the vms.php file to suit your institution's name and perhaps tweak
the language to match the feel of your site, e.g. having the user make the selection
"Nope" may not match your site's tone.

You will LIKELY need to edit the vms.css file if the default color scheme or other aspects
of the default design do not work with your site or the CSS selectors have conflicts.

NO WARRANTY:
------------
I don't normally build sanitized modules for general distribution, so expect some
hackiness. I'm happy to help if I can, but don't expect a whole lot! cbrown@ybca.org.

Enjoy!

