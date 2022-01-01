import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

import { Button } from "../components";

interface ErrorDialogProps {
  open: boolean;
  onClose: () => void;
}

export default ({ open, onClose }: ErrorDialogProps) => {
  return (
    <Dialog aria-labelledby="an-error-happened" {...{ open, onClose }}>
      <DialogTitle id="an-error-happened">
        An unexpected error happened
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please your internet connexion and try again. If the problem persist,
          please contact us.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button href="mailto:wcandillon@gmail.com">Contact support</Button>
        <Button onClick={onClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
