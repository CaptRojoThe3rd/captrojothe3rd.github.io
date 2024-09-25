
const code = [
`
PPUCTRL                          = $2000
PPUMASK                          = $2001
PPUSTATUS                        = $2002
OAMADDR                          = $2003
OAMDATA                          = $2004
PPUSCROLL                        = $2005
PPUADDR                          = $2006
PPUDATA                          = $2007
OAMDMA                           = $4014

SQ0DUTY                          = $4000
SQ0SWEEP                         = $4001
SQ0TIMER                         = $4002
SQ0LEN                           = $4003

SQ1DUTY                          = $4004
SQ1SWEEP                         = $4005
SQ1TIMER                         = $4006
SQ1LEN                           = $4007

TRGLIN                           = $4008
TRGTIM                           = $400a
TRGLEN                           = $400b

NOISEVOL                         = $400c
NOISEPER                         = $400e
NOISELEN                         = $400f

DMCFREQ                          = $4010
DMCCONT                          = $4011
DMCADDR                          = $4012
DMCLEN                           = $4013

APUSTATUS                        = $4015

CTRL1                            = $4016
CTRL2_FRMCNT                     = $4017


Button_A                         = $80
Button_B                         = $40
Button_Select                    = $20
Button_Start                     = $10
DPad_Up                          = $8
DPad_Down                        = $4
DPad_Left                        = $2
DPad_Right                       = $1

PPUCtrl_NMI                      = $80
PPUCtrl_Spr8x16                  = $20
PPUCtrl_Bg1000                   = $10
PPUCtrl_Spr1000                  = $08
PPUCtrl_VRAMInc                  = $04

PPUMask_EBlue                    = $80
PPUMask_EGreen                   = $40
PPUMask_ERed                     = $20
PPUMask_Spr                      = $10
PPUMask_Bg                       = $08
PPUMask_SprL8                    = $04
PPUMask_BgL8                     = $02
PPUMask_Grayscale                = $01

PPUCtrl_OnNormal                 = PPUCtrl_NMI|PPUCtrl_Spr1000
PPUCtrl_OffNormal                = 0
PPUMask_OnNormal                 = PPUMask_Bg|PPUMask_BgL8|PPUMask_Spr|PPUMask_SprL8
PPUMask_OffNormal                = 0
`,

`
.include "labels/labels.s"
.include "labels/nes.s"
`
];
