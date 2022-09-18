import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_SPACE_MISSION } from "./queries";

export const apolloClient = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

class SpaceService {
  async getSpaceMission(limit = 10) {
    try {
      const response = await apolloClient.query({
        query: GET_SPACE_MISSION,
        variables: { limit },
      });

      if (!response || !response.data) throw new Error("Something is wrong!");
      return response.data.launchesPast;
    } catch (e) {
      throw e;
    }
  }
}

export default new SpaceService();
