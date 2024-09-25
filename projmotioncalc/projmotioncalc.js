
var ay = NaN;
var t = NaN;
var x0 = NaN;
var y0 = NaN;
var xf = NaN;
var yf = NaN;
var ym = NaN;
var v0 = NaN;
var vx = NaN;
var vy0 = NaN;
var vyf = NaN;
var theta = NaN;

var ay_calculated = false;
var t_calculated = false;
var x0_calculated = false;
var y0_calculated = false;
var xf_calculated = false;
var yf_calculated = false;
var ym_calculated = false;
var v0_calculated = false;
var vx_calculated = false;
var vy0_calculated = false;
var vyf_calculated = false;
var theta_calculated = false;

function toRadians(angle)
{
	return angle * (Math.PI / 180);
}

function toDegrees(angle)
{
	return angle * (180 / Math.PI);
}

function calcAY()
{
	if (!isNaN(t) && !isNaN(vy0) && !isNaN(vyf))
	{
		ay = (vyf - vy0) / t;

		return true;
	}

	if (!isNaN(t) && !isNaN(vy0) && !isNaN(y0) && !isNaN(yf))
	{
		ay = yf - y0;
		ay -= (vy0 * t);
		ay /= Math.pow(t, 2);
		ay *= 2;

		return true;
	}

	return false;
}

function calcT()
{
	if (!isNaN(ay) && !isNaN(vy0) && !isNaN(vyf))
	{
		Y = vyf - vy0;
		t = Y / ay;

		return true;
	}
	if (!isNaN(x0) && !isNaN(vx) && !isNaN(xf))
	{
		t = xf - x0;
		t /= vx;

		return true;
	}
	if (!isNaN(ay) && !isNaN(y0) && !isNaN(vy0) && !isNaN(yf))
		{
			A = ay / 2;
			B = vy0;
			C = y0 - yf;
	
			D = Math.pow(B, 2) - (4 * A * C);
			D = Math.sqrt(D);
			
			t = (0 - B) - D;
			t /= (2 * A);
	
			return true;
		}

	return false;
}

function calcX0()
{
	if (!isNaN(t) && !isNaN(vx) && !isNaN(xf))
	{
		x0 = xf - (vx * t);

		return true;
	}

	return false;
}

function calcY0()
{
	if (!isNaN(t) && !isNaN(yf) && !isNaN(vy0) && !isNaN(ay))
	{
		A = vy0 * t;
		A += (0.5 * ay) * Math.pow(t, 2);
		y0 = yf - A;

		return true;
	}

	return false;
}

function calcXF()
{
	if (!isNaN(t) && !isNaN(x0) && !isNaN(vx))
	{
		xf = (t * vx) + x0;

		return true;
	}

	return false;
}

function calcYF()
{
	if (!isNaN(t) && !isNaN(y0) && !isNaN(vy0) && !isNaN(ay))
	{
		yf = y0 + (vy0 * t) + ((0.5 * ay) * Math.pow(t, 2));
		
		return true;
	}

	return false;
}

function calcYM()
{
	if (!isNaN(vy0) && !isNaN(ay))
	{
		A = 0 - vy0;
		ym = A / ay;

		return true;
	}

	return false;
}

function calcV0()
{
	if (!isNaN(vy0) && !isNaN(theta))
	{
		v0 = vy0 / Math.sin(toRadians(theta));

		return true;
	}

	if (!isNaN(vx) && !isNaN(theta))
	{
		v0 = vx / Math.cos(toRadians(theta));

		return true;
	}

	return false;
}

function calcVX()
{
	if (!isNaN(v0) && !isNaN(theta))
	{
		vx = v0 * Math.cos(toRadians(theta));

		return true;
	}

	if (!isNaN(t) && !isNaN(x0) && !isNaN(xf))
	{
		A = xf - x0;
		vx = A / t;

		return true;
	}

	return false;
}

function calcVY0()
{
	if (!isNaN(v0) && !isNaN(theta))
	{
		vy0 = v0 * Math.sin(toRadians(theta));

		return true;
	}

	if (!isNaN(t) && !isNaN(vyf) && !isNaN(ay))
	{
		A = t * ay;
		vy0 = vyf - A;

		return true;
	}

	if (!isNaN(t) && !isNaN(y0) && !isNaN(ay) && !isNaN(yf))
	{
		A = (0.5 * ay) * Math.pow(t, 2);
		A = yf - A;
		vy0 = A - yf;

		return true;
	}

	return false;
}

function calcVYF()
{
	if (!isNaN(t) && !isNaN(vy0) && !isNaN(ay))
	{
		vyf = (ay * t) + vy0;

		return true;
	}

	return false;
}

function calcTheta()
{
	if (!isNaN(vx) && !isNaN(v0))
	{
		theta = toDegrees(Math.acos(vx / v0));

		return true;
	}

	if (!isNaN(vy0) && !isNaN(v0))
	{
		theta = toDegrees(Math.asin(vy0 / v0));

		return true;
	}

	return false;
}

