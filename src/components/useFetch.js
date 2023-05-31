import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  //run only after initial render
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (url === "") throw new Error("Url cannot be empty");
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error Loading Data, check url");
        const data = await response.json();

        setUser(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  return { isError, isLoading, user };
};

export default useFetch;
