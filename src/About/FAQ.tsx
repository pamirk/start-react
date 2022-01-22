import React, {memo} from "react";
import {Box, Typography} from "@material-ui/core";
import {SplitContainer} from "../components";

export default memo(() => {
    return (
        <SplitContainer>
            <div>
                <main className="content " role="main" data-content="">


                    <section className="hero pages-support-hero pages-support-hero pages-support-section hero-loaded"
                             data-layout-element="hero">
                        <div className="container ">
                            <h1 className="pages-support-hero-title hero-title">Customer Support</h1>
                            <div className="col-container ">
                                <div className="col col-50-tablet-desktop">
                                    <h5 className="pages-support-faq-title">Having issues?</h5>
                                    <p className="pages-support-faq-description">Some of the most frequently asked
                                        questions from students are listed below with helpful answers from our Support
                                        team. If you need help with something not answered below, check out the. It's an active,
                                        helpful community of fellow Treehouse students. You can also visit our , which
                                        has answers for many common questions about Treehouse.<br/><br/>
                                            If you don't find an answer below or on the Treehouse Forum, we'd love the
                                            opportunity to help you. You can get in touch with our Support team directly
                                            by clicking the button below.</p>
                                    <a className="button button-primary button-large pages-support-hero-cta async-modal-trigger"
                                       href="/contact" data-async="true" data-stack="true"
                                       data-featurette="async-modal-trigger" data-src="/contact"
                                       data-target="contact_form" id="featurette-4">Contact Support</a>
                                </div>
                                <div className="col col-50-tablet-desktop">
                                    <h5 className="pages-support-faq-title">Report a bug</h5>
                                    <p className="pages-support-faq-description" data-controller="time-zone">Shoot us an
                                        email at <a href="/contact">contact Page</a> with
                                        a link and a screenshot. If this bug hasn’t been reported before, we’ll award
                                        you a special Exterminator badge as a thank you!<br/><br/>
                                            Response times from our Support team are fastest from <time
                                            dateTime="2022-01-17T17:00:00Z" data-local="time" data-format="%I:%M %P"
                                            title="January 17, 2022 at 10:00pm PST" data-localized=""
                                            aria-label="10:00 pm">10:00 pm</time>-
                                            <time dateTime="2022-01-18T01:00:00Z" data-local="time"
                                                  data-format="%I:%M %P" title="January 18, 2022 at 6:00am PST"
                                                  data-localized="" aria-label="06:00 am">06:00 am
                                            </time>
                                            <span data-target="time-zone.timezone">GMT+5</span>, <time
                                            dateTime="2022-01-17T17:00:00Z" data-local="time" data-format="%A"
                                            title="January 17, 2022 at 10:00pm PST" data-localized=""
                                            aria-label="Monday">Monday</time> through <time
                                            dateTime="2022-01-21T17:00:00Z" data-local="time" data-format="%A"
                                            title="January 21, 2022 at 10:00pm PST" data-localized=""
                                            aria-label="Friday">Friday</time>. Support requests submitted outside those
                                            times may receive delayed responses.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <h4 className="pages-support-faq-heading text-centered">FAQ</h4>

                    <section className=" pages-support-section">
                        <div className="container ">
                            <h3 className="pages-support-faq-section-heading text-centered">Treehouse Accounts</h3>
                            <div className="col-container ">
                                <div className="col col-50-tablet-desktop">
                                    <div className="pages-support-faq">
                                        <h5 className="pages-support-faq-title">How do I do things such as upgrade or
                                            update my billing information?</h5>
                                        <p className="pages-support-faq-description">You can find these options on
                                            your  page.
                                            If you need more help with upgrading, please watch this brief video which
                                            will show you

                                        </p>
                                    </div>
                                    <div className="pages-support-faq">
                                        <h5 className="pages-support-faq-title">How can I pause or cancel my
                                            account?</h5>
                                        <p className="pages-support-faq-description">
                                            For pausing or cancelling, you will need to click on the down arrow next to
                                            your profile picture and then select "Subscription". From there, you can
                                            scroll to the bottom of the page where there will be "Pause Subscription"
                                            and "Cancel Subscription" buttons.
                                        </p>
                                    </div>
                                    <div className="pages-support-faq">
                                        <h5 className="pages-support-faq-title">Can I gift a subscription to
                                            someone?</h5>
                                        <p className="pages-support-faq-description">Yes! We do offer gift certificates.
                                            Please email </p>
                                    </div>
                                </div>
                                <div className="col col-50-tablet-desktop">
                                    <div className="pages-support-faq">
                                        <h5 className="pages-support-faq-title">Can I use an internationally accepted
                                            debit or credit card to enroll?</h5>
                                        <p className="pages-support-faq-description">As long as your card is allowed to
                                            be used within the United States, yes!</p>
                                    </div>
                                    <div className="pages-support-faq">
                                        <h5 className="pages-support-faq-title">Do you offer a Group Membership at a
                                            discounted rate?</h5>
                                        <p className="pages-support-faq-description">We do offer group membership
                                            discounts. Please fill out the form  and
                                            someone from our Organizations team will follow up with you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=" pages-support-section">
                        <div className="container ">
                            <h3 className="pages-support-faq-section-heading text-centered">Learning Content</h3>
                            <div className="col-container ">
                                <div className="col col-50-tablet-desktop">
                                    <div className="pages-support-faq">
                                        <h5 className="pages-support-faq-title">How do I download videos for offline
                                            viewing?</h5>
                                        <p className="pages-support-faq-description">
                                        </p><p>To download videos en masse, you'll need to have iTunes installed.</p>
                                        <p>Once you've installed iTunes, simply follow the instructions below:</p>
                                        <ol>
                                            <li>On the far right of the course's overview page, select iTunes Feed
                                                option under Downloads;
                                            </li>
                                            <li>iTunes will open and show the name of the first video or the course name
                                                itself;
                                            </li>
                                            <li>Towards the top of iTunes select the Feed option to show all videos
                                                within the course;
                                            </li>
                                            <li>Download each video from that list as desired.</li>
                                        </ol>
                                        <p>If you don't have iTunes, or don't wish to install it, you can also download
                                            videos individually directly from the video page itself.</p>
                                        <ul>
                                            <li>Simply select the Downloads tab under the video and right-click either
                                                the HD or SD file and select the "Save as..." option.
                                            </li>
                                        </ul>
                                        <p></p>
                                    </div>
                                    <div className="pages-support-faq">
                                        <h5 className="pages-support-faq-title">How do I recommend new content/new
                                            suggestions?</h5>
                                        <p className="pages-support-faq-description">At this time you can email us with the
                                            subject line "Content Suggestion". We review all emails and make note each
                                            month of what our students are wanting to see. This helps shape our
                                            decisions about content and features in the near future!</p>
                                    </div>
                                </div>
                                <div className="col col-50-tablet-desktop">
                                    <div className="pages-support-faq">
                                        <h5 className="pages-support-faq-title"> What can I do if I’m stuck on a Code
                                            Challenge task?</h5>
                                        <p className="pages-support-faq-description">We advise that you first utilize
                                            our Community if you’re
                                            stuck on a task. Please be sure to include a link to the Code Challenge and
                                            confirm which task number you’re stuck on. Also, include a screenshot of
                                            your code within the Code Challenge text editor or a code sample in
                                            markdown. Feel free to send us an email us with a
                                            link to your post if you haven’t received a response within 24 business
                                            hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=" pages-support-section">
                        <div className="container ">
                            <h3 className="pages-support-faq-section-heading text-centered">Misc</h3>
                            <div className="col-container ">
                                <div className="col col-50-tablet-desktop">
                                    <div className="pages-support-faq">
                                        <h5 className="pages-support-faq-title">I have a great idea for an application
                                            or website, but need help on where to begin. Can you guys help me?</h5>
                                        <p className="pages-support-faq-description">We advise posting personal requests
                                            in our Community where our teachers and other
                                            students can provide you with some pointers on where to begin!</p>
                                    </div>
                                </div>
                                <div className="col col-50-tablet-desktop">
                                    <div className="pages-support-faq">
                                        <h5 className="pages-support-faq-title">I found a bug. Where can I report
                                            that? </h5>
                                        <p className="pages-support-faq-description">In the unlikely situation you
                                            stumble across a bug, go ahead and shoot us an email us with
                                            a link and a screenshot. If this bug hasn’t been reported before, we’ll
                                            award you with a special Exterminator badge as a thank you!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Box style={{background: 'black'}}>
                <img width={'100%'} height={"100%"} src={'https://designcode.io/images/mockups/mockup2-bg.svg'}/>
            </Box>
        </SplitContainer>
    );
});
