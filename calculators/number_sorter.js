console.log("Number Sorter + Median, Mean, Quartile, & IQR Finder v3.0\n");
// Rounding thing
const roundOffTo = (num, factor = 1) => {
    const quotient = num / factor;
    const res = Math.round(quotient) * factor;
    return res;
};
// Reset the input and result
function reset_input() {
    var input_field = document.getElementById("raw_user_input");
    input_field.value = "";
    var input_field = document.getElementById("separator");
    input_field.value = "";
	var number_sorter_output = document.getElementById("number_sorter_output");
    number_sorter_output.innerHTML = "";
}
// Sorts the numbers and does calculations with them
function sort_and_calculate(calculate_data) {
    var raw_user_input = document.getElementById("raw_user_input").value;
    var separator_text = document.getElementById("separator").value;
    console.log(separator_text);
	var number_sorter_output = document.getElementById("number_sorter_output");
    // Show an error message if no numbers are provided
    if (raw_user_input == "") {
        number_sorter_output.innerHTML = "No numbers provided.";
        return;
    }
    // Convert user input into an array of floats
    var numbers_as_strings = raw_user_input.split(separator_text);
    if (numbers_as_strings.length == 1) {
        number_sorter_output.innerHTML = "Only one number provided.";
        return;
    }
    var numbers = []
    for (let i = 0; i < numbers_as_strings.length; i++) {
        numbers[i] = parseFloat(numbers_as_strings[i]);
    }
    // Sort the array of floats from least to greatest
    numbers.sort(function (a, b) {
        return a - b;
    });
    // Turn the array back into a string that will be displayed to the user
    var sorted_numbers_string = "";
    for (let i = 0; i < numbers.length; i++) {
        sorted_numbers_string = sorted_numbers_string + numbers[i].toString();
        sorted_numbers_string = sorted_numbers_string + ", ";
    }
    // Do calculations with the numbers
    if (calculate_data) {
        // Median
        if (numbers.length % 2 == 0) {
            var median = (numbers[numbers.length / 2] + numbers[numbers.length / 2 - 1]) / 2;
        } else if (numbers.length == 3) { // Things just break when the list of numbers is 4 or less, so I'm hardcoding solutions
            var median = numbers[1];
        } else {
            var median = numbers[numbers.length / 2 - 0.5];
        }
        // Mean
        var total = 0;
        for (i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        var mean = total / numbers.length;
        mean = roundOffTo(mean, 0.001)
        // Quartile 1
        var numbers_q1_raw = "";
        if (numbers.length % 2 == 0) {
            for (let i = 0; i < Math.round(numbers.length / 2); i++) {
                numbers_q1_raw = numbers_q1_raw + numbers[i].toString() + " ";
            }
        } else {
            for (let i = 0; i < Math.round(numbers.length / 2 - 1); i++) {
                numbers_q1_raw = numbers_q1_raw + numbers[i].toString() + " ";
            }
        }
        numbers_q1_raw = numbers_q1_raw.slice(0, numbers_q1_raw.length - 1);
        numbers_q1 = numbers_q1_raw.split(" ");
        for (let i = 0; i < numbers_q1.length; i++) {
            numbers_q1[i] = parseFloat(numbers_q1[i])
        }
        if (numbers_q1.length % 2 == 0) {
            var q1 = (numbers_q1[numbers_q1.length / 2] + numbers_q1[numbers_q1.length / 2 - 1]) / 2;
        } else if (numbers.length == 4) {
            var q1 = (numbers[0] + numbers[1]) / 2;
        } else if (numbers.length == 3) {
            var q1 = numbers[0];
        } else {
            var q1 = numbers_q1[parseInt(numbers_q1.length / 2)];
        }
        // Quartile 3
        var numbers_q3_raw = "";
        if (numbers.length % 2 == 0) {
            for (let i = parseInt(numbers.length / 2); i < numbers.length; i++) {
                numbers_q3_raw = numbers_q3_raw + numbers[i].toString() + " ";
            }
        } else {
            for (let i = parseInt(numbers.length / 2) + 1; i < numbers.length; i++) {
                numbers_q3_raw = numbers_q3_raw + numbers[i].toString() + " ";
            }
        }
        numbers_q3_raw = numbers_q3_raw.slice(0, numbers_q3_raw.length - 1);
        numbers_q3 = numbers_q3_raw.split(" ");
        for (let i = 0; i < numbers_q3.length; i++) {
            numbers_q3[i] = parseFloat(numbers_q3[i])
        }
        if (numbers_q3.length % 2 == 0) {
            var q3 = (numbers_q3[numbers_q3.length / 2] + numbers_q3[numbers_q3.length / 2 - 1]) / 2;
        } else if (numbers.length == 4) { // Things just break when the list of numbers is 4 or less, so I'm hardcoding a solution
            var q3 = (numbers[2] + numbers[3]) / 2;
        } else if (numbers.length == 3) {
            var q3 = numbers[2];
        } else if (numbers.length == 2) {
            var q3 = numbers[1];
        } else {
            var q3 = numbers_q3[parseInt(numbers_q3.length / 2)];
        }
        // IQR
        var iqr = q3 - q1;
        // Range
        var range = numbers[numbers.length - 1] - numbers[0];
        // Mean Absolute Deviation
        var mean_absolute_deviation = 0;
        for (let i = 0; i < numbers.length; ++i) {
            mean_absolute_deviation += Math.abs(mean - numbers[i]);
        }
        mean_absolute_deviation /= numbers.length;
        // Standard Deviation
        var standard_deviation = 0;
        for (let i = 0; i < numbers.length; ++i) {
            standard_deviation += (Math.abs(mean - numbers[i]) ** 2);
        }
        standard_deviation /= numbers.length;
        standard_deviation = Math.sqrt(standard_deviation);
        // Results
        sorted_numbers_string = sorted_numbers_string.slice(0, sorted_numbers_string.length - 2);
        var results = "Sorted Numbers: " + sorted_numbers_string + "<br />" + "Median: " + median.toString() + "<br />" + "Mean: " + mean.toString() + "<br />" + "Quartile 1: " + q1.toString() + "<br />" + "Quartile 3: " + q3.toString() + "<br />" + "IQR: " + iqr.toString() + "<br />" + "Range: " + range.toString() + "<br />" + "Mean Absolute Deviation: " + mean_absolute_deviation.toString() + "<br />" + "Standard Deviation: " + standard_deviation.toString();
        number_sorter_output.innerHTML = results;
    } else { // If the user doesn't want calculations do be done, just show the sorted numbers
        sorted_numbers_string = sorted_numbers_string.slice(0, sorted_numbers_string.length - 2);
        number_sorter_output.innerHTML = "Sorted Numbers:\n" + sorted_numbers_string;
    }
}
