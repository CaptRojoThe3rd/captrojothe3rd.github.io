
const code = [
`
; Branch Instructions

beq Label			; Branch If Equal (Zero Flag Set)
bne Label			; Branch If Not Equal (Zero Flag Clear)
bcs Label			; Branch If Carry Set (Carry Flag Set)
bcc Label			; Branch If Carry Clear (Carry Flag Clear)
bmi Label			; Branch If Minus (Negative Flag Set)
bpl Label			; Branch If Plus (Negative Flag Clear)
bvs Label			; Branch If Overflow Set (Overflow Flag Set)
bvc Label			; Branch If Overflow Clear (Overflow Flag Clear)
`,

`
Loop:
	...

	; Branch If Equal
	beq Loop


Loop:
	...

	; Branch If Equal (more than 128 bytes away)
	bne :+
	jmp Loop
:
`,

`
cmp			; Compare with Accumulator
cpx			; Compare with X
cpy			; Compare with Y
`,

`
Label:
	; Equal
	cmp $00
	beq Label

	; Not Equal
	cmp $00
	bne Label

	; Less Than
	cmp $00
	bcc Label

	; Greater Than Or Equal To
	cmp $00
	bcs Label
`,

`
Label:
	; Less Than (Signed)
	cmp $00
	bpl Label

	; Greater Than Or Equal To (Signed)
	cmp $00
	bmi Label
`,

`
	ldx #123
Loop:
	...
	dex
	bne Loop
`,

`
	ldx #123
Loop:
	...
	dex
	cmp #42
	bne Loop
`,

`
CLC			; Clear Carry
SEC			; Set Carry
CLI			; Clear Interrupt Disable
SEI			; Set Interrupt Disable
CLV			; Clear Overflow
CLD			; Clear Decimal Mode
SED			; Set Deciaml Mode
`,

`
; Clear Zero
bit AddressOfNonZeroValue

; Set Zero
bit AddressOfZeroValue

; Set Overflow
bit AddressOfRTSInstruction

; Clear Negative
lda #$7f ; This can be any value between #$00-#$7f

; Set Negative
lda #$80 ; This can be any value between #$80-#$ff
`
];
