
const code = [
`
clc                    ; Implied
lsr A                  ; Accumulator
adc #$ee               ; Immediate
adc $ee                ; Zero Page
adc $ee,X              ; Zero Page Indexed With X
adc $eeee              ; Absolute
adc $eeee,X            ; Absolute Indexed With X
adc $eeee,Y            ; Absolute Indexed With Y
adc ($ee,X)            ; Zero Page Indexed Indirect
adc ($ee),Y            ; Zero Page Indirect Indexed
bcc Label              ; Relative
jmp ($eeee)            ; Indirect
`
];
