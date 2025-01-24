import os
from PIL import Image

def convert_image_to_webp(image_path):
    """Converts an image to webp format and removes the original."""
    webp_path = image_path.rsplit('.', 1)[0] + '.webp'
    with Image.open(image_path) as img:
        img.save(webp_path, 'webp')
    os.remove(image_path)

def convert_images_in_current_directory(folder_path, exclude_filenames=None):
    """Converts .jpg and .png files in the current directory to .webp and removes the originals."""
    if exclude_filenames is None:
        exclude_filenames = []

    for file in os.listdir(folder_path):
        if (file.lower().endswith(('.jpg', '.png')) and
            file not in exclude_filenames):
            print(f"Converting: {file}")
            file_path = os.path.join(folder_path, file)
            convert_image_to_webp(file_path)

if __name__ == "__main__":
    folder_to_search = os.path.dirname(os.path.abspath(__file__))  # Use the script's directory
    excluded_files = ['android-chrome-192x192.webp', 'android-chrome-512x512.webp', 'apple-touch-icon.webp', 'docusaurus.webp', 'docusaurus-social-card.jpg', 'favicon.ico', 'favicon-16x16.webp', 'favicon-32x32.webp']  # Add any filenames you want to exclude
    convert_images_in_current_directory(folder_to_search, exclude_filenames=excluded_files)

