"""Generate 9:16 DSC press release graphic with styled background and highlights."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W, H = 1080, 1920
OUT = Path(__file__).resolve().parents[1] / "assets" / "dsc-2026-press-release-9x16.png"

BG_TOP = (232, 238, 248)
BG_BOTTOM = (210, 222, 240)
CARD = (255, 255, 252)
INK = (28, 32, 42)
ACCENT = (0, 82, 155)
HIGHLIGHT_BG = (255, 243, 180)
HIGHLIGHT_INK = (140, 70, 0)
TABLE_HEAD = (220, 228, 238)
TOP_TOTAL_BG = (255, 248, 220)
BORDER = (160, 170, 188)

TABLE_ROWS = [
    ("Category", "Posts", "Vacancies", True),
    (
        "General Schools\n(Govt./ZP/MPP/Municipal)",
        "SA – 906\nSGT – 1,205",
        "2,111",
        False,
    ),
    (
        "Special Education\n(Govt./ZP/MPP/Municipal)",
        "SA (SE) – 150\nSGT (SE) – 200",
        "350",
        False,
    ),
    (
        "Societies & Other\nManagements",
        "Principal – 30, PGT – 81\nTGT – 113, PD – 2, PET – 34",
        "260",
        False,
    ),
    ("TOTAL", "", "2,721", True),
]
ROW_WEIGHTS = [1.0, 2.35, 2.35, 2.65, 1.15]


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


def wrap(draw, text, fnt, max_width):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        test = f"{cur} {w}".strip()
        if draw.textlength(test, font=fnt) <= max_width:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def draw_centered(draw, y, text, fnt, fill, width):
    tw = draw.textlength(text, font=fnt)
    draw.text(((width - tw) / 2, y), text, font=fnt, fill=fill)
    return y + fnt.size + 8


def main():
    img = Image.new("RGB", (W, H))
    px = img.load()
    for ypix in range(H):
        t = ypix / (H - 1)
        r = int(BG_TOP[0] + (BG_BOTTOM[0] - BG_TOP[0]) * t)
        g = int(BG_TOP[1] + (BG_BOTTOM[1] - BG_TOP[1]) * t)
        b = int(BG_TOP[2] + (BG_BOTTOM[2] - BG_TOP[2]) * t)
        for x in range(W):
            px[x, ypix] = (r, g, b)

    draw = ImageDraw.Draw(img)
    outer = 14
    pad = 14
    card = (outer, outer, W - outer, H - outer)
    draw.rounded_rectangle(card, radius=16, fill=CARD, outline=BORDER, width=2)

    x0 = card[0] + pad
    x1 = card[2] - pad
    y0 = card[1] + pad
    y_end = card[3] - pad
    inner_w = x1 - x0
    content_h = y_end - y0

    table_h = int(content_h * 0.54)
    top_h = content_h - table_h
    header_h = int(top_h * 0.30)
    banner_h = int(top_h * 0.26)
    body_block_h = top_h - header_h - banner_h

    head_px = max(28, min(38, header_h // 4))
    sub_px = max(24, min(32, head_px - 2))
    title_px = max(26, min(34, banner_h // 3))
    body_px = max(22, min(30, body_block_h // 9))

    f_head = font(head_px, True)
    f_sub = font(sub_px, True)
    f_title = font(title_px, True)
    f_body = font(body_px, False)
    f_body_b = font(body_px, True)

    y = y0
    y = draw_centered(draw, y, "GOVERNMENT OF ANDHRA PRADESH", f_head, INK, W)
    y = draw_centered(draw, y, "SCHOOL EDUCATION DEPARTMENT", f_sub, INK, W)
    y = draw_centered(draw, y, "PRESS RELEASE", f_sub, ACCENT, W)
    y += 6
    draw.line((x0, y, x1, y), fill=BORDER, width=2)
    y = y0 + header_h

    headline = "DSC-2026: Brief Notification issued for"
    headline2 = "2,721 teacher posts"
    draw.rounded_rectangle(
        (x0, y, x1, y + banner_h),
        radius=12,
        fill=HIGHLIGHT_BG,
        outline=(230, 200, 120),
        width=1,
    )
    line_gap = max(8, (banner_h - 2 * title_px) // 3)
    tw1 = draw.textlength(headline, font=f_title)
    draw.text((x0 + (inner_w - tw1) / 2, y + line_gap), headline, font=f_title, fill=INK)
    tw2 = draw.textlength(headline2, font=f_title)
    draw.text(
        (x0 + (inner_w - tw2) / 2, y + line_gap + title_px + 6),
        headline2,
        font=f_title,
        fill=HIGHLIGHT_INK,
    )
    y = y0 + header_h + banner_h

    body = (
        "Amaravati, 13th October 2026: The Government has permitted recruitment of "
        "2,721 teacher posts through DSC-2026 (APTRT-2026), vide orders of the School "
        "Education (Services-I) Department dated 13.10.2026. The Director of School "
        "Education has accordingly issued the Brief Notification on the official website "
        "https://tet2dsc.apcfss.in on 13.10.2026."
    )
    body_lines = wrap(draw, body, f_body, inner_w)
    label_h = f_body_b.size + 14
    line_step = max(
        f_body.size + 10,
        (body_block_h - label_h) // max(1, len(body_lines)),
    )
    for line in body_lines:
        draw.text((x0, y), line, font=f_body, fill=INK)
        for phrase, col in [
            ("2,721", HIGHLIGHT_INK),
            ("DSC-2026", ACCENT),
            ("https://tet2dsc.apcfss.in", ACCENT),
        ]:
            idx = line.find(phrase)
            if idx >= 0:
                off = draw.textlength(line[:idx], font=f_body)
                draw.text((x0 + off, y), phrase, font=f_body_b, fill=col)
        y += line_step

    y = y0 + top_h - label_h
    draw.text((x0, y), "The vacancies are as follows:", font=f_body_b, fill=INK)

    table_y = y0 + top_h
    table_bottom = y_end
    table_h = table_bottom - table_y
    weight_sum = sum(ROW_WEIGHTS)
    row_heights = [max(56, int(table_h * w / weight_sum)) for w in ROW_WEIGHTS]
    used = sum(row_heights)
    if used < table_h:
        row_heights[-1] += table_h - used
    elif used > table_h:
        row_heights[-1] -= used - table_h

    min_rh = min(row_heights)
    table_px = max(20, min(28, int(min_rh * 0.38)))
    f_table = font(table_px, False)
    f_table_b = font(table_px, True)

    col_w = [inner_w * 0.38, inner_w * 0.38, inner_w * 0.24]
    cy = table_y
    for ri, row in enumerate(TABLE_ROWS):
        rh = row_heights[ri]
        cx = x0
        is_head = row[3]
        is_total = ri == len(TABLE_ROWS) - 1
        for ci, cell in enumerate(row[:3]):
            cw = col_w[ci]
            if is_head:
                fill = TABLE_HEAD
            elif is_total:
                fill = TOP_TOTAL_BG
            else:
                fill = CARD
            draw.rectangle((cx, cy, cx + cw, cy + rh), fill=fill, outline=BORDER)
            f = f_table_b if is_head or ci == 2 or is_total else f_table
            cell_fill = HIGHLIGHT_INK if (ci == 2 and not is_head) else INK
            if is_head and ci >= 2:
                cell_fill = ACCENT
            lines = cell.split("\n") if cell else [""]
            block_h = len(lines) * (f.size + 6) - 6
            ty = cy + max(10, (rh - block_h) / 2)
            for ln in lines:
                if ci == 0 or ci == 1:
                    draw.text((cx + 10, ty), ln, font=f, fill=cell_fill)
                else:
                    tw = draw.textlength(ln, font=f)
                    draw.text((cx + (cw - tw) / 2, ty), ln, font=f, fill=cell_fill)
                ty += f.size + 6
            cx += cw
        cy += rh

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)
    print(OUT)


if __name__ == "__main__":
    main()
