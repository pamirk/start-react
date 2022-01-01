import React, { memo } from "react";
import {
  Box,
  IconButton,
  Snackbar,
  SnackbarContent,
  Typography,
  makeStyles
} from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import { SnackbarOrigin } from "@material-ui/core/Snackbar";

const anchorOrigin: SnackbarOrigin = {
  vertical: "bottom",
  horizontal: "center"
};

const useStyles = makeStyles(theme => ({
  messageIcon: {
    marginRight: theme.spacing()
  }
}));

interface SnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

export default memo(({ open, onClose, message: messageTxt }: SnackbarProps) => {
  const classes = useStyles();
  const message = (
    <Box display="flex" alignItems="center">
      <ErrorIcon className={classes.messageIcon} />
      <Typography>{messageTxt}</Typography>
    </Box>
  );
  const action = [
    <IconButton
      key="close"
      aria-label="close"
      color="inherit"
      onClick={onClose}
    >
      <CloseIcon />
    </IconButton>
  ];
  return (
    <Snackbar autoHideDuration={6000} {...{ open, onClose, anchorOrigin }}>
      <SnackbarContent
        aria-describedby="notification"
        {...{ message, action }}
      />
    </Snackbar>
  );
});
