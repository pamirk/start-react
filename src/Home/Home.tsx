import React, { useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Dialog, Typography } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

import {
  BorderedBox,
  Button,
  Lessons,
  Link,
  Routes,
  Touchable,
  YouTubePlayer,
  ɸ
} from "../components";
import Hero from "./Hero";

const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse"
    }
  },
  left: {
    flex: ɸ,
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flex: 1,
      textAlign: "center"
    }
  },
  right: {
    flex: 1 - ɸ,
    padding: theme.spacing(2),
    position: "relative"
  },
  watchIntro: {
    marginLeft: theme.spacing(1),
    marginTop: 0,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: theme.spacing(1)
    }
  }
}));

export default () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const { openModal, closeModal } = useMemo(
    () => ({
      openModal: () => setOpen(true),
      closeModal: () => setOpen(false)
    }),
    []
  );
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        marginTop={8}
        marginBottom={8}
        className={classes.container}
      >
        <div className={classes.left}>
          <Typography variant="h3">Build Delightful</Typography>
          <Typography variant="h3">Gestures and Animations</Typography>
          <Box marginTop={2} marginBottom={2}>
            <Typography>
              Learn to leverage the power of declarative gestures and animations
              in React Native to build user experiences that run at 60 fps, even
              on low-end devices.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            width="fit-content"
            marginLeft={{ xs: "auto", md: 0 }}
            marginRight={{ xs: "auto", md: 0 }}
          >
            <Button color="primary" to={Routes.SIGN_IN}>
              {"Get Started for $9 a Month"}
            </Button>
            <Button onClick={openModal} className={classes.watchIntro}>
              Watch Intro
            </Button>
          </Box>
        </div>
        <Touchable className={classes.right} onClick={openModal} disableRipple>
          <Hero />
        </Touchable>
      </Box>
      <Dialog
        // @ts-ignore
        TransitionComponent={Transition}
        keepMounted
        onClose={closeModal}
        aria-labelledby="Learn React Native Declarative Gestures and Animations"
        maxWidth={false}
        {...{ open }}
      >
        <YouTubePlayer id="kq19l1avxq" playing={open} />
      </Dialog>
      <Box marginBottom={2}>
        <BorderedBox padding={2}>
          <Typography style={{ fontWeight: 500 }}>
            Reanimated 2 alpha is out.
          </Typography>
          <Typography>
            <Link to={Routes.REANIMATED2}>Learn about the new API.</Link>
          </Typography>
        </BorderedBox>
      </Box>
      <Lessons course="gestures-and-animations" />
      <Lessons course="gestures-and-animations-2" />
      <Box marginBottom={2}>
        <BorderedBox padding={2}>
          <Typography style={{ fontWeight: 500 }}>Looking for more?</Typography>
          <Typography>
            <Link to={Routes.REANIMATED2}>Learn about Reanimated 2.</Link>
          </Typography>
        </BorderedBox>
      </Box>

      <Box>

        4. CHARGES AND PAYMENT
        Charges are linked to the individual or group membership package to which you subscribe. The terms of
        your Membership are incorporated in these Terms of Service by reference as if fully set forth herein.
        Your Membership will automatically renew and you will be charged in advance of your RENEWED MEMBERSHIP
        START DATE until your membership is cancelled. You may notify us of your wish to cancel your Membership
        at any time at https://teamtreehouse.com/account/enrollment, but your cancellation will not take effect
        until the end of your current commitment period (which may be either a yearly or a monthly period).
        ADDITIONAL TERMINATION PROVISIONS MAY BE FOUND IN SECTION 7 OF THESE TERMS OF SERVICE. Annual
        subscriptions will renew on the one-year anniversary of the start of your current annual membership term
        and will be effective for an additional year-long term unless cancelled prior to renewal. Monthly
        subscriptions will renew on the one-month anniversary of the start of your current monthly membership
        term and will be effective for an additional month-long term unless cancelled prior to renewal. Details
        of charges are shown within the sign-up process and can be found in
        https://teamtreehouse.com/subscribe/new?trial=yes. SUBSCRIPTION PRICES MAY CHANGE AND WILL RENEW AT THE
        THEN-APPLICABLE RATE. In the event of a material change in the terms of the automatic renewal, we will
        provide you with notice of the material change and provide information regarding how to cancel your
        Membership in a manner that is capable of being retained by you. All charges are in US Dollars. Any
        reduction in the applicable membership price (for example, where you downgrade to a lower-priced package
        or reduce the number of users on your account) will take effect in your next membership payment period
        following notification. Any increase in the applicable membership price (for example, where you upgrade
        your package or add additional users) will take effect from the date of notification (so that a pro-rata
        payment shall be made for the remainder of the current payment period, with the full payment to be made
        from the beginning of the following plan period). Your membership period begins on the date on which you
        register for the Services and finishes on the day before that calendar date the following period.
        Payment for all charges are payable upon registration or the relevant periodic payment date. You can pay
        membership fees by any MasterCard, Visa, or American Express credit card; PayPal; or any other payment
        methods the company accepts. Your payment details will be encrypted to minimize the possibility of
        unauthorized access or disclosure. At the time of registration, you will be asked to provide
        credit/debit card details. In the event that Treehouse is unable at any time to obtain payment for any
        charges using credit card details, Treehouse may freeze your account until it has received payment in
        full.
        Your Membership may start with a free trial. The length and terms of our free trials are set out in
        https://teamtreehouse.com/subscribe/new?trial=yes. The Company reserves the right, in its absolute
        discretion, to determine your eligibility for a free trial, and to withdraw or to modify a free trial at
        any time without prior notice and with no liability. We require that you provide payment details to
        start a free trial. At the end of your free trial, Treehouse will automatically start to charge you for
        the membership package associated with your free trial on the first day following the end of the free
        trial period, and continuing on a recurring yearly or monthly basis, depending on the length of your
        subscription period. By providing your payment details in connection with a free trial registration, you
        agree that we can charge you as indicated herein. If you do not want us to charge you, you must cancel
        your membership at https://teamtreehouse.com/account/enrollment before the end of your free-trial. See
        section 7 for additional details of cancellation. You will not receive a notice from us that your free
        trial period has ended or that the paying portion of your membership has begun.
        You may be eligible for a discount on your membership fees in accordance with our referral program, the
        terms of which are set out in https://teamtreehouse.com/account/referrals and any other discount program
        that we may implement from time to time. Treehouse reserves the right, in its absolute discretion, to
        determine your eligibility for any discounts, and to withdraw or to modify a discount program at any
        time without prior notice and with no liability. In connection with our referral program, you will not
        receive a notice from us that a referred member’s account has been inactivated, and any discount
        associated with an inactivated member account will cease to apply as of your next membership payment
        period after such inactivation becomes effective.
        5. DEALINGS WITH THIRD PARTIES
        Treehouse is not an agent of any third party or any party named or linked to this Website ("Third
        Parties") and does not have any authority to act for such Third Parties. Treehouse does not control or
        endorse and is not responsible or liable for any Content, advertising, products or other materials on or
        available from such Third Parties.
        In certain situations, third party businesses may provide services that are available to you through
        Treehouse Services. We do not control any such third party service providers. You agree that we are not
        responsible for the availability or content of any such third party sites, or the services they provide,
        which shall be governed by the any terms and conditions or privacy policy of that third-party business.
        Your use of third party sites and services is at your own risk. You agree to comply with the relevant
        terms and conditions of any such third party service provider.
        As part of the Techdegree program, Treehouse may engage certain individuals as independent contractors
        to provide mentoring and support services to you. You acknowledge and agree that Treehouse does not
        control the work or the services provided by such independent contractors, is not responsible for their
        supervision or hiring, and that such individuals are not agents of Treehouse nor do they have the power
        to bind Treehouse. Treehouse shall not be liable for the actions or inaction of any such individual.
        You agree that (to the maximum extent permitted by applicable law) Treehouse, our officers, directors
        and employees, shall have no liability to you in relation to any dispute which you may have with a Third
        Party, one or more of your customers, and/or any other users of this Website.
        6. INTELLECTUAL PROPERTY
        You acknowledge and agree that all Content provided on the Website or through the Services, contained in
        sponsor advertisements or, presented to you by Treehouse, its partners or advertisers, is protected by
        copyrights, trademarks, service marks, patents, or other proprietary rights and laws. You shall abide by
        all copyright notices, trademark rules, information, and restrictions contained in any Content accessed
        through the Services, and except as expressly permitted herein, shall not use, copy, reproduce, modify,
        translate, publish, broadcast, transmit, distribute, perform, upload, display, license, sell or
        otherwise exploit for any purposes whatsoever any Content or third party submissions or other
        proprietary rights not owned by you: (i) without the express prior written consent of the respective
        owners, and (ii) in any way that violates any third party right.
        You acknowledge and agree that you are permitted to review, print and make one copy, for your personal
        use, of the Content (and other items displayed on the Website for download), provided that you maintain
        all copyright and other notices contained in such Content. You shall not store any significant Content
        in any form.
        Treehouse does not claim ownership of any Content that you post on the Website or through the Services.
        Instead, you hereby grant Treehouse a non-exclusive, fully paid and royalty-free, transferable,
        sub-licensable, perpetual, worldwide license to use the Content that you post on the Website or through
        the Services, subject to our Privacy Policy which can be found at https://teamtreehouse.com/privacy.
        7. TERMINATION
        Without prejudice to any remedy that Treehouse may have against you, we may terminate or suspend with
        immediate effect and without notice, your access to and use of this Website and your Membership if:
        We do not receive timely payment under your subscription;
        We reasonably believe that you have breached any of these Terms of Service;
        We are unable to verify the accuracy or validity of any information provided by you;
        Or we suspect fraudulent, abusive or illegal activity by you.
        Should you object to any of these Terms of Service, or any subsequent changes to them, or become
        dissatisfied with this Website in any way, your only recourse is to immediately discontinue to access or
        use this Website.
        You may notify us of your wish to cancel your Membership at any time at
        https://teamtreehouse.com/account/enrollment, but your cancellation will not take effect until the end
        of your current commitment period (which may be either yearly or monthly). You will not be entitled to a
        refund for any fees already paid.
        You may notify us of your wish to reduce the number of additional users attached to your account or to
        downgrade to a different package at any time at https://teamtreehouse.com/account/enrollment, but such
        reduction will not take effect until the end of your current commitment period (which may be either
        yearly or monthly). You will not be entitled to a refund for any fees already paid in respect of such
        users or enhanced package, in accordance with section 4.2.
        Cancellation in respect of any individual online conference or Q&A session comprised in the Services
        will be accepted at https://teamtreehouse.com/dashboard at any time up to 24 hours before the intended
        starting time for such conference or session without affecting the number of conferences or sessions
        available to you under your package allowance. Cancellation after 24 hours before the intended starting
        time will reduce the number of conferences or sessions available as if such conference or session had
        gone ahead as planned.
        8. WARRANTY DISCLAIMER AND LIMITATION OF LIABILITY
        Treehouse has no special relationship with or fiduciary duty to you. You acknowledge that Treehouse has
        no control over, and no duty to take any action regarding: (i) which users gain access to the Services;
        (ii) what Content you access via the Services; (iii) what effects the Content may have on you; (iv) how
        you may interpret or use the Content; (v) or what actions you may take as a result of having been
        exposed to the Content. You release Treehouse from all liability for you having acquired or not acquired
        Content through the Services. The Services may contain, or direct you to websites containing,
        information that some people may find offensive or inappropriate. THE SERVICES, CONTENT, WEBSITE AND ANY
        SOFTWARE ARE PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
        INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        NON-INFRINGEMENT, OR THAT USE OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. SOME STATES DO NOT
        ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
        IN NO EVENT SHALL TREEHOUSE OR ITS SUPPLIERS, OR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR
        AGENTS BE LIABLE WITH RESPECT TO THE WEBSITE OR THE SERVICES OR THE SUBJECT MATTER OF THIS AGREEMENT
        UNDER ANY CONTRACT, NEGLIGENCE, TORT, STRICT LIABILITY OR OTHER LEGAL OR EQUITABLE THEORY (I) FOR ANY
        AMOUNT IN THE AGGREGATE IN EXCESS OF THE GREATER OF THE FEES PAID BY YOU FOR THE SERVICES PURCHASED
        THROUGH THE WEBSITE DURING THE SIX-MONTH PERIOD PRECEDING THE APPLICABLE CLAIM; (II) FOR ANY SPECIAL,
        INDIRECT, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER; (III) FOR DATA LOSS OR
        COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; (IV) FOR ANY MATTER BEYOND COMPANY’S REASONABLE
        CONTROL; OR (V) FOR ANY ACTIONS OF, OR SERVICES PROVIDED BY, THIRD-PARTY SERVICE PROVIDER BUSINESSES OR
        INDEPENDENT CONTRACTORS PROVIDING SERVICES ON BEHALF OF THE COMPANY. SOME STATES DO NOT ALLOW THE
        EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS AND EXCLUSIONS
        MAY NOT APPLY TO YOU.
        9. AMENDMENT TO THESE TERMS AND CONDITIONS
        Treehouse reserves the right to amend and alter these Terms of Service and any Content or information
        contained on the Website at any time. In the event these Terms of Service are altered Treehouse will
        post the amended Terms of Service on this Website. Changes will apply from the date of posting.
        If after the Terms of Service and/or the Privacy Policy https://teamtreehouse.com/privacy have been
        amended or altered you do not agree to their terms, you must stop using this Website.
        10. TECHDEGREE PROGRAM CODE OF CONDUCT
        In addition to the other provisions of these Terms of Service, the following Code of Conduct applies to
        your participation in any of the Company’s Techdegree Programs:
        Students have the right to express themselves and participate freely in our online Techdegree Programs.
        However, they are expected to treat each other and our staff and independent contractors with courtesy
        and respect. Offensive or inappropriate language is not to be used in any form of communication,
        including without limitation emails, discussion postings, group projects, or submitted assignments. All
        course-related forums and other channels of communication are reserved for postings related to course
        work only. Postings of a personal or non-academic nature are not permitted and may be removed.
        Academic dishonesty is unacceptable and will not be tolerated. Cheating, forgery, plagiarism, and
        collusion in dishonest acts undermine Treehouse’s educational mission and students’ personal and
        intellectual growth. You are expected to bear individual responsibility for your work and to uphold our
        ideals of academic integrity. Examples of academic dishonesty include:
        Copying from others on a quiz, test, examination, or project;
        Allowing another student to copy your work on a quiz, test, exam, or project;
        Having others complete any quiz, test, exam, or project on your behalf;
        Buying or using any work product from an internet source or other person or company or taking any work
        of another, even with permission, and presenting the work as your own;
        Excessive revising or editing by another that substantially alters your final work;
        Giving other students information that allows the student an undeserved advantage on a quiz, test, exam,
        or project;
        Taking and using the words, work, or ideas of others and presenting any of these as your own work. This
        applies to all work generated by another, whether it be computer code, oral or written work, and whether
        used intentionally or unintentionally.
        Any violation of this Code of Conduct, including if Treehouse reasonably suspects that you have engaged
        in any academic dishonesty, will give rise to our right to immediately terminate or suspend your
        Membership without refund of fees already paid, along with any other remedies we may have against you
        for violation of these Terms of Service.
        Students who commit an act that constitutes academic dishonesty may invoke the “Regret Clause” by
        bringing it to the attention of Treehouse staff within 24 hours of committing the act. Doing so will
        result in having to redo any work associated with the act but the student will not have their Membership
        terminated or suspended except in the case of repeated acts.
        11. GENERAL
        While Treehouse will try to provide you with uninterrupted access to this Website and its Services, we
        may need to withdraw, modify, discontinue or suspend (temporarily or permanently) one or more aspects of
        this Website where Treehouse has a legal, technical or other good reason to do so (including technical
        difficulties experienced by us or any Internet infrastructure). However, Treehouse will try, wherever
        possible, to give reasonable notice of our intention to do so.
        Treehouse reserves the right to withhold, remove and or discard any Content available as part of your
        account, including any Content contributed by you, with or without notice if deemed by us to be contrary
        to these Terms of Service. Treehouse has no obligation to store, maintain or provide you a copy of any
        Content that you provide when using the Services.
        If Treehouse fails to exercise or enforce a right under these Terms of Service that failure shall not
        constitute a waiver of such right or provision.
        If any provision of these Terms of Service is found by a court of competent jurisdiction to be invalid,
        that provision shall be deemed severed and the validity and enforceability of the remaining provisions
        shall not be affected. The parties nevertheless agree that the court should endeavor to give effect to
        the parties' intentions as reflected in the provision.
        These Terms of Service shall be governed by and construed in accordance with the laws of the State of
        Oregon, without regard to the conflict of laws provisions thereof. Both parties submit to the
        non-exclusive jurisdiction and venue in the United States Federal Courts, District of Oregon.
        These Terms of Service set out the Treehouse’s entire agreement and understanding with respect to the
        subject matter of these Terms of Service and supersedes any and all representations, communications or
        prior agreements (written or oral) made to you.
        Each party acknowledges that on entering into these Terms of Service, it does not rely, and has not
        relied, upon any representation (whether negligent or innocent), statement or warranty made or agreed to
        by any person (whether a party to these Terms of Service or not) except those expressly set out in these
        Terms of Service.
        Unless expressly provided in the Terms of Service no term is enforceable by any person who is not a
        party to it.
        You must report any violations of these Terms of Service to help@teamtreehouse.com.

      </Box>
    </Container>
  );
};
