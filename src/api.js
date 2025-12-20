const API_BASE_URL = "https://gdrive-api-service-production.up.railway.app/api/v1";

export async function importGoogleDriveFolder(folderUrl) {
  const res = await fetch(`${API_BASE_URL}/import/google-drive`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ folder_url: folderUrl }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || "Failed to start import");
  }

  return res.json();
}

export async function fetchImages(page = 1, limit = 20) {
  const res = await fetch(
    `${API_BASE_URL}/images?page=${page}&limit=${limit}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch images");
  }

  return res.json();
}
