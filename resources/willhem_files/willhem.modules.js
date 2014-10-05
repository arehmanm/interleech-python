$(function () {




    // --- Modules ---------------------------------------------------------------------------

    $(".mLoginMyPages").each(function () {
        var t = $(this);
        var form = t.find("form");
        var loginButton = t.find("button[type=submit]");

        t.find("input").blur(function () {
            willhem.validate($(this));
        });

        loginButton.click(function (e) {
            e.preventDefault();
            if (willhem.validateWithin(form)) {
                form.submit();
            }
        });

    });
    $(".mUpdateAccount").each(function() {
        var t = $(this);
        var btnUpdateAccount = t.find("#btnUpdateAccount");
        var serverError = t.find(".error-format");
        var updateContractCode = t.find("input");

        var step1 = t.find(".modal-body .tab-content .step-container:eq(0), .modal-title .tab-content .tab-pane:eq(0)");
        var step2 = t.find(".modal-body .tab-content .step-container:eq(1), .modal-title .tab-content .tab-pane:eq(1)");
        //t.find(".modal-title .tab-pane").hide();
        step2.hide();

        updateContractCode.blur(function() {
            willhem.validate($(this));
        });
        btnUpdateAccount.click(function() {
            serverError.hide();
            if (willhem.validate(updateContractCode)) {
                $.post("UpdateToLodger", {
                    contractNr: updateContractCode.val()
                },
                function(returnValue) {
                    if (returnValue == "Ok") {
                        step1.hide();
                        step2.show();
                        } else
                        {
                            serverError.text(returnValue);
                            serverError.show();
                        }
                });
            }
        });

    });

    $(".mUserAccountForm_Password").each(function () {

        var t = $(this);

        var saveButton = t.find(".btn");
        var form = t.find("form");
        var allFields = t.find("input");
        var passwordfield = t.find("input[name=Password]");
        var passwordRepeatfield = t.find("input[name=RepeatPassword]");

        saveButton.click(function (e) {
            e.preventDefault();

            if (willhem.validateWithin(form)) {

                if (passwordRepeatfield.val() == passwordfield.val()) {
                    $(".error-same-password").hide();
                    form.submit();
                } else {
                    $(".error-same-password").show();
                }

            }
        });

        allFields.blur(function () {
            willhem.validate($(this));
        });

    });

    $(".mServiceNotification").each(function () {
        var t = $(this);
        var step = 0;

        var allFields = t.find("textarea,input");

        var hiddenUsername = t.find("#User_UserName");
        var tbUserFullName = t.find("#User_FullName");
        var tbPhone = t.find("#User_PhoneNumber");
        var tbEmail = t.find("#User_Email");
        var tbDescription = t.find("#problemDescription");

        var ddContract = t.find("#Contracts");
        //var ddServiceType = t.find("#serviceType");

        var tdContract = t.find(".tdContract");
        var tdName = t.find(".tdName");
        var tdPhone = t.find(".tdPhoneNumber");
        var tdEmail = t.find(".tdEmail");
        //var tdServiceType = t.find(".tdServiceType");
        var tdDescription = t.find(".tdDescription");

        var tdCaseNr = t.find(".tdCaseNumber");
        var trCaseNr = t.find(".trCaseNumber");

        allFields.blur(function () {
            willhem.validate($(this));
        });

        t.find(".prev").click(function() {
            step = willhem.prevStepProgressbar(step, t);
        });

        t.find("#btnCheckServiceNotification").on('click', function (e) {
            
            trCaseNr.hide();

            if (willhem.validate(allFields)) {

                step = willhem.nextStepProgressbar(step, t);
                //Username
                var username = hiddenUsername.val();

                //Contract
                var contractCode = ddContract.val();
                var contractDescription = ddContract.text();
                tdContract.text(contractDescription);

                //Full name
                var name = tbUserFullName.val();
                tdName.text(name);

                //Phonenumber
                var phone = tbPhone.val();
                tdPhone.text(phone);

                //Email
                var email = tbEmail.val();
                tdEmail.text(email);

                //Service Type
                //var serviceType = ddServiceType.val();
                //tdServiceType.text(serviceType);

                //Description
                var descriptionText = tbDescription.val();
                tdDescription.text(descriptionText);

                //CaseNumber
                var rowCaseNumber = trCaseNr;
                rowCaseNumber.hide();

                t.find("#btnSubmitServiceNotification").click(function () {
                    $.getJSON("/Serviceanmalan/SendServiceNotification",
                        {
                            username: username,
                            objectCode: contractCode,
                            caseReporter: name,
                            telephoneNumber: phone,
                            emailAddress: email,
                            caseDescription: descriptionText
                        }, function (returnedCasenumber) {

                            if (returnedCasenumber.match(/^\d{2}-\d{6}$/) /* Regex for CaseNumber */) {
                                step = willhem.nextStepProgressbar(step, t);
                                tdCaseNr.text(returnedCasenumber);
                                rowCaseNumber.show();
                            } else {
                                var errorMessage = t.find("#serviceNotificationError");
                                errorMessage.text(returnedCasenumber);
                                errorMessage.show();
                            }



                        }
                    );
                });

            }

        });


    });

    $(".mListVacantPremises").each(function () {

        var t = $(this);

        t.find(".vacentPremisObject").click(function() {
            window.document.location = $(this).attr("href");
        });
    });

    $(".mSearchParkingLot").each(function () {

        var t = $(this);

        var regionSelect = t.find("#Regions");
        var districtSelect = t.find("#Districts");
        var searchMessage = t.find("#searchMessage");
        var searchButton = t.find("button");
        var errorMessage = t.find(".error-format");
        var cachedParkingVacants = null;
        errorMessage.hide();

        var regionName = "";
        regionSelect.change(function () {
            errorMessage.hide();

            var regionCode = $(this).val();
            regionName = $(this).find(":selected").text();
            t.find("#Districts option").remove();

            if (regionCode == "") {
                districtSelect.append('<option selected="selected">Välj ett distrikt</option>');
            } else {

                $.getJSON(location.href + "/GetDistrictByRegion", { regionCode: regionCode }, // /Sok-boende/Sok-P-plats
                    function (districtData) {

                        districtSelect.append('<option selected="selected">Alla stadsdelar</option>');

                        $.each(districtData, function (index, itemData) {
                            if (itemData != "") {
                                districtSelect.append($('<option/>', {
                                    text: itemData
                                }));
                            }

                        });
                        
                    });
                
            }


        });

        searchButton.click(function () {
            errorMessage.hide();
            searchMessage.text("");
            var selectedRegion = regionSelect.val();
            
            if (selectedRegion == "") {
                errorMessage.show();
                return;
            }

            t.find("table tr").remove();
            searchMessage.text("Laddar...");

            //if (cachedParkingVacants == null) {
                $.getJSON(location.href + "/GetVacantParkings",
                {

                }, function(allParkingObjects) {
                    cachedParkingVacants = allParkingObjects;
                    renderFilteredParkings();
                    return;
                });
            //} else {
            //    renderFilteredParkings();
            //    return;
            //}
            
            //searchMessage.text("Det finns tyvärr inga lediga parkeringsplatser i " + regionName + " - " + districtSelect.val() + " just nu.");
        });

        function renderFilteredParkings() {
            var parkingObjects = [];

            var selectedRegion = regionSelect.val();
            var selectedDistrict = districtSelect.val();

            $.each(cachedParkingVacants, function (index, data) {
                if (data["RegionCode"] == selectedRegion) {
                    if (selectedDistrict == "Alla stadsdelar" || data["District"] == selectedDistrict) {
                        parkingObjects.push(data);
                    }
                }
            });

            fillParkingTable(parkingObjects);
        }

        function fillParkingTable(parkingObjects) {
            searchMessage.text("");

            if (parkingObjects == null || parkingObjects.length == 0) {
                searchMessage.text("Det finns tyvärr inga lediga parkeringsplatser i " + regionName + " - " + districtSelect.val() + " just nu.");
            } else {


                t.find('table > thead:last').append(
                    '<tr>' +
                    '<th>​Stadsdel​</th>' +
                    '<th>​Adress​</th>' +
                    '<th>​Typ​</th>' +
                    '<th>​Hyra​</th>' +
                    '<th>​Tillträde​</th>' +
                    '</tr>');

                $.each(parkingObjects, function (index, object) {
                    var availableFrom = eval(object['AvailableFrom'].replace(/\/Date\((\d+)\)\//gi, "new Date($1)"));

                    var now = new Date();
                    var avalableText = "";
                    if (availableFrom < now) {
                        avalableText = "Omgående";
                    } else {
                        avalableText = availableFrom.yyyymmdd();
                    }
                    
                    t.find('table > tbody:last').append(
                        '<tr class="parkingObject" href=' + location.href + '/show?code=' + object["Code"] + '>' +
                        '<td>' + object['District'] + '</td>' +
                        '<td>' + object['Address'] + '</td>' +
                        '<td>' + object['TypeCaption'] + '</td>' +
                        '<td>' + object['Rent'] + ' kr/mån</td>' +
                        '<td>' + avalableText + '</td>' +
                        '</tr>');
                });
                t.find(".parkingObject").click(function () {
                    window.document.location = $(this).attr("href");
                });
            }
        }
    });

    $(".mCreateNoteofInterest").each(function () {
        var t = $(this);
        

        //var elem = document.getElementById('autogiro');
        //elem.parentNode.removeChild(elem);
        //var autogiro = t.find("#autogiro");
        //autogiro.hide();
        var allFields = t.find("input");

        //autogiro.find(".checkbox").data("pattern", false);

        var btnToVerify = t.find("#btnToVerify");
        var btnSend = t.find("#btnSend");
        var btnPrev = t.find("#prevBtn");
        //var prevWizardStart = t.find("#prevWizardStart");

        var tbCivicNr = t.find("#UserInfo_CivicNumber");
        var tbEmail = t.find("#UserInfo_Email");
        var tbCellPhone = t.find("#UserInfo_CellPhone");
        var objectCode = t.find("#ObjectCode");
        var objectTypeName = t.find("#ObjectTypeName");
        var forceAutogiro = t.find("#ForceAutogiro");
        var address = t.find("#Address");
        var chkboxRentPolicy = t.find("#chkboxRentPolicy");

        var tdCivicNr = t.find(".tdCivicNr");
        var tdEmail = t.find(".tdEmail");
        var tdCellPhone = t.find(".tdCellPhone");
        var serverError = t.find("#serverError");
        var step = 0;

        allFields.blur(function () {
            willhem.validate($(this));
        });

        btnToVerify.click(function (e) {
            e.preventDefault();
            if (willhem.validate(allFields)) {
                //t.find("form").submit();
                tdCivicNr.text(tbCivicNr.val());
                tdEmail.text(tbEmail.val());
                tdCellPhone.text(tbCellPhone.val());

                chkboxRentPolicy.attr("data-pattern", "true");

                step = willhem.nextStepProgressbar(step, t);
            }
        });

        btnSend.click(function (e) {
            serverError.hide();
            if (willhem.validate(allFields)) {

                //var address = location.href.replace("CreateParkingNoteOfInterest", "SendNoteOfInterest");
                $.getJSON(location.pathname + "/SendNoteOfInterest",
                {
                    email: tdEmail.first().text(),
                    cellphone: tdCellPhone.text(),
                    objectCode: objectCode.val(),
                    objectTypeName: objectTypeName.val(),
                    address: address.val(),
                    forceAutogiro: forceAutogiro.val()
                }, function(returnValue) {
                    if (returnValue == true) {
                        step = willhem.nextStepProgressbar(step, t);

                    } else {
                        serverError.text(returnValue);
                        serverError.show();
                    }
                   
                });
            }
        });

        btnPrev.click(function (e) {
            step = willhem.prevStepProgressbar(step, t);
        });

        //prevWizardStart.click(function (e) {
        //    window.location.href = document.referrer;
        //});
    });


    $(".mFindSearchProfile").each(function () {
        var t = $(this);
        var email = t.find("#emailForSearchProfile");
        var btnSend = t.find("#btnFindSearchProfiles");
        var serverError = t.find("#serverError");
        serverError.hide();

        email.blur(function() {
            willhem.validate($(this));
        });

        btnSend.click(function (e) {
            e.preventDefault();
            serverError.hide();

            if (willhem.validate(email)) {
                $.getJSON("EmailHasSearchProfile", {
                    email: email.val()
                }, function(returnValue) {
                    if (returnValue == true) {
                        t.find("form").submit();
                    } else {
                        serverError.text(returnValue);
                        serverError.show();
                    }
                });
            }
        });
    });
    $(".mCreateEditSearchProfile").each(function () {

        var t = $(this);
        //Nr of rooms
        var nrOfRoomsCheckboxes = t.find("input[type=checkbox]").slice(0, 5);

        //Email 
        //var emailCheckbox = t.find("#email_checkbox");
        //var emailTextbox = t.find("#email_textbox");
        var emailInput = t.find("#input_email");
        var emailAndPhoneError = t.find("#emailAndPhoneError");
        var nrOfRoomsError = t.find("#nrOfRoomsError");
        var selectedAreaError = t.find("#selectedAreaError");

        //Chosen
        var selectBox = t.find(".chosen-select");
        var selectedDistricts = t.find("#selectedDistricts");

        var submitBtn = t.find("input[type=submit]");
        var inputFields = t.find("input[type=text]");

        selectedDistricts.val(selectBox.val());
        selectBox.chosen();
        selectBox.chosen().change(function() {
            selectedDistricts.val(selectBox.val());
            //alert(hiddenField.val());
        });

     

        //if (emailCheckbox.is(":checked")) {
        //    emailTextbox.show();
        //} else {
        //    emailTextbox.hide();
        //}
        //emailCheckbox.change(function() {
        //    if ($(this).is(":checked")) {
        //        emailTextbox.show();
        //    } else {
        //        emailTextbox.hide();
        //        emailInput.val('');
        //    }
        //});

        //CellPhone
        //var phoneCheckbox = t.find("#phone_checkbox");
        //var phoneTextbox = t.find("#phone_textbox");
        //var phoneInput = t.find("#input_phone");

        
        //if (phoneCheckbox.is(":checked")) {
        //    phoneTextbox.show();
        //} else {
        //    phoneTextbox.hide();
        //}
        //phoneCheckbox.change(function() {
        //    if ($(this).is(":checked")) {
        //        phoneTextbox.show();
        //    } else {
        //        phoneTextbox.hide();
        //        phoneInput.val('');
        //    }
        //});

        $([ nrOfRoomsCheckboxes.get(0),
            nrOfRoomsCheckboxes.get(1),
            nrOfRoomsCheckboxes.get(2),
            nrOfRoomsCheckboxes.get(3),
            nrOfRoomsCheckboxes.get(4),
            selectBox.get(1),
            inputFields.get(0),
            inputFields.get(1),
            inputFields.get(2)
        ]).blur(function () {
            validateSearchProfile();
        });

        submitBtn.click(function (e) {

            e.preventDefault();
            if (validateSearchProfile()) {
                t.find("form").submit();
            }
                
            
        });
        function validateSearchProfile() {
            

            emailAndPhoneError.hide();
            nrOfRoomsError.hide();
            selectedAreaError.hide();

            var anyBoxChecked = false;
            nrOfRoomsCheckboxes.each(function (index) {
                if (t.find("input[type=checkbox]").eq(index).is(":checked")) {
                    anyBoxChecked = true;
                }
            });

            if (!anyBoxChecked) {
                nrOfRoomsError.show();
                return false;
            }
            if (selectedDistricts.val() == "") {
                    selectedAreaError.show();
                    return false;
            } 
            if (emailInput.val() == "" && !willhem.validate(emailInput)) {
                emailAndPhoneError.show();
                return false;
            }

            return true;

        };

    });

    $(".mNewPasswordSendMail").each(function () {
        var t = $(this);
        
        var civicNr = t.find("#civicNr");
        var btnSendMail = t.find("#btnSendMail");
        var serverError = t.find("#serverError");
        var loadingText = t.find("#loadingText");

        serverError.hide();
        loadingText.hide();
        civicNr.blur(function () {
            willhem.validate(civicNr);
        });
        btnSendMail.click(function(e) {
            e.preventDefault();
            loadingText.show();
            if (willhem.validate(civicNr)) {

                $.getJSON("SendNewPasswordLink", {
                    civicNr: civicNr.val()
                }, function(returnValue) {
                    if (returnValue == true) {
                        t.find("form").submit();

                    } else {
                        serverError.text(returnValue);
                        serverError.show();
                        loadingText.hide();
                    }
                });

            }
        });
    });
    $(".mNewPassword").each(function() {

        var t = $(this);
        var checkfields = t.find("#new-password-container input");
        var newPassword = t.find("#newPassword");
        var repeatNewPassword = t.find("#repeatNewPassword");

        var errorMessages = t.find(".error-format");

        function validateMatch() {

            if (newPassword.val() != "" && newPassword.val() != repeatNewPassword.val()) {

                errorMessages.last().show();
                return false;

            } else {
                errorMessages.last().hide();
                return true;
            }
        }
        newPassword.first().blur(function() {
                if (willhem.validate($(this))) {
                  
                };
        });
        repeatNewPassword.blur(function() {
            validateMatch();
        });

        t.find("#btnSaveNewPassword").click(function(e) {
            e.preventDefault();

            if (willhem.validate(checkfields)) {

                if (validateMatch()) {
                    t.find("form").submit();

                } else {
                    
                }
            }

        });

    });


    $(".mInvoiceList").each(function () {

        var t = $(this),
            invoiceRow = t.find("tbody tr"),
            modal = t.find('#modal_invoice_details'),
            modalBody = t.find('#modal_invoice_details .modal-body');

        invoiceRow.click(function (e) {
            
            var href = $(this).data("href");

            modalBody.load(href, function () {
                modal.modal();
            });

            e.preventDefault();
        });

    }); 

    $(".mOverviewPage").each(function () {

        var t = $(this),
            invoiceRow = t.find("tbody tr"),
            modal = t.find('#modal_invoice_details'),
            modalBody = t.find('#modal_invoice_details .modal-body');

        invoiceRow.click(function (e) {
            
            var href = $(this).data("href");

            modalBody.load(href, function () {
                modal.modal();
            });

            e.preventDefault();
        });

    });

    $(".mMyApplicantInformation").each(function () {
        var t = $(this);

        var allFields = t.find("input, textarea");
        var btnSave = t.find("#btnSave");
        var btnAddApplicant = t.find("#btnAddApplicant");
        var btnRemoveCoApplicant = t.find("#btnRemoveCoApplicant");
        var serverError = t.find("#serverError");
        var civicNr = t.find("#ApplicantInfo_MainApplicant_CivicNumber");

        allFields.blur(function () {
            willhem.validate($(this));
        });

        
        //var nowTemp = new Date();
        //var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
        var employmentDate = t.find('#employmentDate');
        
        employmentDate.datepicker({
            onRender: function(date) {
                return date.valueOf();// < now.valueOf() ? 'disabled' : '';
            }
        }).on('changeDate', function () {
            employmentDate.datepicker('hide');
        });
        if (employmentDate.val() == "0001-01-01 00:00:00") {
            employmentDate.val("");
        }

        btnSave.click(function (e) {
            e.preventDefault();
            if (willhem.validate(allFields)) {
                t.find("form").submit();
            }
        });

        btnRemoveCoApplicant.click(function () {
            serverError.hide();
            var accepted = window.confirm( "Är du säker på att du vill ta bort medsökande?");
            if (accepted != true) {
                return;
            }
            
            $.post("RemoveCoApplicant",
                { civicNr: civicNr.val() },
                function (returnValue) {
                    if (returnValue == "Ok") {
                        window.location = window.location.pathname;
                    } else {
                        serverError.show();
                        serverError.text(returnValue);
                    }
            });
        });

    });

    $(".mManualServiceNotification").each(function () {
        var t = $(this);

        var civicNr = t.find("input");
        var btnSend = t.find("#btnSend");
        var errorMessage = t.find("#errorMessage");

        civicNr.blur(function () {
            willhem.validate($(this));
        });

        btnSend.click(function (e) {
            errorMessage.hide();
            e.preventDefault();
            if (willhem.validate(civicNr)) {


               
                $.getJSON("/Serviceanmalan/ValidateUser",
                    {
                        civicNr: civicNr.val()
                            
                    }, function (returnValue) {

                        if (returnValue == true) {
                            t.find("form").submit();
                        } else {
                            errorMessage.text(returnValue);
                            errorMessage.show();
                        }



                    }
                );
            }
        });
    });
    $(".mHeader").each(function () {
        var t = $(this);
        //var desktopHomeButton = t.find("#main_navigation_desktop").find(".home");
        var homeButtons = $("#accordion-menu, .selected-sub-menu, #main_navigation_desktop").find(".home");
        
        //}

        t.find("#logout").click(function () {
            willhem.setNewItemNr(0, homeButtons);
            var cookies = $.cookie();
            for (var cookie in cookies) {
                $.removeCookie(cookie, {path: "/"});
            }
        });
        
        var menuItems = $("li[data-ball]");
        menuItems.each(function (index, item) {

            var menuItem = $(item);

            if (menuItem.data("ball") == "True") {
                setBallNr(menuItem, false, homeButtons);
                $(this).click(function () {
                    setBallNr(menuItem, true, homeButtons);
                });
            }

        });

        var totalNews = $.cookie("totalNews");
        if (totalNews > 0 && willhem.getNewItemNr(homeButtons.first()) == 0) {
            var currentNews = Math.ceil(parseInt($.cookie("totalNews") / 3));
            willhem.setNewItemNr(currentNews, homeButtons);
        }

        var selectedSubMenu = t.find("#selected-accordion-menu");
        var selectedSubMenuItems = t.find(".selected-sub-menu-level2 li");
      
    });
    $(".mSubPage").each(function () {

        var t = $(this);  

        //var menuItems = t.find("li[data-ball]");
        //var desktopHomeButton = $("#main_navigation_desktop").find(".home");
        //menuItems.each(function(index, item) {

        //    var menuItem = $(item);
            
        //    if (menuItem.data("ball") == "True") {
        //        setBallNr(menuItem, false, desktopHomeButton);
        //        $(this).click(function () {
        //            setBallNr(menuItem, true, desktopHomeButton);
        //        });
        //    }

        //});

       
    });

    function setBallNr(menuItem, reset, homeButtons) {
        var menuItemLink = menuItem.find("a");
        var lastItemNr = $.cookie(menuItem.attr('id'));
        if (isNaN(lastItemNr)) {

            $.post(menuItemLink.attr("href") + "GetAmountNewItems",
                { reset: reset },
                function (returnValue) {
                    var nrOfNewItems = parseInt(returnValue);

                    $.cookie(menuItem.attr('id'), nrOfNewItems, { path: "/" });
                    willhem.setNewItemNr(nrOfNewItems, menuItem);
                    
                    
                    var oldTotalNews = parseInt($.cookie("totalNews"));
                    if (isNaN(oldTotalNews) == true) {
                        oldTotalNews = 0;
                    }

                    $.cookie("totalNews", parseInt(oldTotalNews + nrOfNewItems), { path: "/" });

                    var totalNews = $.cookie("totalNews");
                    if (totalNews > 0) {
                        var currentNews = Math.ceil(parseInt($.cookie("totalNews") / 3));
                        willhem.setNewItemNr(currentNews, homeButtons);
                    }
                });
        } else if (reset) {
            var oldSubMenuNews = $.cookie(menuItem.attr('id'));
            $.cookie(menuItem.attr('id'), 0, { path: "/" });
            willhem.setNewItemNr(0, menuItem);

            var oldNews = parseInt($.cookie("totalNews"));

            if (isNaN(oldNews) != true) {
                $.cookie("totalNews", parseInt(oldNews - oldSubMenuNews), { path: "/" });
                
                willhem.setNewItemNr($.cookie("totalNews"), homeButtons);
            }


        }
        else {
            willhem.setNewItemNr(lastItemNr, menuItem);
        }
    }

    function addToHeaderNr(number, homeButton) {
        
        var oldValue = willhem.getNewItemNr(homeButton);
        if (oldValue == null) {
            oldValue = 0;
        }

        willhem.setNewItemNr(parseInt(oldValue) + parseInt(number), homeButton);

    }


    $(".mRegionContainer").each(function () {

        var t = $(this);

        var modalLink = t.find(".modalLink");
        var modalTitle = t.find(".modal-title");
        var modalImage = t.find(".modal-body").find("img");

        modalLink.click(function () {
            var address = $(this).text();
            var image = $(this).data('img');
            modalTitle.html(address.substr(0, address.indexOf(' ')) + ' <span>' + address.substr(address.indexOf(' ') + 1) + '</span>');
            modalImage.attr('src', image);
            modalImage.attr('alt', address);
        });
        
    });

    $(".mRealEstatesPage").each(function () {

        var t = $(this);

        var modalLink = t.find(".modalLink");
        var modalTitle = t.find(".modal-title");
        var modalImage = t.find(".modal-body").find("img");

        modalLink.click(function () {
            var address = $(this).text();
            var image = $(this).data('img');
            modalTitle.html(address.substr(0, address.indexOf(' ')) + ' <span>' + address.substr(address.indexOf(' ') + 1) + '</span>');
            modalImage.attr('src', image);
            modalImage.attr('alt', address);
        });
        
    });

    $(".mWillhemLift").each(function () {

        var t = $(this);

        // buttons
        var userTypeLodger = t.find("#userTypeLodger");
        var userTypeApplicant = t.find("#userTypeApplicant");

        var gotoMyPages = t.find("#gotoMyPages");
        var gotoSubscription = t.find("#gotoSubscription");

        // modals
        var modalLoginFirst = t.find("#modalLoginFirst");

        // values from server
        var searchProfileUrl = t.find("#searchProfileUrl").text() + "?activateNew=True&willhemlift=True";
        var isLodger = t.find("#isLodger").text() == "True";
        var myPagesUrl = t.find("#myPagesUrl").text();

        function gotoSearchProfile() {
            location.href = searchProfileUrl;
        }

        userTypeLodger.click(function () {
            
            if (isLodger) {
                gotoSearchProfile();
            } else {
                modalLoginFirst.modal();
            }
        });

        userTypeApplicant.click(function () {
            gotoSearchProfile();
        });

        gotoMyPages.click(function () {
            location.href = myPagesUrl + "?afterLoginUrl=" + encodeURIComponent(searchProfileUrl);
        });

        gotoSubscription.click(function () {
            gotoSearchProfile();
        });

    });

    //var mobileMenuItems = $(".mobile").closest("li").slice(0, 4);

    //mobileMenuItems.click(function () {
    //    var selectedSubMenu = $(".selected-sub-menu");
    //    var thisMenuItem = $(this);
    //    selectedSubMenu.html(thisMenuItem);
    //});


    $(".mVacantObjectPage").each(function () {

        var t = $(this);
        var errorNotPublished = t.find(".error-format");
        errorNotPublished.show();
        // buttons
        var toImageList = t.find("#toImageList");
        var shareFacebook = t.find("#shareFacebook");
        var shareTwitter = t.find("#shareTwitter");
        var shareMail = t.find("#shareMail");

        // from server
        var urlToImageList = t.find("#urlToImageList").text();
        var vacantObjectAddress = t.find("#vacantObjectAddress").text();
        var vacantObjectUrl = encodeURIComponent(location.href);  //encodeURIComponent(t.find("#vacantObjectUrl").text());

        toImageList.click(function (evt) {
            evt.preventDefault();

            var width = Math.min(window.screen.width, 960);
            var height = window.screen.height - 200;
            window.open(urlToImageList, '', 'scrollbars=yes,width=' + width + ',height=' + height);
        });

        shareFacebook.click(function (evt) {
            evt.preventDefault();
            location.href = "https://www.facebook.com/sharer/sharer.php?u=" + vacantObjectUrl;
        });

        shareTwitter.click(function (evt) {
            evt.preventDefault();

            var message = "Ledig lägenhet hos Willhem på " + vacantObjectAddress + " " + vacantObjectUrl;
            location.href = "http://twitter.com/share?text=" + message; //&url=...
        });

        shareMail.click(function (evt) {
            evt.preventDefault();

            var message = "Ledig lägenhet hos Willhem på " + vacantObjectAddress + " " + vacantObjectUrl;
            location.href = "mailto:?subject="+vacantObjectAddress+"&body="+message;
        });
    });
    $(".mAreaContainer").each(function () {
        var t = $(this);

        var btnSend = t.find("button");
        var txtResponse = t.find("#txtResponse");

        txtResponse.hide();

        t.find("select[multiple] option").mousedown(function () {
            txtResponse.hide();
            var self = $(this);

            if (self.prop("selected"))
                self.removeAttr("selected");
            else
                self.attr("selected", "selected");

            return false;
        });

        btnSend.click(function () {
            txtResponse.show();
            txtResponse.html("Laddar...");
            var selectedTownDistricts = $(".mAreaContainer").find("option[selected]").map(function () {
                return this.value; 
            }).get().join('|');
            $.post("SaveTownDistricts", { townDistricts: selectedTownDistricts },
                function (returnValue) {
                    if (returnValue == "True") {
                        txtResponse.html("Sparat!");
                        
                    } else {
                        txtResponse.html(returnValue);
                        txtResponse.show();
                    }
                
            });
        });

    });

    $(".mWizardApplicant").each(function () {

        var t = $(this);
        var btnSend = t.find("#confirmNoteOfInterest");

        btnSend.click(function (e) {
            var serverError = t.find("#errorNoteOfInterest");
            serverError.hide();

            var autogiroCheckbox = t.find("#autogiroCheckbox");
            if (autogiroCheckbox && autogiroCheckbox.prop("checked") == false) {
                return;
            }
            
            var afterLogin = location.search.split("afterLoginUrl=")[1];

            var eftermiddagshack = afterLogin.replace("%2f%3f", "%2fSendNoteOfInterest%3f");

            var code = /code\%3d([\d]+)/.exec(eftermiddagshack)[1];
            var typeName = /type\%3d([\w]+)/.exec(eftermiddagshack)[1];

            

            if (!btnSend.data("isclicked")) {

                $.getJSON(decodeURIComponent(eftermiddagshack),
                {
                    username: t.find("input[name=CivicNumber]").val(),
                    email: t.find("input[name=Email]").val(),
                    cellphone: t.find("input[name=CellPhone]").val(),
                    objectCode: code,
                    objectTypeName: typeName,

                }, function(returnValue) {
                    if (returnValue == true) {
                        location.href = decodeURIComponent(afterLogin) + "&lastStep=True";

                    } else {
                        serverError.text(returnValue);
                        serverError.show();
                    }

                });
            }

            btnSend.data("isclicked", true);
        });
    });

});
