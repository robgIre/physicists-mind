#!/usr/bin/env python3
"""Generate the PWA icon set.

The original manifest shipped a single SVG data-URI icon containing an emoji.
Android rasterises launcher icons without an emoji font, so it rendered blank,
and it was tagged "any maskable" with no safe-zone padding so it also got
cropped. This draws real PNGs instead: an atom mark, supersampled 4x.

    python3 _icons.py
"""
from PIL import Image, ImageDraw

BG    = (16, 21, 48, 255)      # deep navy, matches --card
RING1 = (110, 168, 255, 255)   # --accent
RING2 = (185, 139, 255, 255)   # --accent2
SS    = 4                      # supersample factor


def atom(size, maskable):
    W = size * SS
    img = Image.new("RGBA", (W, W), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    if maskable:
        # Full bleed: the launcher applies its own mask, and everything
        # important must sit inside the central 80% safe zone.
        d.rectangle([0, 0, W, W], fill=BG)
        span = 0.56
    else:
        d.rounded_rectangle([0, 0, W - 1, W - 1], radius=int(W * 0.22), fill=BG)
        span = 0.76

    cx = cy = W / 2.0
    a  = W * span / 2.0          # semi-major axis
    b  = a * 0.37                # semi-minor axis
    lw = max(2, int(W * 0.028))

    layer = Image.new("RGBA", (W, W), (0, 0, 0, 0))
    for i, angle in enumerate((0, 60, 120)):
        one = Image.new("RGBA", (W, W), (0, 0, 0, 0))
        ImageDraw.Draw(one).ellipse(
            [cx - a, cy - b, cx + a, cy + b],
            outline=(RING1 if i % 2 == 0 else RING2), width=lw)
        layer = Image.alpha_composite(
            layer, one.rotate(angle, resample=Image.BICUBIC, center=(cx, cy)))

    nr = W * span * 0.135
    ImageDraw.Draw(layer).ellipse([cx - nr, cy - nr, cx + nr, cy + nr], fill=RING2)

    img = Image.alpha_composite(img, layer)
    return img.resize((size, size), Image.LANCZOS)


for size in (192, 512):
    atom(size, False).save("icon-%d.png" % size)
    print("wrote icon-%d.png" % size)

atom(512, True).save("icon-maskable-512.png")
print("wrote icon-maskable-512.png")

# Apple wants a non-transparent square with no rounding; iOS rounds it itself.
apple = Image.new("RGBA", (180, 180), BG)
apple.alpha_composite(atom(180, True).convert("RGBA"))
apple.convert("RGB").save("apple-touch-icon.png")
print("wrote apple-touch-icon.png")
