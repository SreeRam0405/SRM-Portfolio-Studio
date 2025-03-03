document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadBtn");

    if (!downloadBtn) {
        console.error("Download button not found!");
        return;
    }

    async function downloadPortfolio() {
        if (typeof JSZip === "undefined") {
            alert("Error: JSZip library is missing!");
            return;
        }

        const zip = new JSZip();

        // Clone the document
        const clonedDocument = document.documentElement.cloneNode(true);

        // Remove download button
        const clonedDownloadBtn = clonedDocument.querySelector("#downloadBtn");
        if (clonedDownloadBtn) clonedDownloadBtn.remove();

        // Serialize the cloned document to HTML
        const serializer = new XMLSerializer();
        const htmlContent = `<!DOCTYPE html>\n<html>\n${serializer.serializeToString(clonedDocument)}\n</html>`;

        async function fetchFile(filePath) {
            try {
                const response = await fetch(filePath);
                if (!response.ok) throw new Error(`Failed to fetch ${filePath}`);
                return await response.text();
            } catch (error) {
                console.error(`Error fetching ${filePath}:`, error);
                return "";
            }
        }

        const cssContent = await fetchFile("style.css");
        const jsContent = await fetchFile("script.js");

        zip.file("index.html", htmlContent);
        if (cssContent) zip.file("style.css", cssContent);
        if (jsContent) zip.file("script.js", jsContent);

        async function getFileBase64(file) {
            return new Promise((resolve, reject) => {
                if (!file) resolve(null);
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
                reader.readAsDataURL(file);
            });
        }

        const imageInput = document.getElementById("imageUpload");
        const resumeInput = document.getElementById("resume");

        if (imageInput && imageInput.files.length > 0) {
            const imageFile = imageInput.files[0];
            const imageBase64 = await getFileBase64(imageFile);
            if (imageBase64) zip.file("profile_image.png", imageBase64.split(",")[1], { base64: true });
        }

        if (resumeInput && resumeInput.files.length > 0) {
            const resumeFile = resumeInput.files[0];
            const resumeBase64 = await getFileBase64(resumeFile);
            if (resumeBase64) zip.file("resume.pdf", resumeBase64.split(",")[1], { base64: true });
        }

        zip.generateAsync({ type: "blob" }).then((zipBlob) => {
            const zipLink = document.createElement("a");
            zipLink.href = URL.createObjectURL(zipBlob);
            zipLink.download = "portfolio.zip";
            document.body.appendChild(zipLink);
            zipLink.click();
            document.body.removeChild(zipLink);

            // Clear localStorage & navigate
            localStorage.clear();
            setTimeout(() => {
                window.location.href = "host.html";
            }, 1000);
        });
    }

    downloadBtn.addEventListener("click", function () {
        console.log("Download button clicked! Generating ZIP...");
        downloadPortfolio();
    });
});
