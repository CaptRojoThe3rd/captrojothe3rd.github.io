
const code = [
`
.segment "PRG"

Reset:
	jmp Reset

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
.segment "HEADER"
	.byte $4e, $45, $53, $1a
	.byte $02, $01, $01, $08
	.byte $00, $00, $00, $00
	.byte $00, $00, $00, $01
`,

`
MEMORY {
	HEADER: start = $0, size = $10, file = %O, fill = yes;
	PRG: start = $8000, size = $8000, file = %O, fill = yes;
	CHR: start = $0000, size = $2000, file = %O, fill = yes;
}

SEGMENTS {
	HEADER: load = HEADER, type = ro;
	PRG: load = PRG, type = ro;
	VECTORS: load = PRG, type = ro, start = $fffa;
	CHR: load = CHR, type = ro, optional = yes;
}
`,

`

@echo off

set path=%path%;..\\bin\\
set CC65_HOME=..\\

c:\\cc65\\bin\\ca65 main.s --cpu 6502x
c:\\cc65\\bin\\ld65 -C layout.cfg -o "build\\ExampleNESGame.nes" main.o

del *.o

build\\ExampleNESGame.nes

`,

`
{
	"version": "2.0.0",
	"tasks": [
		{
			"label": "Compile Game",
			"type": "shell",
			"command": ".\\\\build\\\\compile.bat",
			"presentation": {
				"reveal": "always",
				"panel": "new"
			},
			"problemMatcher": [],
			"group": {
				"kind": "build",
				"isDefault": true
			}
		}
	]
}
`
];
