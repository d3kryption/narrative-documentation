import os
from PIL import Image

def convert_image_to_webp(image_path):
    """Converts an image to webp format and removes the original."""
    webp_path = image_path.rsplit('.', 1)[0] + '.webp'
    with Image.open(image_path) as img:
        img.save(webp_path, 'webp')
    os.remove(image_path)
    print(f"Converted {image_path} to {webp_path} and removed the original.")

def search_and_convert_images(folder_path, exclude_filenames=None):
    """Recursively searches for .jpg and .webp files, converts them to .webp, and removes the originals."""
    if exclude_filenames is None:
        exclude_filenames = []

    for root, _, files in os.walk(folder_path):
        for file in files:
            print(file)
            if (file.lower().endswith(('.jpg', '.png')) and
                file not in exclude_filenames):
                file_path = os.path.join(root, file)
                convert_image_to_webp(file_path)

if __name__ == "__main__":
    folder_to_search = "/home/jackhannibalmarioripper/Documents/Websites/narrative-docs/static/img/quests-and-dialogue/saving/"  # Replace with your target folder path
    excluded_files = ['android-chrome-192x192.webp', 'android-chrome-512x512.webp', 'apple-touch-icon.webp', 'docusaurus.webp', 'docusaurus-social-card.jpg', 'favicon.ico', 'favicon-16x16.webp', 'favicon-32x32.webp']  # Add any filenames you want to exclude
    search_and_convert_images(folder_to_search, exclude_filenames=excluded_files)

