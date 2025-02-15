// Select the download button
const downloadBtn = document.getElementById("downloadBtn");

// Function to trigger file download
function createFile(blob, fileName) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to fetch external files (CSS & JS)
async function fetchFile(filePath) {
    try {
        const response = await fetch(filePath);
        return await response.text();
    } catch (error) {
        console.error(`Error fetching ${filePath}:`, error);
        return "";
    }
}

// Function to download the entire portfolio page
async function downloadPortfolio() {
    const zip = new JSZip();

    // Get the current HTML content
    const htmlContent = document.documentElement.outerHTML;

    // Fetch external CSS and JS files
    const cssContent = await fetchFile("Port1.css");
    const jsContent = await fetchFile("Port1.js");

    // Adding files to ZIP
    zip.file("index.html", htmlContent);
    zip.file("style.css", cssContent);
    zip.file("script.js", jsContent);

    // Generate ZIP and trigger download
    zip.generateAsync({ type: "blob" }).then((zipBlob) => {
        createFile(zipBlob, "portfolio.zip");
    });
}

// Attach event listener to the download button
downloadBtn.addEventListener("click", downloadPortfolio);
