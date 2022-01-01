import * as firebase from "firebase/app";
import { Subscription } from "./Constants";

import { User } from "./Model";

export const getUser = async (): Promise<User> => {
  const fn = firebase.functions().httpsCallable("user");
  return (await fn()).data;
};

interface SubscriptionParams {
  subscription: string;
}

export const cancelSubscription = async ({
  subscription
}: SubscriptionParams) => {
  const fn = firebase.functions().httpsCallable("cancelSubscription");
  return (await fn({ subscription })).data;
};

export const enableSubscription = async ({
  subscription
}: SubscriptionParams) => {
  const fn = firebase.functions().httpsCallable("enableSubscription");
  return (await fn({ subscription })).data;
};

interface CreateSessionParams {
  plan: string;
  type: Subscription["type"];
}

export const getLinkToOutstandingInvoice = async () => {
  const fn = firebase.functions().httpsCallable("getLinkToOutstandingInvoice");
  return (await fn()).data;
};

export const createSetupSession = async () => {
  const fn = firebase.functions().httpsCallable("createSetupSession");
  return (await fn()).data;
};

export const getPaymentMethods = async () => {
  const fn = firebase.functions().httpsCallable("getPaymentMethods");
  return (await fn()).data;
};

export const createSession = async ({ plan, type }: CreateSessionParams) => {
  const fn = firebase.functions().httpsCallable("createSession");
  return (await fn({ plan, type })).data;
};

export const addGithubUsername = async (
  username: string,
  oldUsername: string
) => {
  const fn = firebase.functions().httpsCallable("addGithubUsername");
  return (await fn({ username, oldUsername })).data;
};

export const getGithubAccesses = async () => {
  const fn = firebase.functions().httpsCallable("getGithubAccesses");
  return (await fn()).data;
};

export const addGithubAccess = async (repo: string) => {
  const fn = firebase.functions().httpsCallable("addGithubAccess");
  return (await fn({ repo })).data;
};

export const removeGithubAccess = async (repo: string) => {
  const fn = firebase.functions().httpsCallable("removeGithubAccess");
  return (await fn({ repo })).data;
};

export const applyWomenOfReactCoupon = async () => {
  const fn = firebase.functions().httpsCallable("applyWomenOfReactCoupon");
  return (await fn()).data;
};
