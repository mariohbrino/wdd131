from PIL import Image


def resize_with_scale(
    input_path: str,
    output_path: str,
    scale_factor: float = 0.5,
    quality: int = 85,
) -> None:
    """
    Resize an image by a given scale factor.

    :param input_path: Path to the input image file.
    :param output_path: Path to save the resized image.
    :param scale_factor: Factor by which to scale the image dimensions.
    """
    with Image.open(input_path) as image:
        # original size
        width, height = image.size

        # calculate new size
        new_width = int(width * scale_factor)
        new_height = int(height * scale_factor)

        # resize with high-quality filter
        resized_image = image.resize((new_width, new_height), Image.LANCZOS)

        # Save with reduced quality (works best for JPEG/WebP)
        resized_image.save(output_path, "WEBP", quality=quality, optimize=True)


if __name__ == "__main__":
    sizes = ["small", "medium", "large"]
    resizes = [0.3333, 0.6666, 1.0]

    for size, scale in zip(sizes, resizes):
        resize_with_scale(
            input_path="albuquerque-temple-lds-original.jpg",
            output_path=f"week03/images/albuquerque-temple-lds-{size}.webp",
            scale_factor=scale,
            quality=85,
        )  # resize to 1/3 and 2/3 of original size
