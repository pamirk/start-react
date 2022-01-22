import React, {memo} from "react";
import {Link, Typography} from "@material-ui/core";

import {SplitContainer} from "../components";
import SupportIllustration from "./AboutIllustration";
import {ImageTwoTone} from "@material-ui/icons";

export default memo(() => {
    return (
        <SplitContainer>
            <div style={{height: '110%'}}>
                <h1>Terms of Service</h1>

                <Typography align="center">
                    {"Please contact us "}
                    {"."}
                    <br/>
                    These terms and conditions ("Terms of Service") govern your use of this website teamtreehouse.com ("Website"). In these Terms of Service, Treehouse Island, Inc. is referred to as the “Company", “Treehouse”,” “us,” or “we.”

                    By using this Website and its services you will be bound by these Terms of Service and the Company's privacy policy which can be found at https://teamtreehouse.com/privacy ("Privacy Policy"). If you do not agree to these Terms of Service and/or the Privacy Policy you must not use this Website or any service provided via it. Your use of the Company’s Website and Services (as defined below) means you agree to all the terms and conditions of this agreement.


                    <br/>
                    {'We believe that achieving equity, diversity, and inclusion requires doing constant work to learn, grow, and change. We have a long way to go, but we are dedicated to building a more equitable, diverse, & inclusive environment and in the larger tech industry.'}
                </Typography>

                <h3>Empower your community</h3>
                <Typography align="center">
                    Questions or Concerns
                    If you have any questions or concerns, please send us a detailed message to help@teamtreehouse.com or to our address below. We will make every effort to resolve your concerns.

                    Treehouse Island Inc.
                    9450 Southwest Gemini Drive
                    PMB 90505
                    Beaverton, OR 97008, USA
                    1 (800) 928 2130</Typography>


            </div>
            <SupportIllustration/>
        </SplitContainer>
    );
});
