import React, {memo} from "react";
import {Link, Typography} from "@material-ui/core";

import {SplitContainer} from "../components";
import SupportIllustration from "./AboutIllustration";
import {ImageTwoTone} from "@material-ui/icons";

export default memo(() => {
    return (
        <SplitContainer>
            <div style={{height: '110%'}}>
                <h1>Terms INTRODUCTION</h1>

                <Typography align="left">
                    <ol>
                        <li>In order to use the Services, you will need to register and become a member ("Membership") if you wish to access the Services via this Website, your Membership is subject to Us’s subscription charges set out in your subscription plan. If you wish to change your subscription plan, at any time, please notify us and we will update your membership package, which will take effect at the end of your current commitment period (which may be either a yearly or monthly). Changes will be subject to these Terms of Service (and in particular paragraph 4.2).</li>
                        <li>Membership requires that you provide Us with information about you via our registration form. For more information on our use of this information is set out in our Privacy Policy which can be found</li>
                        <li>When registering, you must provide true, accurate, current and complete information about yourself. You are responsible for making sure this information is updated so that it is true, accurate, current and complete. If any information provided by you is not true, accurate, current and complete, Us has the right to cancel your membership and refuse any and all current or future use of this Website.</li>
                        <li>Registration requires a valid email address and unique password. To create a secure password, choose a password that uses a combination of letters, upper case and lower case, numbers, and symbols. For example, $Mydog2!. Avoid choosing obvious words or dates such as a nickname or your birth date. You are responsible for keeping your username and password confidential and secure. We strongly recommend that you log-off from the Website when your session is complete to prevent unauthorized access to your information.</li>
                        <li>You must not share your user name or password. If you believe there has been any unauthorized use of username or password, this must be reported to help@teamUs.com as soon as you are aware of such use and Us will, as soon as reasonably possible, cancel your user name and/or password. We will work with you to have new credentials (username and password) issued to you.</li>
                        <li>Us may, for security or other similar reasons, require that you provide information to us confirming your identity. In addition, we may also require that you change your user name and/ or password or other  which facilitates access to this Website or its Services.</li>
                        <li>Us reserves the right to cancel your Membership access without notice if we become aware of any breach of these Terms of Service by you.</li>
                        <li>Us will send you a confirmation e-mail, following registration and this will confirm your Membership, allowing you to access the Services available via the Website. You may cancel your membership at any time  – see section 7 for details of cancellation.</li>
                    </ol>
                </Typography>

            </div>
            <SupportIllustration/>
        </SplitContainer>
    );
});
