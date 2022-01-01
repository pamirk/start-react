import React, { useEffect, useState } from "react";
import * as firebase from "firebase/app";

import { SIGN_IN_EMAIL_KEY, withUnprotection } from "../components/AuthContext";
import { Error, Loading, Routes, SplitContainer } from "../components";
import AuthError from "./AuthError";
import Email from "./Email";

const defaultEmail = localStorage.getItem(SIGN_IN_EMAIL_KEY);

export default withUnprotection(() => {
  const [error, setError] = useState<null | string>(null);
  const [email, setEmail] = useState(defaultEmail);
  useEffect(() => {
    (async () => {
      if (email && error === null) {
        try {
          await firebase
            .auth()
            .signInWithEmailLink(email, window.location.href);
          if (window.location.search.includes(`r=${Routes.YOUTUBE_FRIENDS}`)) {
            window.location.href = `${window.location.origin}${Routes.YOUTUBE_FRIENDS}`;
          } else {
            window.location.href = `${window.location.origin}${Routes.ACCOUNT}`;
          }
        } catch (e) {
          setError(e && e.message ? e.message : "An error happened");
        }
      }
    })();
  }, [email, error]);
  if (error || !email) {
    return (
      <SplitContainer>
        {error !== null && <AuthError {...{ error }} />}
        {!email && <Email onSubmit={e => setEmail(e)} />}
        <Error warning={error === null} />
      </SplitContainer>
    );
  }
  return <Loading />;
});
