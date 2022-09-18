import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MISSION } from "../schema/queries";
export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MISSION, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return <h1>Project</h1>;
}
