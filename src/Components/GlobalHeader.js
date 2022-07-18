import { useLayoutEffect } from "react";

export default function Header() {

  function hidden() {
    // This is temporary. It has a hidden attr in the original
    //code that wasn't firing
    const pm = document.querySelector("#primary-navigation");
    pm.setAttribute("hidden", "")
    }

    useLayoutEffect(() => {
      hidden();
    }, []);
  
    

  return (
    <>
        <div role="banner">
        <h1 aria-hidden="true" className="d-none">California State University, Sacramento</h1>
        <p className="ie-browser-msg" style="padding: 1em 0; background: #e6b711; color: #333; text-align: center;">Based on real user feedback and statistics, csus.edu no longer supports Microsoft’s Internet Explorer browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <nav aria-labelledby="primary-navigation" className="navbar navbar-default navbar-light navbar-static-top splitter" id="csus-global-navbar">
            <h2 hidden="" id="primary-navigation">Primary Navigation</h2>
            <div className="container">
                <a className="navbar-brand" href="https://www.tst.csus.edu"> <img alt="Sac State logo" src="https://www.tst.csus.edu/newcsus2019-global-assets/_internal/svg/csulogo.svg" /> </a>
                <ul aria-labelledby="primary-navigation" className="nav justify-content-end" role="menu">
                    <li role="menuitem"><a href="https://www.tst.csus.edu/apply/index.html">APPLY</a></li>
                    <li role="menuitem"><a href="https://www.tst.csus.edu/experience/index.html">EXPERIENCE</a></li>
                    <li role="menuitem"><a href="https://www.tst.csus.edu/campaign/index.html">GIVE</a></li>
                </ul>
                <button aria-expanded="false" aria-haspopup="true" aria-label="Menu" className="navbar-toggler navbar-toggler-right navbar-toggler-icon" data-target="#quicklinks-modal" data-toggle="modal" href="#quicklinks-modal" type="submit">Menu</button>
                {/* Modal: Start */}
                <div aria-labelledby="quicklinksModalLabel" className="modal fade" id="quicklinks-modal" tabindex="-1">
                    <div className="modal-dialog modal-dialog-slideout modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title" hidden="" id="quicklinksModalLabel">Explore</h3>
                                <button aria-label="Close Primary Navigation" className="close" data-dismiss="modal" href="#" type="submit">× </button>
                            </div>
                            <div className="modal-body">
                                <form action="https://www.tst.csus.edu/search/" method="get" role="search" style="border: none;">
                                    <fieldset>
                                        <legend>Search</legend>
                                        <input aria-label="Search CSUS.edu" autofocus="autofocus" className="form-control" name="q" placeholder="Search" title="Search CSUS.edu" type="search" />
                                        <button aria-label="Submit Search" type="submit"> <span style="text-indent: -999px; display: inline-block; max-width: 1px; overflow: hidden;">Submit Search</span> <img alt="Submit Search" height="32" src="https://irt-cdn.webhost.csus.edu/cascade/csusnew2019/NewCSUS2019-global-assets/_internal/images/toolbar_find.png" title="Click to submit your search request" width="32" /> </button>
                                    </fieldset>
                                </form>
                                <ul className="ql-stacker" id="top-quick-links" role="menubar">
                                    <li role="menuitem"><a href="https://my.csus.edu">My Sac State</a></li>
                                    <li role="menuitem"><a href="https://www.tst.csus.edu/return-to-campus/">Returning to Campus</a></li>
                                    <li role="menuitem"><a href="https://www.trumba.com/calendars/sacramento-state-events?trumbaEmbed=filterview%3DFeaturedEvents">Events</a></li>
                                    <li role="menuitem"><a href="https://www.tst.csus.edu/parking-transportation/" target="_parent">Parking</a></li>
                                    <li><a href="https://www.tst.csus.edu/campusmap/">Campus Map</a></li>
                                </ul>
                                <div id="nav-accordion">
                                    <div className="card">
                                        <div className="card-header" id="heading-student-life"><a aria-controls="accordion-student-life" aria-expanded="false" data-target="#accordion-student-life" data-toggle="collapse" href="#accordion-student-life" role="button">Student Life</a></div>
                                        <div aria-labelledby="heading-student-life" className="collapse" data-parent="#nav-accordion" id="accordion-student-life">
                                            <div className="card-body">
                                                <ul role="menubar">
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/student-life/academic-advising/index.html">Academic Advising</a></li>
                                                    <li role="menuitem"><a href="http://www.asi.csus.edu">ASI</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/student-life/career-center/index.html">Career Center</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/student-life/className-schedules/index.html">className Schedules</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/student-life/health-counseling/index.html">Health &amp; Counseling</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/student-life/housing/index.html">Housing</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/student-life/records-transcripts/index.html">Records &amp; Transcripts</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/student-life/student-organizations/index.html">Student Organizations</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mobile-nav-only">
                                        <div className="card-header" id="heading-admissions"><a aria-controls="accordion-admissions" aria-expanded="false" data-target="#accordion-admissions" data-toggle="collapse" href="#accordion-admissions" role="button">Apply</a></div>
                                        <div aria-labelledby="heading-admissions" className="collapse" data-parent="#nav-accordion" id="accordion-admissions">
                                            <div className="card-body">
                                                <ul role="menubar">
                                                    <li role="menuitem"><a href="https://www2.calstate.edu/apply" target="_parent">Apply Online</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/apply/enrollment-costs-fees/index.html" target="_parent">Enrollment Costs &amp; Fees</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/apply/financial-aid-scholarships/index.html" target="_parent">Financial Aid &amp; Scholarships</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/apply/student-orientation/index.html" target="_parent">Student Orientation</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading-academics"><a aria-controls="accordion-academics" aria-expanded="false" data-target="#accordion-academics" data-toggle="collapse" href="#accordion-academics" role="button">Academics</a></div>
                                        <div aria-labelledby="heading-academics" className="collapse" data-parent="#nav-accordion" id="accordion-academics">
                                            <div className="card-body">
                                                <ul role="menubar">
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/college/index.html" target="_parent">Colleges, Majors &amp; Programs</a></li>
                                                    <li role="menuitem"><a href="https://catalog.csus.edu/">University Catalog</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/undergraduate-studies/index.html" target="_parent">Undergraduate Studies</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/graduate-studies/index.html" target="_parent">Graduate Studies</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/international-programs-global-engagement/index.html" target="_parent">International Programs</a></li>
                                                    <li><a href="https://library.csus.edu">Library</a></li>
                                                    <li><a href="https://scholars.csus.edu">Sac State Scholars</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading-athletics"><a href="https://hornetsports.com/landing/index">Athletics</a></div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading-inside-sac-state"><a aria-controls="accordion-inside-sac-state" aria-expanded="false" data-target="#accordion-inside-sac-state" data-toggle="collapse" href="#accordion-inside-sac-state">Inside Sac State</a></div>
                                        <div aria-labelledby="heading-inside-sac-state" className="collapse" data-parent="#nav-accordion" id="accordion-inside-sac-state">
                                            <div className="card-body">
                                                <ul role="menubar">
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/academic-affairs/index.html" target="_parent">Academic Affairs</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/administration-business-affairs/index.html" target="_parent">Administration &amp; Business Affairs</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/diversity-inclusion/index.html" target="_parent">Diversity &amp; Inclusion</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/information-resources-technology/index.html" target="_parent">Information Resources &amp; Tech.</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/president/index.html" target="_parent">Office of the President</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/public-affairs-advocacy/index.html" target="_parent">Public Affairs &amp; Advocacy</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/student-affairs/index.html" target="_parent">Student Affairs</a></li>
                                                    <li role="menuitem"><a href="https://www.enterprises.csus.edu/">UEI – University Enterprises. Inc.</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/university-advancement/index.html" target="_parent">University Advancement</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mobile-nav-only">
                                        <div className="card-header" id="heading-experience-sac-state"><a aria-controls="accordion-experience-sac-state" aria-expanded="false" data-target="#accordion-experience-sac-state" data-toggle="collapse" href="#accordion-experience-sac-state">Experience Sac State </a></div>
                                        <div aria-labelledby="heading-experience-sac-state" className="collapse" data-parent="#nav-accordion" id="accordion-experience-sac-state">
                                            <div className="card-body">
                                                <ul role="menubar">
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/experience/alumni-association/index.html" target="_parent">Alumni Association</a></li>
                                                    <li role="menuitem"><a href="https://www.hornetsports.com">Athletics</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/experience/anchor-university/index.html" target="_parent">Community Engagement</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/experience/innovation-creativity/index.html" target="_parent">Innovation &amp; Creativity</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/news/">News</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/experience/student-success/index.html" target="_parent">Student Success</a></li>
                                                    <li role="menuitem"><a href="https://thewellatsacstate.com/">The WELL</a></li>
                                                    <li role="menuitem"><a href="https://www.tst.csus.edu/experience/visit/index.html" target="_parent">Visit Sac State</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading-directory"><a href="http://directory.csus.edu">Directory</a></div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading-jobs"><a href="https://www.tst.csus.edu/administration-business-affairs/human-resources/">Careers</a></div>
                                    </div>
                                    <div className="card mobile-nav-only">
                                        <div className="card-header" id="heading-give"><a href="https://www.tst.csus.edu/give/">Give</a></div>
                                    </div>
                                    <ul aria-label="Campus-Wide Social Quick Links" className="justify-content-center" id="social-quick-links" role="menubar">
                                        <li role="menuitem"><a href="https://www.facebook.com/sacstate">Visit Sac State at Facebook</a></li>
                                        <li role="menuitem"><a href="https://twitter.com/sacstate">Follow Sac State at Twitter</a></li>
                                        <li role="menuitem"><a href="https://www.instagram.com/sacstate">Follow Sac State at Instagram</a></li>
                                        <li role="menuitem"><a href="https://www.youtube.com/SacStateVideo">Visit Sac State at Youtube</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Modal: End */}
                    </div>
                </div>
            </div>
        </nav>
    </div>
    </>
  );
}
