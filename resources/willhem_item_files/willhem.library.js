Date.prototype.yyyymmdd = function () {

    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based         
    var dd = this.getDate().toString();

    return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]);
};

String.prototype.isCivicNumber = function () {

    var formattedCivicNumber = this.replace(" ", "");
    var civicNrRegex = new RegExp(/(^[0-9]{8}[- +][0-9]{4}$|^[0-9]{12}$)/);

    if (!civicNrRegex.test(formattedCivicNumber)) {
        return false;
    };

    formattedCivicNumber = formattedCivicNumber.replace("-", "").replace("+", "");
    if (formattedCivicNumber.length == 12) {
        formattedCivicNumber = formattedCivicNumber.substr(2, 10);
    }
    var sum = 0;
    for (var i = 0; i < formattedCivicNumber.length - 1; i++) {
        var number = parseInt(formattedCivicNumber.substr(i, 1));

        if ((i % 2) == 0) {
            number *= 2;
        }

        sum += number >= 10 ? parseInt(number / 10) + (number % 10) : number;
    }

    if (sum % 10 == 0) {
        sum = 0;
    } else {
        sum = 10 - (sum % 10);
    }

    var check = parseInt(formattedCivicNumber.substr(formattedCivicNumber.length - 1, 1));

    return sum == check;
};

String.prototype.isCoNumber = function () {
    var formattedCoNumber = this.replace(" ", "");
    var coNrRegex = new RegExp(/(^[0-9]{8}[- +][0-9]{4}$|^[0-9]{10}$)/);

    if (!coNrRegex.test(formattedCoNumber)) {
        return false;
    };

    var coMonth = formattedCoNumber.substr(2, 2);
    if (20 < parseInt(coMonth)) {
        return true;
    }

    return false;
};