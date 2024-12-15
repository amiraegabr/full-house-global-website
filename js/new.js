// script.js

// Function to preview selected images
function previewImages() {
    const imagePreviewContainer = document.getElementById('imagePreview');
    const files = document.getElementById('imageUpload').files;
    imagePreviewContainer.innerHTML = ""; // Clear previous previews

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreviewContainer.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
}

// Function to preview selected videos
function previewVideos() {
    const videoPreviewContainer = document.getElementById('videoPreview');
    const files = document.getElementById('videoUpload').files;
    videoPreviewContainer.innerHTML = ""; // Clear previous previews

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const video = document.createElement('video');
        video.controls = true;
        video.src = URL.createObjectURL(file);
        videoPreviewContainer.appendChild(video);
    }
}

document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const images = document.getElementById('imageUpload').files;
    const videos = document.getElementById('videoUpload').files;

    if (!title || !date) {
        alert("Please fill out all required fields.");
        return;
    }

    if (images.length === 0 && videos.length === 0) {
        alert("Please upload at least one image or video.");
        return;
    }

    alert("Form submitted successfully!");
});
