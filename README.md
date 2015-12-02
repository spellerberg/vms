# Visitor Motivation Survey

This project consists primarily of three files -- HTML, CSS and JS -- that together create a user interface for the visitor motivation survey. 

The action is in the JS file, especially the sendMotivation function: This is where dimensions are communicated to Google Analytics. Note that this function is written to communicate with the current version of the Google Analytics snippet (`analytics.js`). If you are still serving the older snippet (`ga.js`), you will need to get the updated code from Google.

The repo also contains copies of jQuery and js.cookie, in case you don't already use them.

## Customizations

This sample code is meant to provide an example of how the VMS may be implemented. You are encouraged to customize it for integration into your website.

You must change the markup in `src/vms.html` to specify the name of your institution (in two places) and the href of the contact link. You should also customize the CSS to match your site's fonts and colors. 

From there, please feel free to modify, refactor or re-write any code you wish. We ask only that the interface and language presented to the user remain consistent, to facilitate comparison of results across institutions.

## Installation

### WordPress Plugin

The sample code has been prepared for easy installation as a WordPress plugin. Download the package, upload and activate. You should see the assets enqueued and the survey attached to the bottom of the window.

### Drupal 7 Module

Chris Brown of the YBCA has contributed a Drupal 7 module of the VMS. It's available here:

https://github.com/spellerberg/vms/tree/drupal7

### Other Platforms

Disregard the file `vmswp.php`, as it is only used for WordPress. If you already include jQuery, there's no need to include the provided copy. Integrate the other files into your templates. Minify and GZIP as desired.

### Note the Index of your Custom Definition

When you created your “Motivations” Custom Definition in Google Analytics, it was assigned an integer index. Line four of `src/vms.js` needs to correspond to this index.

If this is your first Custom Dimension your index will be “1”. In that case you won’t need to change anything. Otherwise, update that line so that the integer matches.

## Contact

For any questions please reach out to marty@martyspellerberg.com