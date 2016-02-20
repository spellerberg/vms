<?php
/**
 * Displays popup content for Visitor Motivation Survey for museum websites. 
 * 
 * Template file allows for simple adjustment of html and css.
 */
?>

<div class="vms">
  <div class="xbutton dismiss">Not now <span>&times;</span></div>
  <div class="xbutton shrink">Close <span>&times;</span></div>
  <div class="xbutton finish">Close <span>&times;</span></div>
  <div class="margin">
    <div class="opensurvey">
      <div class="prompt clickable">Answer one question. <span>Improve our website.</span></div>
      <div class="survey">
        <p>Today, I&rsquo;m visiting the <?php echo $site_name;?> website:</p>
          <ul>
            <li><a class="recharger" href="#">For inspiration.</a></li>
	    <li><a class="explorer" href="#">To learn something new.</a></li>
	    <li><a class="facilitator" href="#">To plan an activity for my family/friends.</a></li>
	    <li><a class="seeker" href="#">Because the <?php echo $site_name;?> was recommended to me.</a></li>
	    <li><a class="professional" href="#">For professional reasons.</a></li>
          </ul>
        <p class="done">Done. Thank you!</p>
        <p class="infobutton clickable">What is this?</p>
        <p class="infotext">We&rsquo;re always looking for ways to improve our site, so we want to know why you&rsquo;re here and how we can help you find the information you need. For specific questions or comments about our website or this survey, please <a href="[contact]">contact us</a>. Thanks for your help!</p>
      </div>
    </div>
  </div>
  <div class="mquery"></div>
</div>
