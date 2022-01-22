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
                        <li>Welcome to Treehouse. These terms and conditions apply to the services available from and
                            related to the domain and sub-domains of the Website, including without limitation any
                            Treehouse-owned or third-party communication channels accessible from or related to the
                            content of the Website (together with the Website, the “Services”).
                        </li>
                        <li>For as long as Treehouse continues to offer the Services, it shall deliver, update, improve
                            and expand the Services as it deems appropriate. As a result, Treehouse allows you to access
                            the Website as it is and as available on any day, and it has no other obligations, except as
                            expressly stated in these Terms of Service. Treehouse may modify, replace, refuse access to,
                            suspend or discontinue the Website, partially or entirely, or change and modify prices for
                            all or part of the Services in our sole discretion. Unless otherwise noted, all of these
                            changes are effective once posted on our site or by direct communication to you. Your use of
                            the Services following such posting or communication constitutes your acceptance of the
                            updated terms and conditions of use.
                        </li>
                        <li>Nothing in these Terms of Service is intended to, or shall be deemed to, establish any
                            partnership or joint venture between any of the parties, create an agency relationship, or
                            authorize any party to make or enter into any commitments for or on behalf of any other
                            party.
                        </li>
                        <li>Treehouse does not knowingly collect or solicit personal information from anyone under the
                            age of 16 or knowingly allow such persons to register for the Services without the express
                            consent of such person’s parent or guardian. The Services are not intended for use by anyone
                            under the age of 13. If you are under 13, please do not register for or access the Services.
                            If you are under 16 and wish to use the Services, please have your parent or guardian
                            contact us at help@teamtreehouse.com. Until we receive consent from your parent or guardian,
                            do not attempt to register for the Services or send any information about yourself to us,
                            including your name, address, telephone number, or email address. In the event that we learn
                            that we have collected personal information from a child under age 16 without verification
                            of consent from a parent or guardian, we will delete that information as quickly as
                            possible. If you believe your child has submitted information to Treehouse without your
                            consent and is under 16, please contact us at help@teamtreehouse.com.
                        </li>
                        <li>If you are an institution, such as a school, workforce board or other similar entity.
                            seeking to utilize the Services for educational purposes, you may provide your students with
                            access to the Services by registering for an organizational subscription. As noted
                            previously within these Terms of Service, the Services are not intended for use by anyone
                            under the age of 13. Treehouse requires that parental consent be obtained for anyone under
                            the age of 16. Please be advised, where an institution’s registration for a group
                            subscription is to benefit its students, TREEHOUSE RELIES SOLELY ON THE INSTITUTION TO
                            OBTAIN AND PROVIDE APPROPRIATE CONSENT, IF NEEDED, FOR THE COLLECTION AND USE OF PERSONAL
                            INFORMATION FROM STUDENTS. If you are an institution, you represent and warrant that you (i)
                            are not using the Services for anyone under the age of 13; (ii) have obtained all necessary
                            consents required to enable Treehouse to receive this this information from students before
                            allowing students under 16 to access the Services, (iii) have provided such disclosures as
                            you deem appropriate, which may include these Terms of Service and our Privacy Policy, to
                            students and parents regarding how you share of personal information with Treehouse and how
                            Treehouse uses such information, and (iv) have all rights necessary to grant Treehouse a
                            non-exclusive, royalty-free, worldwide license to use, transmit, distribute, modify,
                            reproduce, display, create derivative works of, store and process students’ personal
                            information solely for the purposes of (A) providing the Services as contemplated in these
                            Terms of Service, and (B) enforcing Treehouse’s rights under these Terms of Service. You
                            agree to indemnify, defend and hold harmless Treehouse and its parents, subsidiaries,
                            affiliates, officers, employees, successors and assigns from and against any and all loss or
                            damage (including reasonable attorneys’ fees) resulting from any misrepresentation, or any
                            non-fulfillment of any representation, responsibility, covenant or agreement on your part,
                            as well as any and all acts, suits, proceedings, demands, assessments, penalties, judgments
                            of or against the Company relating to or arising out of the activities of you or your
                            students.
                        </li>
                        <li>If you are participating in the Compass program, including the use of assessments and other
                            evaluations of individual participant skill, you acknowledge and agree that the Compass
                            program is intended only as a tool, and nothing is intended to replace your or your users’
                            independent judgment. Treehouse is not liable for any damages arising out of reliance on the
                            information contained in or derived from the Compass program or any hiring, promotion, or
                            termination decision made directly or indirectly as a result of the skill assessments or
                            evaluations made available through the Compass program. You agree not to bring, file, or
                            participate in any claim, suit, or complaint against Treehouse as a result of any hiring or
                            termination decision made by you or by any other person. You represent and warrant that you
                            will use the Compass program only in accordance and compliance with all applicable laws and
                            government regulations, including, without limitation, the Americans With Disabilities Act
                            of 1990, as amended (the “ADA”).
                        </li>
                        <li>Users acknowledge and agree that Treehouse is not involved in the actual transaction between
                            institutional users and their employees, contractors or candidates for positions, and
                            Treehouse has no control over the quality, safety or legality of the institutions’ hiring,
                            promotion or termination process. TREEHOUSE DISCLAIMS ANY AND ALL LIABILITY RELATED TO THE
                            RECRUITMENT, HIRING, PROMOTION, AND TERMINATION PROCESSES, AS WELL AS THE NON-COMPLIANCE OF
                            FEDERAL AND STATE EMPLOYMENT OBLIGATIONS, REGULATIONS AND GUIDELINES BY USERS.
                        </li>
                    </ol>
                </Typography>

            </div>
            <SupportIllustration/>
        </SplitContainer>
    );
});
