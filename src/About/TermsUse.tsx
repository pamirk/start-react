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
                        <li>You must not use this Website for anything that is unlawful or is otherwise prohibited by these Terms of Service and/or any notices elsewhere on this Website.</li>
                        <li>Treehouse advises that you seek professional advice before relying on any information on this Website. Under no circumstances will Treehouse be liable in any way for any information it provides on the Website or through the Services, including, but not limited to, any errors or omissions in any content and information, including but not limited to text, software, music, sound, photographs, graphics, video or other material (also known as “Content”), or any loss or damage of any kind incurred in connection with use of or exposure to any Content posted, emailed, accessed, transmitted, or otherwise made available via the Services.</li>
                        <li>When using this Website or the Services, you must not: defame, abuse, harass, stalk, threaten or otherwise violate the rights (such as rights of privacy and publicity) of others; publish, post, distribute or disseminate any defamatory, infringing, obscene, indecent, offensive or unlawful material or information; upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights or have received all necessary consents; upload files that contain viruses, corrupted files or any other similar software or programs that may damage the operation of another's computer; impersonate any person or entity, including without limitation any employee or representative of Company; post or transmit, or cause to be posted or transmitted, any communication or solicitation designed or intended to obtain password, account, or private information from any other user of the Services; run Maillist, Listserv, any form of auto-responder, or “spam” on the Services, or any processes that run or are activated while you are not logged on to the Website, or that otherwise interfere with or place an unreasonable load on the Services’ infrastructure or any third party websites or services; decompile, reverse engineer, or otherwise attempt to obtain the source code of the Services; delete any author attributions, legal notices or proprietary designations or labels in any file that is uploaded; falsify the origin or source of software or other material contained in a file that is uploaded; advertise or offer to sell any goods or services or conduct or forward surveys, competitions, or chain letters, or solicit donations; or download any file posted by another user of this Website that you know, or reasonably should know, cannot be legally distributed in such manner.</li>
                        <li>You will be responsible for withholding, filing, and reporting all taxes, duties and other governmental assessments, if any, associated with your activity in connection with the Services.</li>
                        <li>You represent and warrant Treehouse that you are of legal age to form a binding contract or have the consent of your parent or guardian to do so. You also certify that you are legally permitted to use and access the Services and take full responsibility for the selection and use of and access to the Services. This agreement is void where prohibited by law, and the right to access the Services is revoked in such jurisdictions.</li>
                        <li>If you are registering with the Website as a business entity, you represent that you have the authority to legally bind that entity and consent to share any employee information with Treehouse. If you are trading as a business, you must comply with and you are responsible for all laws applicable to your business.</li>
                        <li>If you link to the Website, Treehouse may revoke your right to so link at any time, at Treehouse’s sole discretion. Company reserves the right to require prior written consent before linking to the Website.</li>
                        <li>You will indemnify and hold Treehouse, its parents, subsidiaries, affiliates, officers, and employees harmless (including, without limitation, from all damages, liabilities, settlements, costs and attorneys’ fees) from any claim or demand made by any third party due to or arising out of your or your employees’ access to the Services, use of the Services, your violation of these Terms of Service , or the infringement by you or any third party using your account of any intellectual property or other right of any person or entity.</li>
                    </ol>
                </Typography>

            </div>
            <SupportIllustration/>
        </SplitContainer>
    );
});
