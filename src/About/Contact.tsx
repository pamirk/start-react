import React, {memo} from "react";
import {Box, Link, Typography} from "@material-ui/core";

import {SplitContainer} from "../components";
import SupportIllustration from "./AboutIllustration";

export default memo(() => {
    return (
        <SplitContainer>
            <div>
                <h1>Get in touch</h1>

                <Typography variant="h4" align="left">
                We’re eager to hear from you. See below for contact information specific to your needs.
                </Typography>
                <Typography align="left">
                    Contacting the Staff
                    <br/>
                    Tap or click any byline for that writer’s email address, social media accounts, and latest stories.
                    <br/>
                    You can also peruse our staff listing for much of that information. Our email addresses tend to be short,
                    <br/>
                    but in a pinch, you can reach us at [first initial][lastname]@.

                </Typography>

                <Typography align="left">
                    <h2>Customer Support</h2>
                    <div className="col-container ">
                        <div >
                            <h5 >Having issues?</h5>
                            <p >Some of the most frequently asked questions
                                from students are listed below with helpful answers from our Support team. If you need
                                help with something not answered below, check out the
                                Community. It's an active, helpful
                                community of fellow  students. You can also visit our
                               Knowledge Base, which has
                                answers for many common questions about us.<br/><br/>
                                    If you don't find an answer below or on the our Forum, we'd love the
                                    opportunity to help you. You can get in touch with our Support team directly by
                                    clicking the button below.</p>
                            <a className="button button-primary button-large pages-support-hero-cta async-modal-trigger"
                               href="/contact" data-async="true" data-stack="true" data-featurette="async-modal-trigger"
                               data-src="/contact" data-target="contact_form" id="featurette-4">Contact Support</a>
                        </div>
                        <div className="col col-50-tablet-desktop">
                            <h5 className="pages-support-faq-title">Report a bug</h5>
                            <p className="pages-support-faq-description" data-controller="time-zone">Shoot us an email
                                at <a href="mailto:frontendwebdevs@gmail.com">frontendwebdevs@gmail.com</a> with a link and a
                                screenshot. If this bug hasn’t been reported before, we’ll award you a special
                                Exterminator badge as a thank you!<br/><br/>
                                    Response times from our Support team are fastest from <time
                                    dateTime="2022-01-17T17:00:00Z" data-local="time" data-format="%I:%M %P"
                                    title="January 17, 2022 at 10:00pm PST" data-localized=""
                                    aria-label="10:00 pm">10:00 pm</time>-
                                    <time dateTime="2022-01-18T01:00:00Z" data-local="time" data-format="%I:%M %P"
                                          title="January 18, 2022 at 6:00am PST" data-localized=""
                                          aria-label="06:00 am">06:00 am
                                    </time>
                                    <span data-target="time-zone.timezone">GMT+5</span>, <time
                                    dateTime="2022-01-17T17:00:00Z" data-local="time" data-format="%A"
                                    title="January 17, 2022 at 10:00pm PST" data-localized=""
                                    aria-label="Monday">Monday</time> through <time dateTime="2022-01-21T17:00:00Z"
                                                                                    data-local="time" data-format="%A"
                                                                                    title="January 21, 2022 at 10:00pm PST"
                                                                                    data-localized=""
                                                                                    aria-label="Friday">Friday</time>.
                                    Support requests submitted outside those times may receive delayed responses.</p>
                        </div>
                    </div>
                </Typography>
            </div>
            <Box style={{background: 'black'}} >
                <img width={'100%'}
                     height={"100%"}
                     src={'https://designcode.io/images/mockups/mockup2-bg.svg'}/>
            </Box>
        </SplitContainer>
    );
});
