import React, {memo} from "react";
import {Avatar, Box, Link, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";

import {SplitContainer} from "../components";
import SupportIllustration from "./AboutIllustration";

export default memo(() => {
    return (
        <SplitContainer>
            <div style={{height: '110%'}}>
                <List>
                    <ListItem>
                        <ListItemAvatar style={{padding: 10}}>
                            <img
                                src='https://d9hhrg4mnvzow.cloudfront.net/join.teamtreehouse.com/libraries/0e665896-treehouse-books_1041036000000000000028.png'/>
                        </ListItemAvatar>
                        <ListItemText primary="Course library"
                                      secondary="The Treehouse library houses all of our courses, tracks and workshops. Here students can browse by topic, language or content type, and find what they need to help them accomplish their learning goals."/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="Tech-focused"
                                      secondary="All Treehouse content is focused on technology and includes content that teaches mobile, front-end and back-end web development in a variety of programming languages. We structure our learning features with beginning developers in mind."/>

                        <ListItemAvatar style={{padding: 10}}>
                            <img
                                src='https://d9hhrg4mnvzow.cloudfront.net/join.teamtreehouse.com/libraries/e3f35b43-treehouse-laptop_103w04g03v04g000000028.png'/>
                        </ListItemAvatar>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar style={{padding: 10}}>
                            <img
                                src='https://d9hhrg4mnvzow.cloudfront.net/join.teamtreehouse.com/libraries/4fb36ac0-treehouse-learning_103w034000000000000028.png'/>
                        </ListItemAvatar>
                        <ListItemText primary="Learning tracks"
                                      secondary="Instead of wondering where to start, students can use tracks to master new subjects. Tracks contain curated collections of courses that lead students through topics in easy-to-digest stages."/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="Engaging and fun"
                                      secondary="Gamification of learning helps students stay motivated. Each time they pass a quiz, watch a video, or complete a course, students receive points which are tracked on their public Treehouse profile."/>
                        <ListItemAvatar style={{padding: 10}}>
                            <img
                                src='https://d9hhrg4mnvzow.cloudfront.net/join.teamtreehouse.com/libraries/8226f237-treehouse-courses_103m03u000000000000028.png'/>
                        </ListItemAvatar>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar style={{padding: 10}}>
                            <img
                                src='https://d9hhrg4mnvzow.cloudfront.net/join.teamtreehouse.com/libraries/50deafea-27374472-0-library-marketing-1-_10bk07e000000000000028.png'/>
                        </ListItemAvatar>
                        <ListItemText primary="Activity monitoring"
                                      secondary='Quickly see how your patrons are utilizing Treehouse with aggregated activity data. Adjustable timelines give insight into when members are most active. Activity feeds also allow you to see what content people are engaging with most.'/>
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="Exportable reports"
                                      secondary='If additional insights are needed, exportable reports allow you to further analyze patron usage and session metrics, giving you the opportunity to develop custom reporting for your board.'/>
                        <ListItemAvatar style={{padding: 10}}>
                            <img
                                src='https://d9hhrg4mnvzow.cloudfront.net/join.teamtreehouse.com/libraries/f3e6d156-27374467-0-library-marketing-2-_10bn060000000000000028.png'/>
                        </ListItemAvatar>
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar style={{padding: 10}}>
                            <img
                                src='https://d9hhrg4mnvzow.cloudfront.net/join.teamtreehouse.com/libraries/3e7f8ee9-27374462-0-library-marketing-3-_10bj081000000000000028.png'/>
                        </ListItemAvatar>
                        <ListItemText primary="Custom tracks"
                                      secondary="Create custom curriculum for library coding classes or community workforce initiatives. Tell our team of learning experts what you want to achieve, and we'll help you curate the most relevant Treehouse content for your community training goals."/>
                    </ListItem>

                </List>

                <div>
                    <List>
                        <ListItem><ListItemText primary="Android"/> </ListItem>
                        <ListItem><ListItemText primary="APIs "/></ListItem>
                        <ListItem><ListItemText primary="Business "/> </ListItem>
                        <ListItem><ListItemText primary="C#"/> </ListItem>
                        <ListItem><ListItemText primary="Computer Science"/> </ListItem>
                        <ListItem><ListItemText primary="CSS"/> </ListItem>
                        <ListItem><ListItemText primary="Data Analysis"/> </ListItem>
                        <ListItem><ListItemText primary="Databases"/> </ListItem>
                        <ListItem><ListItemText primary="Design"/> </ListItem>
                        <ListItem><ListItemText primary="Digital Literacy"/> </ListItem>
                        <ListItem><ListItemText primary="HTML"/> </ListItem>
                        <ListItem><ListItemText primary="iOS"/> </ListItem>
                        <ListItem><ListItemText primary="Java"/> </ListItem>
                        <ListItem><ListItemText primary="JavaScript"/> </ListItem>
                        <ListItem><ListItemText primary="Machine Learning"/> </ListItem>
                        <ListItem><ListItemText primary="PHP"/> </ListItem>
                        <ListItem><ListItemText primary="Quality Assurance "/> </ListItem>
                        <ListItem><ListItemText primary="Python#"/> </ListItem>
                        <ListItem><ListItemText primary="Ruby"/> </ListItem>
                        <ListItem><ListItemText primary="Security"/> </ListItem>
                        <ListItem><ListItemText primary="Swift"/> </ListItem>
                    </List>

                </div>
            </div>


            <Box style={{background: 'black'}}>
                <img width={'100%'} height={"100%"}
                     src={'https://d9hhrg4mnvzow.cloudfront.net/join.teamtreehouse.com/libraries/141de836-library-20-2_10000000xc0kw00001c01o.jpg'}/>
            </Box>
        </SplitContainer>
    );
});
