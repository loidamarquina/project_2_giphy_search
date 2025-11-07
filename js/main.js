
const API_KEY = "jB3xySBiq3PRVfosWfd4yzx9HTVxWlYu";
const LIMIT = 12;
let offset = 0;
let searchTerm = "";

// get elements
const form = document.getElementById("searchForm");
const input = document.getElementById("q");
const statusBox = document.getElementById("status");
const outputArea = document.getElementById("outputArea");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

function setStatus(msg){
  statusBox.textContent = msg || "";
}

function cardHTML(gif){
  const src = (gif.images && gif.images.fixed_width && gif.images.fixed_width.url) || "";
  const title = gif.title || "GIF";
  const page = gif.url || "#";
  return `
    <article class="card">
      <a href="${page}" target="_blank" rel="noopener">
        <img src="${src}" alt="${title}" loading="lazy" />
      </a>
    </article>
  `;
}

function renderGifs(gifs, total){
  if (!Array.isArray(gifs) || gifs.length === 0){
    outputArea.innerHTML = "<p>No results found.</p>";
    pageInfo.textContent = "";
    return;
  }

  let html = "";
  for (const gif of gifs){
    html += cardHTML(gif);
  }
  outputArea.innerHTML = html;

  const pageNum = Math.floor(offset / LIMIT) + 1;
  pageInfo.textContent = `Page ${pageNum}`;
}

async function fetchAndRender(){
  if (!searchTerm){
    setStatus("Type a keyword and press Search.");
    return;
  }
  setStatus(`Searching "${searchTerm}"...`);

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(searchTerm)}&limit=${LIMIT}&offset=${offset}`;

  try{
    const response = await fetch(url);
    const json = await response.json();
    renderGifs(json.data || [], (json.pagination && json.pagination.total_count) || 0);
    setStatus("Done.");
  } catch(err){
    setStatus("Network error. Try again.");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchTerm = input.value.trim();
  offset = 0;
  fetchAndRender();
});

nextBtn.addEventListener("click", () => {
  offset += LIMIT;
  fetchAndRender();
});

prevBtn.addEventListener("click", () => {
  if (offset >= LIMIT){
    offset -= LIMIT;
    fetchAndRender();
  }
});
