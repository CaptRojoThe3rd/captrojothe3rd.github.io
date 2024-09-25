
const nes_page_buttton_content = `
	<br>
	<p class="general-font">NES Dev Guide by CaptRojo</p>

	<br>
	<a class="url-font" onclick="goToPage('nesguide/definitions/index.html');">0 - Definitions</a>

	<br>
	<a class="url-font" onclick="goToPage('nesguide/software/index.html');">1 - Software</a>
	<br>
	<a class="url-indent" onclick="goToPage('nesguide/software/mesen2/index.html');">1.1 - Mesen 2</a>
	<br>
	<a class="url-indent" onclick="goToPage('nesguide/software/vscode/index.html');">1.2 - VS Code</a>
	<br>
	<a class="url-indent" onclick="goToPage('nesguide/software/cc65/index.html');">1.3 - CC65</a>
	<br>
	<a class="url-indent" onclick="goToPage('nesguide/software/yychr/index.html');">1.4 - YYCHR</a>
	<br>
	<a class="url-indent" onclick="goToPage('nesguide/software/hxd/index.html');">1.5 - Hex Editor</a>
	<br>
	<a class="url-indent" onclick="goToPage('nesguide/software/python/index.html');">1.6 - Python</a>

	<br>
	<a class="url-font" onclick="goToPage('nesguide/setup/index.html');">2 - Setup</a>
	<br>
	<a class="url-indent" onclick="goToPage('nesguide/setup/minimumcode/index.html');">2.1 - Minimum Code</a>
	<br>
	<a class="url-indent" onclick="goToPage('nesguide/setup/addingchr/index.html');">2.2 - Adding CHR Data</a>

	<br>
	<a class="url-font" onclick="goToPage('nesguide/nescpu/index.html');">3 - The NES CPU</a>
	<br>
	<a class="url-indent" onclick="goToPage('nesguide/nescpu/6502assembly/index.html');">3.1 - 6502 Assembly</a>
	<br>
	<a class="url-indent-2" onclick="goToPage('nesguide/nescpu/6502assembly/registersmemory/index.html');">3.1.1 - Registers & Memory</a>
	<br>
	<a class="url-indent-3" onclick="goToPage('nesguide/nescpu/6502assembly/registersmemory/stack/index.html');">3.1.1.1 - The Stack</a>
	<br>
	<a class="url-indent-3" onclick="goToPage('nesguide/nescpu/6502assembly/registersmemory/labels/index.html');">3.1.1.2 - Labels</a>
	<br>
	<a class="url-indent-2" onclick="goToPage('nesguide/nescpu/6502assembly/addressingmodes/index.html');">3.1.2 - Addressing Modes</a>
	<br>
	<a class="url-indent-2" onclick="goToPage('nesguide/nescpu/6502assembly/math/index.html');">3.1.3 - Math</a>
	<br>
	<a class="url-indent-2" onclick="goToPage('nesguide/nescpu/6502assembly/branchingloops/index.html');">3.1.4 - Branching & Loops</a>
	<br>
	<a class="url-indent-2" onclick="goToPage('nesguide/nescpu/6502assembly/illegalinstructions/index.html');">3.1.5 - Illegal Instructions</a>
	<br>
	<a class="url-indent" onclick="goToPage('nesguide/nescpu/interrupts/index.html');">3.2 - Interrupts</a>
`;

function loadNESPageButtons()
{
	// Put in event listener because of race condition
	window.addEventListener("load", function () {
		document.getElementById("nes-page-button-content").innerHTML = nes_page_buttton_content;
	
		var element = document.getElementById("nes-content");
		var position_info = element.getBoundingClientRect();
		var height = position_info.height;

		if (height > 800)
		{
			height += 300;
		}

		document.getElementById("nes-page-button-content").style.setProperty("height", (height + 20) + 'px');
	})
}

function loadCodeContent(code_array, amount)
{
	var name = "";
	var stuff = ``;

	for (var i = 0; i <= amount; i++)
	{
		name = "code-".concat(i);
		stuff = code_array[i];

		stuff = stuff.replace("\n", "");
		stuff = stuff.replaceAll("\n", "<br>");
		stuff = stuff.replaceAll("\t", "&nbsp;&nbsp;&nbsp;&nbsp;");
		stuff = stuff.replaceAll(" ", "&nbsp;");

		document.getElementById(name).innerHTML = stuff;
	}
}
