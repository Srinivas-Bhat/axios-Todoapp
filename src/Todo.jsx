import React, { useEffect, useState } from "react";

function Todo() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, ata] = useState([]);
  useEffect(() => {
    setLoading(true);
    setError(false);
  });
  return (
    <div>
      {loading ? <div>Loading...</div> : null}
      {error ? <div>Error...</div> : null}
    </div>
  );
}
