--------------------------------------------------------------------------------
Visitor Motivation Survey for Drupal 7.x
By Andrew Fox, Fine Arts Museums of San Francisco - afox@famsf.org
Based on work by Chris Brown at Yerba Buena Center for the Arts
--------------------------------------------------------------------------------

DESCRIPTION:
This module implements the Visitor Motivation Survey (VMS) for museum websites 
by Marty Spellerberg (https://github.com/spellerberg/vms).

--------------------------------------------------------------------------------

REQUIREMENTS:
jQuery Update module (https://www.drupal.org/project/jquery_update).
The survey requires jQuery 1.7 or higher.

--------------------------------------------------------------------------------

INSTALLATION:
Put this module in your sites/all/modules directory and enable it at
admin/modules.

--------------------------------------------------------------------------------

CONFIGURATION:
Right now there are no configuration options for this module. It pulls the
Drupal site name ($site_name) into the template and uses it to customize the
survey content. If you wish to further customize this, you can copy the
visitor_motivation_survey.tpl.php file into your theme and edit it there. You
can also override the module css (located in vms.css) in your theme css.

--------------------------------------------------------------------------------

NOTE:
You must be participating in the VMS program for this survey to have any
meaningful use for your website!
