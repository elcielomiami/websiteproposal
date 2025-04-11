from PIL import Image, ImageDraw, ImageFont
import os

# Create directory if it doesn't exist
os.makedirs('assets', exist_ok=True)

# Function to create a gradient image
def create_gradient_image(width, height, color1, color2, filename, text=None, text_color=None, border=False):
    # Create a new image with the specified dimensions
    image = Image.new('RGB', (width, height), color=color1)
    draw = ImageDraw.Draw(image)
    
    # Draw a gradient
    for y in range(height):
        r = int(color1[0] * (1 - y/height) + color2[0] * (y/height))
        g = int(color1[1] * (1 - y/height) + color2[1] * (y/height))
        b = int(color1[2] * (1 - y/height) + color2[2] * (y/height))
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    # Add text if provided
    if text:
        try:
            # Try to use a nice font if available
            font = ImageFont.truetype("Arial", 40)
        except IOError:
            # Fall back to default font
            font = ImageFont.load_default()
        
        # Calculate text position for center alignment
        text_width, text_height = draw.textsize(text, font=font)
        position = ((width - text_width) // 2, (height - text_height) // 2)
        
        # Draw text
        draw.text(position, text, fill=text_color or (255, 255, 255), font=font)
    
    # Add border if requested
    if border:
        border_color = (212, 175, 55)  # Gold color
        border_width = 10
        for i in range(border_width):
            draw.rectangle(
                [(i, i), (width - i - 1, height - i - 1)],
                outline=border_color
            )
    
    # Save the image
    image.save(f'assets/{filename}')
    print(f"Created {filename}")

# Generate placeholder images
# Miami River sunset for title slide
create_gradient_image(
    1200, 800, 
    (10, 26, 47), (19, 47, 76), 
    "miami-river-sunset.jpg",
    "Miami River Sunset View", 
    (212, 175, 55),
    border=True
)

# El Cielo logo
create_gradient_image(
    400, 200, 
    (10, 26, 47), (10, 26, 47), 
    "el-cielo-logo.png",
    "El Cielo Miami", 
    (212, 175, 55),
    border=True
)

# Current website
create_gradient_image(
    800, 600, 
    (50, 50, 50), (30, 30, 30), 
    "current-website.jpg",
    "Current Website", 
    (180, 180, 180)
)

# Vision website
create_gradient_image(
    800, 600, 
    (10, 26, 47), (19, 47, 76), 
    "vision-website.jpg",
    "Vision Website", 
    (212, 175, 55),
    border=True
)

print("All placeholder images generated successfully.")