function calculate()
{
	ay_calculated = false;
	t_calculated = false;
	x0_calculated = false;
	y0_calculated = false;
	xf_calculated = false;
	yf_calculated = false;
	ym_calculated = false;
	v0_calculated = false;
	vx_calculated = false;
	vy0_calculated = false;
	vyf_calculated = false;
	theta_calculated = false;

	ay = document.getElementById("ay").value;
	t = document.getElementById("t").value;
	x0 = document.getElementById("x0").value;
	y0 = document.getElementById("y0").value;
	xf = document.getElementById("xf").value;
	yf = document.getElementById("yf").value;
	ym = document.getElementById("ym").value;
	v0 = document.getElementById("v0").value;
	vx = document.getElementById("vx").value;
	vy0 = document.getElementById("vy0").value;
	vyf = document.getElementById("vyf").value;
	theta = document.getElementById("theta").value;

	ay = parseFloat(ay);
	t = parseFloat(t);
	x0 = parseFloat(x0);
	y0 = parseFloat(y0);
	xf = parseFloat(xf);
	yf = parseFloat(yf);
	ym = parseFloat(ym);
	v0 = parseFloat(v0);
	vx = parseFloat(vx);
	vy0 = parseFloat(vy0);
	vyf = parseFloat(vyf);
	theta = parseFloat(theta);

	var change = true;

	while (change)
	{
		change = false;

		if (isNaN(ay))
		{
			change ||= calcAY();
			ay_calculated = true;
		}

		if (isNaN(t))
		{
			change ||= calcT();
			t_calculated = true;
		}

		if (isNaN(x0))
		{
			change ||= calcX0();
			x0_calculated = true;
		}

		if (isNaN(y0))
		{
			change ||= calcY0();
			y0_calculated = true;
		}

		if (isNaN(xf))
		{
			change ||= calcXF();
			xf_calculated = true;
		}

		if (isNaN(yf))
		{
			change ||= calcYF();
			yf_calculated = true;
		}

		if (isNaN(ym))
		{
			change ||= calcYM();
			ym_calculated = true;
		}

		if (isNaN(v0))
		{
			change ||= calcV0();
			v0_calculated = true;
		}

		if (isNaN(vx))
		{
			change ||= calcVX();
			vx_calculated = true;
		}

		if (isNaN(vy0))
		{
			change ||= calcVY0();
			vy0_calculated = true;
		}

		if (isNaN(vyf))
		{
			change ||= calcVYF();
			vyf_calculated = true;
		}

		if (isNaN(theta))
		{
			change ||= calcTheta();
			theta_calculated = true;
		}
	}

	document.getElementById("ay").value = ay;
	document.getElementById("t").value = t;
	document.getElementById("x0").value = x0;
	document.getElementById("y0").value = y0;
	document.getElementById("xf").value = xf;
	document.getElementById("yf").value = yf;
	document.getElementById("ym").value = ym;
	document.getElementById("v0").value = v0;
	document.getElementById("vx").value = vx;
	document.getElementById("vy0").value = vy0;
	document.getElementById("vyf").value = vyf;
	document.getElementById("theta").value = theta;

	//var everything_in_a_string = "ay = " + ay.toString() + "\nt = " + t.toString() + "\nx0 = " + x0.toString() + "\ny0 = " + y0.toString() + "\nxf = " + xf.toString() + "\nyf = " + yf.toString() + "\nym = " + ym.toString() + "\nv0 = " + v0.toString() + "\nvx = " + vx.toString() + "\nvy0 = " + vy0.toString() + "\nvyf = " + vyf.toString() + "\nΘ = " + theta.toString();
	//alert(everything_in_a_string);
}

function clearInputs()
{
	document.getElementById("ay").value = "";
	document.getElementById("t").value = "";
	document.getElementById("x0").value = "";
	document.getElementById("y0").value = "";
	document.getElementById("xf").value = "";
	document.getElementById("yf").value = "";
	document.getElementById("ym").value = "";
	document.getElementById("v0").value = "";
	document.getElementById("vx").value = "";
	document.getElementById("vy0").value = "";
	document.getElementById("vyf").value = "";
	document.getElementById("theta").value = "";
}

function clearCalculated()
{
	if (ay_calculated)
	{
		document.getElementById("ay").value = "";
	}

	if (t_calculated)
	{
		document.getElementById("t").value = "";
	}

	if (x0_calculated)
	{
		document.getElementById("x0").value = "";
	}

	if (y0_calculated)
	{
		document.getElementById("y0").value = "";
	}

	if (xf_calculated)
	{
		document.getElementById("xf").value = "";
	}

	if (yf_calculated)
	{
		document.getElementById("yf").value = "";
	}

	if (ym_calculated)
	{
		document.getElementById("ym").value = "";
	}

	if (v0_calculated)
	{
		document.getElementById("v0").value = "";
	}

	if (vx_calculated)
	{
		document.getElementById("vx").value = "";
	}

	if (vy0_calculated)
	{
		document.getElementById("vy0").value = "";
	}

	if (vyf_calculated)
	{
		document.getElementById("vyf").value = "";
	}

	if (theta_calculated)
	{
		document.getElementById("theta").value = "";
	}
}
