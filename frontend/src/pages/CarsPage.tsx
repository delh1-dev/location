import { useParams } from "react-router";

export default function VoiturePage() {
  const { id } = useParams();

  return <p> CarPage (n°{id})</p>;
}
