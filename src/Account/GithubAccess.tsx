import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Link,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@material-ui/core";

import { Button, Skeleton } from "../components";

import {
  GITHUB_LOADING_STATE,
  GithubContext,
  REPO_INVITED,
  REPO_LOADING,
  Repository
} from "../components/GithubContext";

import {
  addGithubAccess,
  addGithubUsername,
  getGithubAccesses,
  removeGithubAccess
} from "../components/API";

import Section from "./Section";

interface GithubAccessProps {
  defaultUserName: string;
}

export default ({ defaultUserName }: GithubAccessProps) => {
  const [repos, dispatchRepos] = useContext(GithubContext);
  const [defaultGithubUsername, setDefaultGithubUsername] = useState(
    defaultUserName
  );
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(defaultUserName);
  const isLoading =
    loading ||
    Object.keys(repos)
      .map(repo => repos[repo as Repository])
      .filter(repo => repo === REPO_LOADING).length === 1;
  const onChange = ({ target: { value } }: { target: { value: string } }) =>
    setUsername(value);
  const submit = async () => {
    setLoading(true);
    await addGithubUsername(username, defaultGithubUsername);
    setDefaultGithubUsername(username);
    setLoading(false);
  };
  useEffect(() => {
    (async () => {
      if (defaultGithubUsername !== defaultUserName) {
        dispatchRepos(GITHUB_LOADING_STATE);
        const result = await getGithubAccesses();
        dispatchRepos(result);
      }
    })();
  }, [dispatchRepos, defaultGithubUsername, defaultUserName]);
  const disabled = isLoading || username === defaultGithubUsername;
  const toggleAccess = async (repo: string, checked: boolean) => {
    dispatchRepos({ ...repos, [repo]: undefined });
    try {
      if (checked) {
        await addGithubAccess(repo);
      } else {
        await removeGithubAccess(repo);
      }
      dispatchRepos({ ...repos, [repo]: checked ? null : false });
    } catch {
      dispatchRepos({ ...repos, [repo]: false });
    }
  };
  return (
    <>
      <Section>
        <Box>
          <Typography gutterBottom>
            Your Github username&nbsp;
            <span style={{ fontWeight: 500 }}>(not email):</span>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box marginRight={1}>
            <TextField
              id="username"
              type="text"
              name="username"
              variant="outlined"
              placeholder="Github Username"
              inputProps={{ "aria-label": "github username" }}
              value={username}
              onChange={onChange}
              disabled={isLoading}
            />
          </Box>
          <Button
            color="primary"
            type="submit"
            onClick={submit}
            {...{ disabled, loading }}
          >
            Save
          </Button>
        </Box>
      </Section>
      {defaultGithubUsername !== "" && (
        <Section bottom>
          <Table aria-label="Github Accesses">
            <TableHead>
              <TableRow>
                <TableCell>Repository</TableCell>
                <TableCell>Access</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(repos).map(repo => {
                const access = repos[repo as Repository];
                const href = `https://github.com/wcandillon/${repo}`;
                return (
                  <TableRow key={repo}>
                    <TableCell component="th" scope="row">
                      <Link target="_blank" {...{ href }}>
                        {repo}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {access === REPO_LOADING && <Skeleton width={32} />}
                      {access === REPO_INVITED && (
                        <Button href={`${href}/invitations`} target="_blank">
                          Open Invitation
                        </Button>
                      )}
                      {access !== REPO_LOADING && access !== REPO_INVITED && (
                        <Switch
                          checked={access}
                          onChange={({ target: { checked } }) =>
                            toggleAccess(repo, checked)
                          }
                          inputProps={{ "aria-label": "enable Github access" }}
                          color="primary"
                          disabled={isLoading}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Section>
      )}
    </>
  );
};
