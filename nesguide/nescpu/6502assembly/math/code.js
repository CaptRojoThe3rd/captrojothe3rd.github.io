
const code = [
`
; Add
lda $00
clc
adc $01
sta $02

; Subtract
lda $00
sec
sbc $01
sta $02
`,

`
; Add two 16-bit numbers

; Add lower 8 bits
lda $00
clc
adc $02
sta $04

; Add upper 8 bits
lda $01
adc $03
sta $05
`,

`
; Subtract two 16-bit numbers

; Subtract lower 8 bits
lda $00
sec
sbc $02
sta $04

; Subtract upper 8 bits
lda $01
sbc $03
sta $05
`,

`
; Multiply by 2
lda $00
asl A
sta $01

; Divide by 4
lda $00
lsr A
lsr A
sta $01

; You can also bit shift a memory address, which is useful if you want to store the result at the same location:
lsr $00
asl $01
`,

`
; Multiply by 3 - Multiply by 2, then add the original value (X*3 = X*2 + X)
lda $00
asl A
clc
adc $00
sta $01
`,

`
Mutliply8x8:
	lda #0
	ldx #8
@L1:
	lsr multiplier
	bcc @L2
	clc
	adc multiplicand
@L2:
	ror A
	ror result
	dex
	bne @L1
	sta result+1
	rts


Divide16by16: ; Note: dividend is also the quotient
	lda #0
	sta remainder
	sta remainder+1
	ldx #16
@L1:
	asl dividend
	rol dividend=1
	rol remainder
	rol remainder+1
	lda remainder
	sec
	sbc divisor
	tay
	lda remainer+1
	sbc divisor+1
	bcc @L2
	sta remainder+1
	sty remainder
	inc dividend
@L2:
	dex
	bne @L1
	rts
`,

`
...
jsr Multiply8x8
...

...
jsr Divide16by16
...
`,

`
ASL:
	C <- byte <- 0

LSR:
	0 -> byte -> C

ROL:
	C <- byte <- C

ROR:
	C -> byte -> C
`,

`
; Shift right
lsr $01
ror $00

; Shift left
asl $00
rol $01
`,

`
	; Shift left with signed numbers
	lda $00
	asl A
	bcc :+
	ora #$80 ; Add the sign with bitwise OR
:
	sta $01
`,

`
	; Shift right with signed numbers
	lda $00
	cmp #$80
	ror A
	sta $01
`,

`
; Increment
inc $00
inx
iny

; Decrement
dec $00
dex
dey

; There are no INC A / DEC A instructions - You have to use ADC / SBC
`
];
