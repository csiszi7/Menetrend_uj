import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) return;
    

    
    fetch (`http://localhost:3000/api/checkout-session/${sessionId}`)
      .then(res => res.json())
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(() => setLoading(false));

      
  }, [sessionId]);

  if (loading) return <p>Fizetés feldolgozása...</p>;
  if (!data) return <p>Nem sikerült betölteni a bizonylatot.</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Köszönjük a vásárlást!</h1>
      <p>Kellemes utazást kívánunk.</p>

      <hr />

      <h3>Bizonylat</h3>
      <p><strong>Név:</strong> {data.customer_name}</p>
      <p><strong>Termék:</strong> {data.product}</p>
      <p><strong>Darab:</strong> {data.quantity}</p>
      <p><strong>Összeg:</strong> {data.amount} Ft</p>
      <p><strong>Fizetés azonosító:</strong> {data.payment_intent}</p>
      <p><strong>Dátum:</strong> {new Date(data.created * 1000).toLocaleString()}</p>
    </div>
  );
}