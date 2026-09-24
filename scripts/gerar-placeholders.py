#!/usr/bin/env python3
"""Gera imagens placeholder leves para desenvolvimento.
Substituir TODAS pelas imagens reais antes do lançamento (ver README de entrega)."""
from PIL import Image, ImageDraw, ImageFont
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, 'src/assets/img')
PUB = os.path.join(ROOT, 'public')
DS = '/Users/macbookair/.cursor/projects/Users-macbookair-Desktop-digital-makerss-robotica-em-casa/assets/image-9fca87fc-b780-499e-a857-52f3f82579e4.png'

NAVY = (31, 42, 68)
CREAM = (255, 248, 236)
KRAFT = (200, 162, 122)
YELLOW = (255, 201, 60)
ORANGE = (255, 138, 61)
BLUE = (61, 165, 217)
GREEN = (91, 191, 114)
PINK = (255, 111, 125)
WHITE = (255, 255, 255)

def tint(c, f=0.72):
    return tuple(int(v + (255 - v) * f) for v in c)

FONT = '/System/Library/Fonts/Supplemental/Arial Rounded Bold.ttf'

def font(px):
    return ImageFont.truetype(FONT, px)

def center_text(d, w, h, lines):
    total = sum(l[1] for l in lines) + (len(lines) - 1) * 14
    y = (h - total) / 2
    for text, size, color in lines:
        f = font(size)
        bb = d.textbbox((0, 0), text, font=f)
        d.text(((w - (bb[2] - bb[0])) / 2, y), text, font=f, fill=color)
        y += size + 14

def placeholder(name, w, h, bg, label, ratio):
    img = Image.new('RGB', (w, h), bg)
    d = ImageDraw.Draw(img)
    m = int(min(w, h) * 0.06)
    d.rounded_rectangle([m, m, w - m, h - m], radius=24, outline=NAVY, width=3)
    center_text(d, w, h, [
        ('IMAGEM REAL AQUI', int(min(w, h) * 0.075), NAVY),
        (label, int(min(w, h) * 0.055), NAVY),
        (ratio, int(min(w, h) * 0.04), (85, 96, 122)),
    ])
    img.save(os.path.join(IMG, name), quality=82, optimize=True)
    print('ok', name)

