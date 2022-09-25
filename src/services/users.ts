import http from "./http";

export const getUsers = async () => {
  try {
    const response = await fetch(`${http}user`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getUserFil = async (col:string, msg:string ) => {
  try {
    const response = await fetch(
      `${http}search-user/${col}/${msg}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  
    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
  }
};
