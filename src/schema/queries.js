import gql from "graphql-tag";
const GET_SPACE_MISSION = gql`
  query GetSpaceMission($limit: Int!) {
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
      ships {
        image
      }
    }
  }
`;

const GET_MISSION = gql`
  query getProject($id: ID!) {
    launchesPast(id: $id) {
      id
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`;

export { GET_SPACE_MISSION, GET_MISSION };