# ---------- mascote: recorte do robô no design system ----------
ds = Image.open(DS).convert('RGB')
# região do robô (canto superior esquerdo do design system 1024x1024)
robot = ds.crop((28, 18, 398, 408))
# amostra do fundo para compor canvas quadrado
bg = robot.getpixel((5, 5))
side = max(robot.size) + 40
masc = Image.new('RGB', (side, side), bg)
masc.paste(robot, ((side - robot.width) // 2, (side - robot.height) // 2))
masc = masc.resize((800, 800), Image.LANCZOS)
masc.save(os.path.join(IMG, 'mascote.png'), optimize=True)
print('ok mascote.png')

# ---------- logo horizontal: mascote em selo circular + texto claro (p/ fundo navy) ----------
lw, lh = 1200, 400
logo = Image.new('RGBA', (lw, lh), (0, 0, 0, 0))
d = ImageDraw.Draw(logo)
# selo circular creme com borda kraft
d.ellipse([20, 20, 380, 380], fill=(250, 246, 239, 255), outline=KRAFT + (255,), width=10)
r = robot.resize((270, 279), Image.LANCZOS)
mask = Image.new('L', (270, 279), 0)
ImageDraw.Draw(mask).ellipse([0, 0, 270, 279], fill=255)
logo.paste(r, (65, 60), mask)
f1 = font(112)
d.text((430, 78), 'Robótica', font=f1, fill=(255, 255, 255, 255))
d.text((430, 208), 'em Casa', font=f1, fill=YELLOW + (255,))
logo.save(os.path.join(IMG, 'logo.png'), optimize=True)
print('ok logo.png')

# ---------- favicons a partir do mascote ----------
fav = masc.resize((512, 512), Image.LANCZOS)
fav.save(os.path.join(PUB, 'favicon.png'), optimize=True)
masc.resize((180, 180), Image.LANCZOS).save(os.path.join(PUB, 'apple-touch-icon.png'), optimize=True)
print('ok favicon.png / apple-touch-icon.png')

# ---------- og-image 1200x630 ----------
og = Image.new('RGB', (1200, 630), CREAM)
d = ImageDraw.Draw(og)
d.rectangle([0, 600, 1200, 630], fill=YELLOW)
r2 = robot.resize((330, 342), Image.LANCZOS)
og.paste(r2, (70, 150))
d.ellipse([40, 120, 430, 510], outline=KRAFT, width=6)
d.text((480, 175), 'Robótica em Casa', font=font(84), fill=NAVY)
d.text((480, 300), '+200 projetos de robótica, ciência,', font=font(40), fill=(85, 96, 122))
d.text((480, 355), 'reciclagem e artesanato para crianças', font=font(40), fill=(85, 96, 122))
d.text((480, 430), 'de 4 a 10 anos · materiais de casa', font=font(40), fill=(200, 84, 15))
og.save(os.path.join(PUB, 'og-image.jpg'), quality=85, optimize=True)
print('ok og-image.jpg')

# ---------- placeholders de conteúdo ----------
placeholder('robo-papelao.jpg', 900, 1125, tint(KRAFT, 0.55), 'robo-papelao.jpg', '4:5 · min. 900x1125')
placeholder('beneficio-foco.jpg', 600, 600, tint(BLUE), 'beneficio-foco.jpg', '1:1 · 600x600')
placeholder('beneficio-pratica.jpg', 600, 600, tint(GREEN), 'beneficio-pratica.jpg', '1:1 · 600x600')
placeholder('beneficio-criatividade.jpg', 600, 600, tint(ORANGE), 'beneficio-criatividade.jpg', '1:1 · 600x600')
placeholder('beneficio-orgulho.jpg', 600, 600, tint(PINK), 'beneficio-orgulho.jpg', '1:1 · 600x600')

placeholder('pdf-montanha-russa.jpg', 700, 990, tint(BLUE, 0.8), 'pdf-montanha-russa.jpg', 'A4 · 1:1,414')
placeholder('pdf-foguete.jpg', 700, 990, tint(ORANGE, 0.8), 'pdf-foguete.jpg', 'A4 · 1:1,414')
placeholder('pdf-tabuleiro.jpg', 700, 990, tint(PINK, 0.8), 'pdf-tabuleiro.jpg', 'A4 · 1:1,414')
placeholder('pdf-mao-mecanica.jpg', 700, 990, tint(BLUE, 0.8), 'pdf-mao-mecanica.jpg', 'A4 · 1:1,414')
placeholder('pdf-lixeira-jacare.jpg', 700, 990, tint(GREEN, 0.8), 'pdf-lixeira-jacare.jpg', 'A4 · 1:1,414')

ex_cores = [tint(YELLOW, 0.7), tint(BLUE, 0.75), tint(GREEN, 0.75), tint(PINK, 0.75), tint(ORANGE, 0.75), tint(KRAFT, 0.6)]
for i in range(1, 7):
    placeholder(f'exemplo-{i}.jpg', 800, 800, ex_cores[i - 1], f'exemplo-{i}.jpg', '1:1 · 800x800')

# depoimentos: moldura de conversa (prints reais entram depois)
for i in range(1, 4):
    w, h = 640, 1136
    img = Image.new('RGB', (w, h), (229, 221, 213))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([30, 120, 500, 260], radius=28, fill=WHITE)
    d.rounded_rectangle([140, 300, 610, 470], radius=28, fill=(220, 248, 198))
    d.rounded_rectangle([30, 510, 520, 680], radius=28, fill=WHITE)
    center_text(d, w, h, [
        ('PRINT REAL AQUI', 44, NAVY),
        (f'depoimento-{i}.jpg', 34, NAVY),
        ('9:16 · com autorização', 26, (85, 96, 122)),
    ])
    img.save(os.path.join(IMG, f'depoimento-{i}.jpg'), quality=82, optimize=True)
    print('ok', f'depoimento-{i}.jpg')

# mockups dos kits (PNG)
for name, cor, label in [('mockup-mirim.png', BLUE, 'mockup-mirim.png'), ('mockup-mega.png', YELLOW, 'mockup-mega.png')]:
    w, h = 1000, 750
    img = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([120, 90, 880, 660], radius=40, fill=tint(cor, 0.35), outline=NAVY, width=5)
    center_text(d, w, h, [
        ('MOCKUP REAL AQUI', 56, NAVY),
        (label, 42, NAVY),
        ('4:3 · fundo transparente', 30, (85, 96, 122)),
    ])
    img.save(os.path.join(IMG, name), optimize=True)
    print('ok', name)

print('TODOS OS PLACEHOLDERS GERADOS')
