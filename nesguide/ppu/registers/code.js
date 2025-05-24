const code = 
[
`
$2000: PPU Control (PPUCTRL)
$2001: PPU Mask (PPUMASK)
$2002: PPU Status (PPUSTATUS)
$2003: OAM Address (OAMADDR)
$2004: OAM Data (OAMDATA)
$2005: Background Scroll (PPUSCROLL)
$2006: VRAM Address (PPUADDR)
$2007: VRAM Data (PPUDATA)
`,

`
VPHB SINN
|||| ||||
|||| ||++- Base nametable address (0 = $2000; 1 = $2400; 2 = $2800; 3 = $2c00)
|||| |+--- VRAM address increment (0: add 1, 1: add 32)
|||| +---- Sprite pattern table address for 8x8 sprites (0: $0000; 1: $1000; ignored in 8x16 mode)
|||+------ Background pattern table address (0: $0000; 1: $1000)
||+------- Sprite size (0: 8x8 pixels; 1: 8x16 pixels)
|+-------- PPU master/slave select (set to 0)
+--------- Vblank NMI enable (0: off, 1: on)
`,

`
BGRs bMmG
|||| ||||
|||| |||+- Grayscale (0: normal color, 1: grayscale)
|||| ||+-- 1: Show background in leftmost 8 pixels of screen, 0: Hide
|||| |+--- 1: Show sprites in leftmost 8 pixels of screen, 0: Hide
|||| +---- 1: Enable background rendering
|||+------ 1: Enable sprite rendering
||+------- Emphasize red (green on PAL/Dendy)
|+-------- Emphasize green (red on PAL/Dendy)
+--------- Emphasize blue
`
];