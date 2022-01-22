import React, {memo} from "react";
import {Box, Link, Typography,ListItem} from "@material-ui/core";

import {SplitContainer} from "../components";
import SupportIllustration from "./AboutIllustration";
import {Title} from "@material-ui/icons";

export default memo(() => {
    return (
        <SplitContainer>
            <div>
                <br/>
                <h2>Our Progress</h2>

                <Typography variant="body1" align="center">
                    Here’s some of the work we are actively doing internally to make Treehouse an inclusive and equitable place to work:
                </Typography>
                <h4>Improving Hiring</h4>
                <ListItem >We place emphasis on investing in womxn and people of color from local communities, to provide the opportunity for a career path with us and with partner companies.</ListItem>
                <ListItem >We anonymize job applications to hide gender, age, ethnicity, and educational background. This helps us reduce unconscious bias.</ListItem>
                <ListItem>Because we know there are many avenues to receive an education, we do not require college degrees or certifications as job qualifications.</ListItem>

                <br/>

                <h4>Creating an Equitable & Inclusive Environment</h4>
                <ListItem>In an effort to achieve our value of getting everyone to the same starting line, all employees are required to participate in a 5 part Equity, Diversity, and Inclusion training.</ListItem>
                <ListItem>We actively find and close unfair gender pay gaps through an annual compensation review.</ListItem>
                <ListItem>We work to understand and remove behaviors that hold women and people of color back in career progression.</ListItem>
                <ListItem>We provide programs to further our EDI education through Lunch & Learns and a monthly visual series of Installment on a variety of EDI concepts and celebrations.</ListItem>
                <ListItem>Our employees mean the world to us which means we want to make sure they’re happy and feel heard. For this reason, we partnered with TinyPulse to regularly check in on how folx are feeling as well as CultureAmp for annual surveys.</ListItem>


            </div>
            <Box style={{background: 'black'}} >
                <img width={'100%'}
                     height={"100%"}
                     src={'https://designcode.io/images/mockups/mockup2-bg.svg'}/>
            </Box>
        </SplitContainer>
    );
});
