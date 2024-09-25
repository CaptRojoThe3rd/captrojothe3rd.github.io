
const code = [
`
NMI:
	rti

IRQ:
	rti

.segment "VECTORS"
	.word NMI
	.word Reset
	.word IRQ
`,

`
lda #PPUCtrl_OnNormal
sta PPUCTRL
`,

`
brk
nop
`
];
