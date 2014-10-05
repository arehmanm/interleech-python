
var willhem = {};

$(function () {
    "use strict";
    var applicantTop = "applicantTop";
    var lodgerTop = "lodgerTop";
    willhem = function () {

        //var templateName = templateData("templateName");

        //function templateData(key) {
        //    var x = $("div[data-name=templateData] div[data-name=" + key + "]");
        //    if (x.length == 0) {
        //        willhem.log.error("missing templateData " + key);
        //    }
        //    return x.text();
        //}

        function trim(str) {
            // remove leading and ending spaces
            str = str.replace(/ */, "");
            str = str.replace(/ *$/, "");

            return str;

        }

        function getUserInput(field) {
            if (field.is("select")) {
                return field.children("option:selected").text();
            } else {
                return field.val();
            }
        }

        function validateWithin(wrap) {
            return validate($(wrap).find("select,input,checkbox,textarea"));
        }

        function validate(fieldList) {

            var isvalid = true;

            $.each(fieldList, function (i, field) {
                var f = $(field);
                var isCheckbox = f.is(":checkbox");
                var isTextfield = f.is("input[type=text],input[type=password],textarea");
                var isTextfieldNotPassword = f.is("input[type=text],textarea");
                var isSelectbox = f.is("select");

                // Cleanup input

                if (isTextfieldNotPassword) {
                    var newvalue = f.val();

                    newvalue = trim(newvalue);

                    var removepattern = f.data("removepattern");

                    if (removepattern) {
                        newvalue = newvalue.replace(new RegExp(removepattern, "g"), "");
                    }

                    f.val(newvalue);

                }

                // Check regex
                var pattern = f.data("pattern");
                var success;
                var isCivicNumber = f.data('iscivicnumber');


                if (pattern) {
                    if (isCivicNumber == "True") {
                        var civicOrCoNumber = f.val();
                        success = civicOrCoNumber.isCivicNumber() || civicOrCoNumber.isCoNumber();
                    }
                    else if (isCheckbox) {
                        success = f.prop("checked") == pattern;
                    } else if (isTextfield || isSelectbox) {
                        success = new RegExp(pattern).test(f.val());
                    } else {
                        console.error("unexpected validation", f);
                    }

                    if (success) {
                        f.siblings(".error-format").hide();
                    } else {
                        f.siblings(".error-format").show();
                        isvalid = false;
                    };
                }
            });
            return isvalid;
        }

        // Kan troligen ta bort:

        //function showErrorMessage(nameList) {

        //    _.each(nameList, function(x) {
        //        var inputfield = $("*[name=" + x + "]", form);
        //        var errormessage = inputfield.next(".error-format"); 
        //        errormessage.show();
        //    });
        //}

        function getByName(name, scope) {
            return $("*[name=" + name + "]", scope);
        }

        function renderStepProgressbar(step, t) {
            t.find(".step-container").addClass('active in');
            t.find('.tab-pane:eq(0), .tab-pane:eq(1), .tab-pane:eq(2)').addClass('active in');

            t.find(".step-container").hide();
            t.find(".step-container:eq(" + step + ")").show();


            t.find('.tab-pane:eq(0), .tab-pane:eq(1), .tab-pane:eq(2)').hide();
            t.find(".tab-pane:eq(" + step + ")").show();

            t.find('.progressbar a').removeClass('active');
            t.find('.progressbar a:eq(' + step + ')').addClass('active in');

        }

        function nextStepProgressbar(step, t) {
            step++;
            renderStepProgressbar(step, t);
            return step;
        }

        function prevStepProgressbar(step, t) {
            step--;
            renderStepProgressbar(step, t);
            return step;
        }

        function setNewItemNr(number, t) {

            t.each(function() {
                $(this).attr("data-newitems", number);

                var tLink = $(this).find("a").first();
                tLink.html(tLink.html().match(/(\w|\s)+/)[0].trim());
                //if (number > 0) {
                //    tLink.html(tLink.html() + " (" + t.attr("data-newitems") + ")");
                //}
                if (number > 0) {
                    tLink.html(tLink.html() + '<span class="badge pull-right">' + $(this).attr("data-newitems") + '</span>');
                }
            });

        }

        function getNewItemNr(t) {
            var totalNewsItems = t.attr("data-newitems");
            if (totalNewsItems == undefined)
                return 0;

            return totalNewsItems;

        }
        // ----------------------------------------------------------------------------

        function initWizardApplicant() {

            $("#coProgressBar").hide();

            var step1 = function (nextStep, t, showServerError) {

                t.find(".error-fromserver").hide();

                var civicField = t.find("input[name=CivicNumber]");
                var civicNumber = civicField.val();
                $.post("/User/UserExist", { user: civicNumber }, function (data) {
                    switch (data) {
                        case "True":
                            civicField.siblings(".error-fromserver").text("Användaren finns redan").show();

                            break;
                        case "False":
                            nextStep(applicantTop);
                            break;
                        default:
                            alert(data);
                    }

                });
            };

            var step4 = function (nextStep, t, showServerError) {

                var password = t.find("input[name=Password]").val();
                var repeatPassword = t.find("input[name=RepeatPassword]").val();

                if (password == repeatPassword) {

                    var dds = t.find(".preview-details dd");
                    $.each(dds, function (i, el) {
                        var getfrom = $(el).data("getfrom");
                        if (getfrom) {

                            var field = willhem.getByName(getfrom, t);
                            var value = willhem.getUserInput(field);

                            $(el).text(value);

                        } else {
                            console.error($(el), "getfrom error");
                            return;
                        }
                    });

                    nextStep(applicantTop);
                }

            };

            var step5 = function (nextStep, t, showServerError) {
                $.post("/User/Add", t.find("form").serialize(), function (data) {
                    if (data == "Ok") {
                        nextStep(applicantTop);
                    } else {
                        alert(data);
                    }

                });
            };

            var step6 = function (nextStep, t, showServerError) {

                t.find(".error-fromserver").hide();

                var coCivicField = t.find("input[name=CoCivicNumber]");
                var civicField = t.find("input[name=CivicNumber]");

                if (coCivicField.val() == civicField.val()) {
                    coCivicField.siblings(".error-fromserver").text("Personnumret är samma som huvudsökande").show();
                    return;
                }

                var coCivicNumber = coCivicField.val();
                $.post("/User/UserExist", { user: coCivicNumber }, function (data) {
                    switch (data) {
                        case "True":
                            coCivicField.siblings(".error-fromserver").text("Användaren finns redan").show();

                            break;
                        case "False":
                            nextStep(applicantTop);
                            break;
                        default:
                            alert(data);
                    }

                });
            };
            var step8 = function (nextStep, t, showServerError) {
                var coCivicField = t.find("input[name=CoCivicNumber]");
                var coNoteField = t.find("input[name=CoNote]");

                if (coCivicField.val() != "" && coNoteField.val() != "") {
                    t.find(".coControlInfo").show();
                    nextStep(applicantTop);
                }
                
            };
            $("#wizardApplicant").willewizard({
                //step 6 - 8 is coaaplicant
                onStep: [step1, null, null, step4, step5, null ,step6, null, step8]
            });
        }

        // ----------------------------------------------------------------------------

        function initWizardLodger() {

            var step1 = function (nextStep, t, showServerError) {

                t.find(".error-fromserver").hide();

                var civicNumber = t.find("input[name=CivicNumber]").val();
                var contractCode = t.find("input[name=ContractCode]").val();

                $.post("/User/UserHasContract", { civicNumber: civicNumber, contractCode: contractCode }, function (data) {
                    if (data == "Ok") {
                        nextStep(lodgerTop);
                    } else {
                        showServerError(data);
                    }

                });
            };

            var step2 = function (nextStep, t, showServerError) {

                var password = t.find("input[name=Password]").val();
                var repeatPassword = t.find("input[name=RepeatPassword]").val();

                if (password == repeatPassword) {

                    $.post("/User/Add", t.find("form").serialize(), function (data) {
                        if (data == "Ok") {
                            nextStep(lodgerTop);
                        } else {
                            alert(data);
                        }

                    });
                }
            };


            $("#wizardLodger").willewizard({
                onStep: [step1, step2]
            });

        }

        // ----------------------------------------------------------------------------

        function initLazy() {

            $("a[data-debug=lazy]").click(function (e) {

                e.preventDefault();

                var lazyelements = $("*[data-lazy]");

                $.each(lazyelements, function (i, el) {

                    var lazyvalue = $(el).data("lazy");

                    if ($(el).is(":checkbox")) {
                        $(el).prop("checked", lazyvalue);
                    } else {
                        $(el).val(lazyvalue);
                    }


                });


            });
        }

        // ----------------------------------------------------------------------------

        function start() {

            if ($("#wizardApplicant").length == 1) initWizardApplicant();
            if ($("#wizardLodger").length == 1) initWizardLodger();

            initLazy();
            

        };

        return {

            // public function
            start: start,
            validate: validate,
            getUserInput: getUserInput,
            getByName: getByName,
            validateWithin: validateWithin,
            nextStepProgressbar: nextStepProgressbar,
            prevStepProgressbar: prevStepProgressbar,
            setNewItemNr: setNewItemNr,
            getNewItemNr: getNewItemNr
        };

    }();

    // ------------------------------------------------------------------------------

    willhem.log = function () {

        function error(message) {
            alert("error: " + message);
            throw (message);
        }

        function info(message) {
            console.log(message);
        }

        return {
            error: error,
            info: info
        };

    }();

    // ------------------------------------------------------------------------------


    $.fn.willewizard = function (options) {

        

        var settings = $.extend({
            onStep: []
        }, options);


        var step = 0;
        var t = $(this);

        var repeatPassword = t.find("input[name=RepeatPassword]");
        var password = t.find("input[name=Password]");

        var mainProgressbar = t.find(".progress-bar-container").first();

        

        function renderStep() {

            t.find(".step-container").hide();
            t.find(".step-container:eq(" + step + ")").show();

            t.find(".modal-title .tab-pane").hide();
            t.find(".modal-title .tab-pane:eq(" + step + ")").show();

            
            mainProgressbar.find('.progressbar a').removeClass('active');
            mainProgressbar.find('.progressbar a:eq(' + step + ')').addClass('active');

        }

        function coRenderStep() {

            goToTop(applicantTop);

            var firstCoStep = 6;
            if (step < firstCoStep) {
                step = firstCoStep;
            }
            t.find(".step-container").hide();
            t.find(".step-container:eq(" + step + ")").show();

            t.find(".modal-title .tab-pane").hide();
            t.find(".modal-title .tab-pane:eq(" + step + ")").show();

            mainProgressbar.hide();
            var coProgressbar = t.find("#coProgressBar");
            coProgressbar.show();

            var progressBarStep = step - firstCoStep;
            coProgressbar.find('.progressbar a').removeClass('active');
            coProgressbar.find('.progressbar a:eq(' + progressBarStep + ')').addClass('active');

        }

        function renderToStepFromCo(newStep, topAnchorId) {
            goToTop();
            step = newStep;
            
            renderStep();

            t.find("#coProgressBar").hide();
            mainProgressbar.show();
        }
        function nextStep(topAnchorId) {

            goToTop(topAnchorId);

            step++;
            var firstCoStep = 6;
            var lastCoStep = 9;
            var setPasswordStep = 3;
            
            if (step == lastCoStep)
                renderToStepFromCo(setPasswordStep);
            else if (step < firstCoStep)
                renderStep();
            else {
                coRenderStep();
            }
        }
        function prevStep() {
            step--;
            renderStep();
        }

        function coPrevStep(topAncorId) {
            goToTop(topAncorId);
            step--;
            coRenderStep();
        }
        function goToTop(topAnchorId) {
            //$('html,body').scrollTop($(window.location.hash).offset().top - 50);
            window.location = window.location.href.split("#")[0] + "#" +topAnchorId;
            //window.scrollTo(0, 0);
        }
        
        function showServerError(data) {
            var errorfield = data.split("|")[0];
            var errormessage = data.split("|")[1];

            var el;
            if (errorfield == "Unexpected") {
                alert(errormessage);
            } else {
                el = t.find("input[name=" + errorfield + "]").siblings(".error-fromserver");
                el.text(errormessage);
                el.show();
            }

        };

        renderStep();

        t.find('.step-container .next').click(function (e) {
            e.preventDefault();

            t.find(".error-fromserver").hide();

            var checkfields = $(this).parents(".step-container").find("input,select,textarea");

            if (willhem.validate(checkfields)) {

                var fun = settings.onStep[step];

               
                if (fun == null) 
                    nextStep();
                else 
                    settings.onStep[step](nextStep, t, showServerError);
                   
                

            }

        });

        t.find('.step-container .prev').click(function (e) {
            e.preventDefault();
            var firstCoStep = 6;
            var editLivingStep = 2;
            if (step == firstCoStep) {
                renderToStepFromCo(editLivingStep);
            }
            else if (step < firstCoStep)
                prevStep(lodgerTop);
            else {
                coPrevStep(lodgerTop);
                
            }
            console.log("prev");
            //$(this).tab('show');
        });

        t.find("input, textarea").blur(function () {
            //if ($(this).val() != "")
            willhem.validate($(this));
        });

        t.find("select").change(function () {
            willhem.validate($(this));
        });

        t.find("input:checkbox").click(function () {
            willhem.validate($(this));
        });


        function checkPassword() {
            t.find(".error-same-password").hide();
            if (repeatPassword.val()) {
                if (repeatPassword.val() != password.val())
                    t.find(".error-same-password").show();
            }
        }

        password.blur(function () {
            checkPassword();
        });

        repeatPassword.blur(function () {
            checkPassword();
        });


        t.find(".addCoApplicant").click(function (e) {
            e.preventDefault();
            coRenderStep();
        });

        return this;

    };

});