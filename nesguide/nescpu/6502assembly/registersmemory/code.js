

const code = [
`
; Load immediate value
ldx #$ee

; Load from RAM
lda $69

; Add value from RAM to Accumulator
clc
adc $420

; Store to RAM
sta $69

; Increment value in RAM
inc $420
`,
`
$2000: PPUCTRL
$2001: PPUMASK
$2002: PPUSTATUS
$2003: OAMADDR
$2004: OAMDATA
$2005: PPUSCROLL
$2006: PPUADDR
$2007: PPUDATA

$4000: SQ0DUTY
$4001: SQ0SWEEP
$4002: SQ0TIMER
$4003: SQ0LEN
$4004: SQ1DUTY
$4005: SQ1SWEEP
$4006: SQ1TIMER
$4007: SQ1LEN
$4008: TRGLIN
$4009: ---
$400a: TRGTIM
$400b: TRGLEN
$400c: NOISEVOL
$400d: ---
$400e: NOISEPER
$400f: NOISELEN
$4010: DMCFREQ
$4011: DMCCONT
$4012: DMCADDR
$4013: DMCLEN
$4014: OAMDMA
$4015: APUSTATUS
$4016: CTRL1
$4017: CTRL2_FRMCNT
$4018-$401f: 2A03 Test Mode, see <a href="https://www.nesdev.org/wiki/CPU_Test_Mode" target="_blank">CPU Test Mode</a> and <a href="https://www.nesdev.org/wiki/RP2A03_Programmable_Interval_Timer" target="_blank">RP2A03 Programmable Interval Timer</a>
`,

`
; Load from PRG-ROM between $8000-$ffff
lda $abcd
`,

`
; Load from PRG-RAM/WRAM
lda $6000

; Store to PRG-RAM/WRAM
sta $6000
`,

`
tax         ; A to X
txa         ; X to A
tay         ; A to Y
tya         ; Y to A
txs         ; X to S
tsx         ; S to X

pha         ; Push A onto stack
pla         ; Pull A from stack
php         ; Push P onto stack
plp         ; Pull P from stack
`
];
