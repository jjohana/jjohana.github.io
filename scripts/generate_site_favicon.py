from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "sagesse-du-monde"

GREEN = "#1d382f"
PAPER = "#f3efe6"


def font_for(size: int) -> ImageFont.FreeTypeFont:
    candidates = (
        Path("C:/Windows/Fonts/georgiab.ttf"),
        Path("C:/Windows/Fonts/timesbd.ttf"),
    )
    for candidate in candidates:
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size=size)
    return ImageFont.truetype("DejaVuSerif-Bold.ttf", size=size)


def seal(size: int, *, opaque: bool = False) -> Image.Image:
    scale = 4
    canvas_size = size * scale
    background = PAPER if opaque else (0, 0, 0, 0)
    image = Image.new("RGBA", (canvas_size, canvas_size), background)
    draw = ImageDraw.Draw(image)

    margin = round(canvas_size * (0.08 if opaque else 0.035))
    draw.ellipse(
        (margin, margin, canvas_size - margin, canvas_size - margin),
        fill=GREEN,
    )

    font = font_for(round(canvas_size * 0.67))
    draw.text(
        (canvas_size / 2, canvas_size * 0.505),
        "S",
        fill=PAPER,
        font=font,
        anchor="mm",
    )
    return image.resize((size, size), Image.Resampling.LANCZOS)


PUBLIC.mkdir(parents=True, exist_ok=True)
seal(512).save(PUBLIC / "favicon-512.png", optimize=True)
seal(192).save(PUBLIC / "favicon-192.png", optimize=True)
seal(180, opaque=True).save(PUBLIC / "apple-touch-icon.png", optimize=True)
seal(256).save(
    PUBLIC / "favicon.ico",
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
)
