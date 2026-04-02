export async function registerService(userData) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auths/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Register error:", error);
  }
}