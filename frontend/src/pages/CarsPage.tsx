import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { Car } from "../types/Car";
import { toast } from "react-toastify";

export default function LogPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch(`http://localhost:3000/voitures/${id}`);
      const cleanData = (await rawData.json()) as Car;
      setCar(cleanData);
    }
    fetchData();
  }, []);

  const hDeletevoitures = async () => {
    if (confirm("Etes vous sur de vouloir supprimer cet article ?")) {
      await fetch(`http://localhost:3000/voitures/${id}`, {
        method: "DELETE",
      });
      navigate("/");
      toast("Article supprimé avec succès !");
    }
    // sinon
  };

  if (Car === null) {
    return <p>Loading Car n°{id}...</p>;
  }

  return (
    <article>
      <h2>
        {Car.marque} (n°{id})<button onClick={hDeletevoitures}>X</button>
      </h2>
      <h3>{Car.modele}</h3>
      <p>{Car.prix_par_jour} € par jour</p>
      <p>{Car.disponible ? " (disponible)" : " (indisponible)"}</p>
    </article>
  );
}
