// script.js

// Image Upload
document.getElementById('imageUpload').addEventListener('change', function () {
    const files = this.files;
    const imageFileNameDisplay = document.getElementById('imageFileName');
    const previewContainer = document.getElementById('preview');

    // Update selected file count
    if (files.length > 0) {
        imageFileNameDisplay.textContent = `${files.length} image(s) selected`;
    } else {
        imageFileNameDisplay.textContent = "No images selected";
    }

    // Preview selected images
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            const imgElement = document.createElement('img');
            imgElement.src = URL.createObjectURL(file);
            imgElement.alt = "Image Preview";
            previewContainer.appendChild(imgElement);
        }
    });
});

// Video Upload
document.getElementById('videoUpload').addEventListener('change', function () {
    const files = this.files;
    const videoFileNameDisplay = document.getElementById('videoFileName');
    const previewContainer = document.getElementById('preview');

    // Update selected file count
    if (files.length > 0) {
        videoFileNameDisplay.textContent = `${files.length} video(s) selected`;
    } else {
        videoFileNameDisplay.textContent = "No videos selected";
    }

    // Preview selected videos
    Array.from(files).forEach(file => {
        if (file.type.startsWith('video/')) {
            const videoElement = document.createElement('video');
            videoElement.src = URL.createObjectURL(file);
            videoElement.controls = true;
            previewContainer.appendChild(videoElement);
        }
    });
});

// Handle Form Submission
document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Files uploaded successfully!');
});
