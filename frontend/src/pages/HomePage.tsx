import { useEffect, useState } from "react";

type voitures = {
  id: number;
  marque: string;
  modele: string;
  prix_par_jour: number;
  disponible: boolean;
};

export default function HomePage() {
  const [voitures, setvoitures] = useState<voitures[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3000/voitures");
      const cleanData = await rawData.json();
      setvoitures(cleanData);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>CarRent!</h1>
      {voitures.map((voiture) => {
        return (
          <p>
            {voiture.id} {voiture.marque} {voiture.modele} -{" "}
            {Number(voiture.prix_par_jour)} € par jour
            {voiture.disponible ? " (disponible)" : " (indisponible)"}
          </p>
        );
      })}
    </>
  );
}
