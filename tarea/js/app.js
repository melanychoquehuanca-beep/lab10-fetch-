async function mostrarPosts() {
  const lista = document.querySelector("#posts");
  try {
    // 1 y 2. Fetch y conversión a JSON de las publicaciones del usuario 1
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1",
    );
    if (!res.ok) throw new Error("No se pudo cargar la información");
    const posts = await res.json();

    // 3. Mostrar los títulos en la lista usando map, join e innerHTML
    lista.innerHTML = posts.map((p) => `<li>${p.title}</li>`).join("");
  } catch (error) {
    // 4. Mensaje de error en caso de fallo
    lista.innerHTML = "<li>No se pudo cargar la información</li>";
  }
}
mostrarPosts();
