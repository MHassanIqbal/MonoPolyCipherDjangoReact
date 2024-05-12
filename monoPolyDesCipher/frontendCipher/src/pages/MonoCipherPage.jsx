import { useEffect, useState } from "react";

const MonoCipherPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/cipher/");
        const jsonData = await res.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>MonoCipherPage</h1>
      {/* {data.map((data) => console.log(data))} */}
    </div>
  );
};

export default MonoCipherPage;
