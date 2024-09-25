
const code = [
`
Reset:
	sei
	cld

	lda #$40
	sta CTRL2_FRMCNT

	ldx #$ff
	txs

	bit PPUSTATUS
:
	bit PPUSTATUS
	bpl :-

	inx
	txa
:
	sta $00,x
	sta $100,x
	sta $200,x
	sta $300,x
	sta $400,x
	sta $500,x
	sta $600,x
	sta $700,x
	inx
	bne :-

	sta PPUCTRL
	sta PPUMASK

	bit PPUSTATUS
:
	bit PPUSTATUS
	bpl :-
`
];
