import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Car } from "../types/Car";
import { toast } from "react-toastify";

export default function HomePage() {
  const [voitures, setVoitures] = useState<Car[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3000/voitures");
      const cleanData = await rawData.json();
      setVoitures(cleanData);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>CarRent!</h1>
      {voitures.map((voiture) => {
        return (
          <p key={voiture.id}>
            {voiture.id} {voiture.marque} {voiture.modele} -{" "}
            {Number(voiture.prix_par_jour)} € par jour
            {voiture.disponible ? " (disponible)" : " (indisponible)"}
            <Link to={`/${voiture.id}`}>{voiture.marque}</Link>
          </p>
        );
      })}
    </>
  );
}
