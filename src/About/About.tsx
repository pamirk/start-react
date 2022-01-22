import React, {memo} from "react";
import {Link, Typography} from "@material-ui/core";

import {SplitContainer} from "../components";
import SupportIllustration from "./AboutIllustration";
import {ImageTwoTone} from "@material-ui/icons";

export default memo(() => {
    return (
        <SplitContainer>
            <div>
                <h3>About us</h3>
                <Typography align="center">
                    {"Please contact us "}
                    {"."}
                    <br/>
                    {`Our mission is to diversify the tech industry through accessible education, unlocking the door to opportunity, and empowering people to achieve their dreams.`}

                    <br/>
                    {'We believe that achieving equity, diversity, and inclusion requires doing constant work to learn, grow, and change. We have a long way to go, but we are dedicated to building a more equitable, diverse, & inclusive environment and in the larger tech industry.'}
                </Typography>

                <h3>Empower your community</h3>
                <Typography align="center">Regardless of age, background or education, your library members can learn to code using Treehouse. That's because the Treehouse platform is specifically designed with new learners in mind. Content is broken down into digestible courses with interactive quizzes that reinforce learning. Your members will also have access to our active community to ensure they get the support they need to learn.</Typography>
                <Typography align="center">Treehouse has provided an easy and engaging way for our patrons to learn or sharpen coding skills. We feel this resource can help prepare them for great jobs in our tech-vibrant community.</Typography>
                <h3>Our Perks</h3>
                <Typography align="center">
                    Take care of your work and Treehouse takes good care of you. We believe in delight for your loved
                    ones as well as the Treehouse mission.
                </Typography>
                <h2>Online learning programs designed for your patrons</h2>
                <Typography align="center">Libraries across the country are using Treehouse to deliver on-demand training to their communities.</Typography>


            </div>
            <SupportIllustration/>
        </SplitContainer>
    );
});
