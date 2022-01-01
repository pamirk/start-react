import React from "react";
import {Typography} from "@material-ui/core";
import {SplitContainer, Error} from "./components";

export default () => {
    return (
        <SplitContainer>
            <Typography variant="h3" align="center">
                Page not found
            </Typography>
            <Error/>
        </SplitContainer>
    );
};
