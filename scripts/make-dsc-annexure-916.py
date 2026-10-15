"""ANNEXURE I district table — 9:16, SA/SGT only (no SE columns)."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W, H = 1080, 1920
OUT = Path(__file__).resolve().parents[1] / "assets" / "dsc-2026-annexure-districts-9x16.png"

BG_TOP = (232, 238, 248)
BG_BOTTOM = (210, 222, 240)
CARD = (255, 255, 252)
INK = (28, 32, 42)
ACCENT = (0, 82, 155)
HIGHLIGHT_BG = (255, 243, 180)
HIGHLIGHT_INK = (140, 70, 0)
TABLE_HEAD = (220, 228, 238)
TABLE_ALT = (245, 248, 252)
BORDER = (160, 170, 188)
TOP_TOTAL_BG = (255, 248, 220)

ROWS = [
    (1, "Srikakulam", 16, 4),
    (2, "Vizianagaram", 0, 4),
    (3, "Parvathipuram Manyam", 6, 2),
    (4, "Alluri Sitharamaraju", 6, 153),
    (5, "Visakhapatnam", 20, 9),
    (6, "Anakapalli", 19, 1),
    (7, "Kakinada", 51, 1),
    (8, "Konaseema", 42, 1),
    (9, "East Godavari", 9, 2),
    (10, "West Godavari", 10, 0),
    (11, "Eluru", 7, 1),
    (12, "NTR", 19, 3),
    (13, "Krishna", 15, 1),
    (14, "Guntur", 24, 1),
    (15, "Palnadu", 14, 0),
    (16, "Bapatla", 17, 0),
    (17, "Prakasam", 96, 170),
    (18, "SPSR Nellore", 65, 100),
    (19, "Tirupati", 22, 77),
    (20, "Chittoor", 30, 100),
    (21, "Annamayya", 46, 61),
    (22, "YSR Kadapa", 48, 158),
    (23, "Kurnool", 176, 213),
    (24, "Nandyal", 40, 117),
    (25, "Anantapuramu", 66, 26),
    (26, "Sri Satya Sai", 42, 0),
]


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    paths = (
        [r"C:\Windows\Fonts\arialbd.ttf", r"C:\Windows\Fonts\timesbd.ttf"]
        if bold
        else [r"C:\Windows\Fonts\arial.ttf", r"C:\Windows\Fonts\times.ttf"]
    )
    for p in paths:
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    return ImageFont.load_default()


def main():
    img = Image.new("RGB", (W, H))
    px = img.load()
    for y in range(H):
        t = y / (H - 1)
        r = int(BG_TOP[0] + (BG_BOTTOM[0] - BG_TOP[0]) * t)
        g = int(BG_TOP[1] + (BG_BOTTOM[1] - BG_TOP[1]) * t)
        b = int(BG_TOP[2] + (BG_BOTTOM[2] - BG_TOP[2]) * t)
        for x in range(W):
            px[x, y] = (r, g, b)

    draw = ImageDraw.Draw(img)
    outer = 14
    card = (outer, outer, W - outer, H - outer)
    draw.rounded_rectangle(card, radius=16, fill=CARD, outline=BORDER, width=2)

    pad = 14
    x1, y1, x2, y2 = card[0] + pad, card[1] + pad, card[2] - pad, card[3] - pad
    inner_w = x2 - x1

    n_table_rows = 1 + len(ROWS) + 1  # header + districts + total
    title_block = 88
    note_block = 34
    table_top = y1 + title_block
    table_bottom = y2 - note_block
    table_h = table_bottom - table_top
    row_h = max(48, table_h // n_table_rows)

    cell_px = max(20, min(28, int(row_h * 0.48)))
    title_px = max(24, min(30, int(row_h * 0.58)))
    sub_px = max(17, min(22, int(row_h * 0.42)))
    note_px = max(15, min(19, int(row_h * 0.38)))

    f_title = font(title_px, True)
    f_sub = font(sub_px, True)
    f_cell = font(cell_px, False)
    f_cell_b = font(cell_px, True)
    f_note = font(note_px, False)

    title = "ANNEXURE – I : District-wise Tentative Vacancies"
    tw = draw.textlength(title, font=f_title)
    draw.text((x1 + (inner_w - tw) / 2, y1), title, font=f_title, fill=INK)

    sub = "(General Schools — SA & SGT only)"
    sw = draw.textlength(sub, font=f_sub)
    draw.text((x1 + (inner_w - sw) / 2, y1 + title_px + 10), sub, font=f_sub, fill=ACCENT)

    col_fracs = [0.10, 0.52, 0.19, 0.19]
    col_w = [inner_w * f for f in col_fracs]
    headers = ["Sl.No", "District", "SA", "SGT"]

    def draw_row(cy, cells, bold=False, head=False, alt=False, total_row=False, rh=None):
        rh = rh if rh is not None else row_h
        cx = x1
        for ci, (cell, cw) in enumerate(zip(cells, col_w)):
            if head:
                fill = TABLE_HEAD
            elif total_row:
                fill = TOP_TOTAL_BG
            elif alt:
                fill = TABLE_ALT
            else:
                fill = CARD
            draw.rectangle((cx, cy, cx + cw, cy + rh), fill=fill, outline=BORDER)
            f = f_cell_b if bold or head or (ci >= 2) else f_cell
            text = str(cell)
            if ci == 0 or ci >= 2:
                tw = draw.textlength(text, font=f)
                tx = cx + (cw - tw) / 2
            else:
                tx = cx + 8
            ty = cy + (rh - f.size) / 2 - 1
            color = HIGHLIGHT_INK if total_row and ci >= 2 else INK
            if head and ci >= 2:
                color = ACCENT
            draw.text((tx, ty), text, font=f, fill=color)
            cx += cw

    y = table_top
    draw_row(y, headers, bold=True, head=True)
    y += row_h

    for i, (sl, dist, sa, sgt) in enumerate(ROWS):
        draw_row(y, [sl, dist, sa, sgt], alt=i % 2 == 1)
        y += row_h

    sum_sa = sum(r[2] for r in ROWS)
    sum_sgt = sum(r[3] for r in ROWS)
    total_rh = row_h + max(0, table_bottom - (y + row_h))
    draw_row(
        y,
        ["", "TOTAL", f"{sum_sa:,}", f"{sum_sgt:,}"],
        total_row=True,
        bold=True,
        rh=total_rh,
    )

    note = "SA – School Assistant;   SGT – Secondary Grade Teacher."
    nw = draw.textlength(note, font=f_note)
    draw.text((x1 + (inner_w - nw) / 2, y2 - note_px - 4), note, font=f_note, fill=INK)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)
    print(OUT)


if __name__ == "__main__":
    main()
