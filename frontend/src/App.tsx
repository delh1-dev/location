import { useEffect, useState } from "react";

type voitures = {
  id: number;
  marque: string;
  modele: string;
  prix_par_jour: string;
  disponible: boolean;
};
function App() {
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
      <h1>welcome Home !</h1>
      {voitures.map((voiture) => (
        <p key={voiture.id}>
          {voiture.marque} {voiture.modele} - {voiture.prix_par_jour} € par jour
          {voiture.disponible ? " (disponible)" : " (indisponible)"}
        </p>
      ))}
    </>
  );
}

export default App;
