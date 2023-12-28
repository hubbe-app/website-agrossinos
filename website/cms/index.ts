import {
   authentication,
   createDirectus,
   createItem,
   graphql,
   rest,
   staticToken,
} from "@directus/sdk";
import type {
   AuthenticationClient,
   AuthenticationData,
   DirectusClient,
   GraphqlClient,
   RestClient,
   StaticTokenClient,
} from "@directus/sdk";

const DIRECTUS_URL = process.env.DIRECTUS_URL || "http://localhost:8055";

if (!DIRECTUS_URL) {
   throw new Error("DIRECTUS_URL is not defined");
}

export type CMSGuestClient = RestClient<any> &
   GraphqlClient<any> &
   DirectusClient<any>;
export type CMSAuthClient = AuthenticationClient<any> & CMSGuestClient;
export type CMSTokenClient = StaticTokenClient<any> & CMSGuestClient;

let tokenClient: CMSTokenClient;
let authenticatedClient: CMSAuthClient;
let guestClient: CMSGuestClient;

const clientSet: Set<CMSGuestClient> = new Set();

const getLocalStorage = (): Storage | null => {
   if (typeof window !== "undefined") {
      return window.localStorage;
   } else {
      return null;
   }
};

const createClient = (): CMSGuestClient => {
   return createDirectus(DIRECTUS_URL).with(rest()).with(graphql());
};

const createAuthenticatedClient = (): CMSAuthClient => {
   return createClient().with(authentication());
};

/**
 * Creates and returns a DirectusClient instance based on the given parameters.
 * If an authenticated client already exists, returns it.
 * If a guest client already exists, returns it.
 * If the user is authenticated, returns an authenticated client with a refreshed token.
 * Otherwise, returns a guest client.
 * @returns A DirectusClient instance.
 */
export const makeClient = async (): Promise<CMSAuthClient | CMSGuestClient> => {
   if (tokenClient) {
      return tokenClient;
   }

   if (getLocalStorage()?.getItem("token") || process.env.ADMIN_STATIC_TOKEN) {
      const token =
         (getLocalStorage()?.getItem("token") as string) ||
         (process.env.ADMIN_STATIC_TOKEN as string);
      tokenClient = createDirectus(DIRECTUS_URL)
         .with(staticToken(token))
         .with(rest())
         .with(graphql());
      clientSet.add(tokenClient);
      return tokenClient;
   }

   if (authenticatedClient) {
      return authenticatedClient;
   }
   if (guestClient) {
      return guestClient;
   }

   const userData = JSON.parse(
      getLocalStorage()?.getItem("userData") ?? "{}",
   ) as AuthenticationData;

   if (userData && userData.access_token) {
      const { access_token } = userData;

      const client = createAuthenticatedClient();

      client.setToken(access_token);
      const authData = await client.refresh();

      getLocalStorage()?.setItem("userData", JSON.stringify(authData));

      authenticatedClient = client;
      clientSet.add(authenticatedClient);
      return authenticatedClient;
   } else {
      guestClient = createClient();
      clientSet.add(guestClient);
      return guestClient;
   }
};

export const getAuthClient = async (): Promise<
   CMSAuthClient | CMSTokenClient
> =>
   makeClient().then(client => client as CMSAuthClient | CMSTokenClient);

export const getCMSClient = async (): Promise<CMSTokenClient> =>
   makeClient().then(client => client as CMSTokenClient);

export const getClient = async (): Promise<CMSGuestClient> =>
   makeClient().then(client => client as CMSGuestClient);

/**
 * Authenticates a user with the given username and password and returns an authenticated CMSAuthClient instance.
 * @param username - The username of the user to authenticate.
 * @param password - The password of the user to authenticate.
 * @returns An authenticated CMSAuthClient instance.
 * @throws An error if the authentication fails.
 */
export const signIn = async (
   username: string,
   password: string,
): Promise<CMSAuthClient> => {
   const client = createAuthenticatedClient();

   try {
      await client.login(username, password);
      authenticatedClient = client;
      return authenticatedClient;
   } catch (error) {
      console.error(error);
      throw error;
   }
};

export type InterestData = {
   name: string,
   email: string,
   message: string, 
   ip?: string,
   device?: Record<string, any>,
}

export type CMSReceipt = {
   success: boolean,
   errors?: Record<string, string>[] | null
}

export const createInterest = async (interestData: InterestData): Promise<CMSReceipt> => {
   const client = await getCMSClient();
   try {
      await client.request(
         createItem(
            "agrossinos_interest",
            { ...interestData }
         )
      ).then((response) => {
         console.log(response);
         return { success: true };
      })
   } catch (error) {
      console.error(error);
      return { 
         success: false, 
         errors: error.errors.map(err => err.message) 
      };
   }
}
