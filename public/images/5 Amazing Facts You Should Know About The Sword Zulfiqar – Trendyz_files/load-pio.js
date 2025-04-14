//console.log(document.getElementsByClassName('pio-meta-json').length <= 0 + "=and=" +document.getElementsByClassName('pio-embedded-meta-json').length);
if (document.getElementsByClassName('pio-meta-json').length <= 0 || document.getElementsByClassName('pio-embedded-meta-json').length <= 0) {
  var pioShop = typeof Shopify !== 'undefined' ? Shopify.shop : pioShopName;
  var pioShopDomain = document.domain;
  var pioBasePath = 'https://' + pioShopDomain + '/a/pio/';
  var pioProductData = '';
  var loadCss = pioBasePath + 'css/pio-style.css';
  var $pioobject = '';
  var pioLanguageSettings = '';
  var pioOptionSets = '';
  var cartObject = '';
  //var pioShopCurrency = Shopify.currency.active;
  var storeCurrency = "";
  var plan_id = 1;
  // var symbol = shop;
  // console.log(symbol);
  (function ($pioobject, window, document) {
    $pioobject.fn.pioLoad = function () {    
        if (typeof jQuery == 'undefined') {
          var pioHead = document.getElementsByTagName('head')[0];
          var pioScript = document.createElement('script');
          pioScript.src = pioBasePath + 'js/lib/library.min.js';
          pioScript.type = 'text/javascript';
          pioScript.onreadystatechange = pioHandler;
          pioScript.onload = this.pioHandler();
          // Fire the loading
          pioHead.appendChild(pioScript);
        } else {
          this.pioHandler();
        }    
    };
    $pioobject.fn.pioHandler = function () {        
      $pioobject('head').append(
        '<link href="' +
        loadCss +
        '" rel="stylesheet" type="text/css" media="all" />'
      );
      $pioobject.ajax({
        type: 'GET',
        url: '/index.json',
        data: {
          view: 'pio',
          q: 'multiple_options',
          _: $pioobject.now(),
        },
        success: function (data) {
          var pioSettings = data.metafields.settings.settings;
          storeCurrency = data.metafields.moneyFormat;
          plan_id = pioSettings.plan_id;
          pioLanguageSettings = data.metafields.settings;
          if (pioSettings.status) {
            if (pioSettings.custom_css != '') {
              pioAddCSS(pioSettings.custom_css);
            }
            // Load Offsets
            pioOptionSets = data.metafields.settings.optionsets;
            var pioSetFields = pioLoadOptionSets(pioOptionSets, pioSettings);
            $pioobject('.pio-multiple-options').html(pioSetFields);
            $pioobject(
              'button[type=submit][name=add], .pioAddToCart'
            ).bind('click', pioAddToCartValidation);
            pioEnableBuyItNowButtonWrapper();
            if ($pioobject.isFunction(window.pioAfterLoadHook)) {
              pioAfterLoadHook();
            }
          }
        },
      });
    };
    pioAddToCartValidation = function () {
      var pioFlag = pioFieldValidations();
      if (pioFlag == false) {
        return false;
      } else {
        return true;
      }
    };
    pioBuyItNowButtonValidation = function (event) {
        event.preventDefault();
        event.stopPropagation();
      var pioFlag = pioFieldValidations();
      if (pioFlag == false) {
        return false;
      } else {
        var pioBuyItNowButtonContainer = document.querySelector(
          '[class*="shopify-payment-button"]'
        );
        if (pioBuyItNowButtonContainer != null) {
          pioDisableBuyItNowButtonWrapper();
        }
        //Buynow button redirect
        var tdProductForm = $(this).closest("form");
        var tdFormData = new FormData(tdProductForm);
        pioDraftCreate();
      }
    };
    pioFieldValidations = function () {
      var pioFlag = true;
      $pioobject('.td-line-item-field').each(function () {
        // Input Text
        var pioinput = $pioobject(this).find('input');
        if (!pioinput.val() && pioinput.attr('required')) {
          pioinput.addClass('pioError');
          pioFlag = false;
        } else {
          pioinput.removeClass('pioError');
        }
        // Textarea
        var piotextarea = $pioobject(this).find('textarea');
        if (!piotextarea.val() && piotextarea.attr('required')) {
          piotextarea.addClass('pioError');
          pioFlag = false;
        } else {
          piotextarea.removeClass('pioError');
        }
        //Dropdown
        var pioselect = $pioobject(this).find('select');
        if (!pioselect.val() && pioselect.attr('required')) {
          pioselect.addClass('pioError');
          pioFlag = false;
        } else {
          pioselect.removeClass('pioError');
        }
        //Radio
        var pioradio = $pioobject(this).find('input[type="radio"]');
        if (!pioradio.is(':checked') && pioradio.attr('required')) {
          $pioobject(this).find('.checkmark').addClass('pioRadioError');
          pioFlag = false;
        } else {
          $pioobject(this).find('.checkmark').removeClass('pioRadioError');
        }
        //Checkbox
        var piocheckbox = $pioobject(this).find('input[type="checkbox"]');
        var pioTempData = [];
        var pioallValues = '';
        var checkboxIsRequired = false;
        $pioobject(piocheckbox).each(function () {
          if ($pioobject(this).is(':checked')) {
            pioTempData.push($pioobject(this).attr('data-val'));
          }
          if ($pioobject(this).attr('required')) {
            checkboxIsRequired = true;
          }
        });
        pioallValues = pioTempData.toString();
        piocheckbox.val(pioallValues);
        if (!piocheckbox.is(':checked') && checkboxIsRequired) {
          piocheckbox.addClass('pioError');
          pioFlag = false;
        } else {
          piocheckbox.removeClass('pioError');
        }
      });
      return pioFlag;
    };
    pioEnableBuyItNowButtonWrapper = function () {
      var pioBuyItNowButtonContainer = document.querySelector(
        '[class*="shopify-payment-button"]'
      );
      if (pioBuyItNowButtonContainer === null) {
        return;
      }
      var pioBuyInNowAWrapper = document.createElement('a');
      pioBuyInNowAWrapper.id = 'pioWrapper';
      pioBuyInNowAWrapper.style.textDecoration = 'none';
      pioBuyInNowAWrapper.href = 'javascript:void(0);';
      
      pioBuyItNowButtonContainer.parentNode.insertBefore(
        pioBuyInNowAWrapper,
        pioBuyItNowButtonContainer
      );
      pioBuyInNowAWrapper.appendChild(pioBuyItNowButtonContainer);
      pioBuyItNowButtonContainer.style.pointerEvents = 'none';
      pioBuyItNowButtonContainer.firstChild.setAttribute(
        'style',
        'pointer-events: none'
      );
    };
    pioDisableBuyItNowButtonWrapper = function () {
      var pioBuyInNowAWrapper = document.getElementById('pioWrapper');
      pioBuyInNowAWrapper.removeAttribute('href');
      pioBuyInNowAWrapper.style.pointerEvents = 'auto';
      var pioBuyItNowButtonContainer = document.querySelector(
        '[class="shopify-payment-button"]'
      );
      pioBuyItNowButtonContainer.style.pointerEvents = 'auto';
      pioBuyItNowButtonContainer.firstChild.setAttribute(
        'style',
        'pointer-events: auto'
      );
      if (
        document
          .querySelector('[class*="shopify-payment-button"]')
          .querySelector('[role="button"]') !== null
      ) {
        document
          .querySelector('[class*="shopify-payment-button"]')
          .querySelector('[role="button"]')
          .click();
      } else if (
        document
          .querySelector('[class*="shopify-payment-button"]')
          .querySelector('[type="button"]') !== null
      ) {
        document
          .querySelector('[class*="shopify-payment-button"]')
          .querySelector('[type="button"]')
          .click();
      }
    };
    pioAddCSS = function (pioCss) {
      var pioStyle = document.createElement('style');
      var pioHead = document.getElementsByTagName('head')[0];
      pioHead.appendChild(pioStyle);
      pioStyle.type = 'text/css';
      if (pioStyle.styleSheet) {
        // This is required for IE8 and below.
        pioStyle.styleSheet.cssText = pioCss;
      } else {
        pioStyle.appendChild(document.createTextNode(pioCss));
      }
    };
    pioLoadOptionSets = function (optionSets, settings) {
      var pioSetHtml = '';
      $pioobject.each(optionSets, function (key, optionset) {
        // Check validation
        if (pioValidateRule(optionset)) {
          pioSetHtml += pioLoadfields(optionset);
          //console.log(pioSetHtml);
          if ($pioobject.isFunction(window.pioOptionHtmlHook)) {
            if (pioOptionHtmlHook(pioSetHtml, optionset)) {
              pioSetHtml = pioOptionHtmlHook(pioSetHtml, optionset);
            }
          }
        }
      });
      return pioSetHtml;
    };
    pioLoadfields = function (optionset) {
      var optionsetOptions = sortJSON(optionset.options, 'sort_number', 'asc');
      var pioFieldHtml = '';
      $pioobject.each(optionsetOptions, function (key, field) {
        // Check validation
        switch (field.input_type) {
          case 1:
            pioFieldHtml += loadTextBox(key, field);
            break;
          case 2:
            pioFieldHtml += loadTextArea(key, field);
            break;
          case 3:
            pioFieldHtml += loadRadio(key, field);
            break;
          case 4:
            pioFieldHtml += loadSelectBox(key, field);
            break;
          case 5:
            pioFieldHtml += loadImageUpload(key, field);
            break;
          case 6:
            pioFieldHtml += loadCheckBox(key, field);
            break;
          case 7:
            pioFieldHtml += loadDatepicker(key, field);
            break;
          default:
          // do Nothing
        }
      });
      return pioFieldHtml;
    };
    sortJSON = function (arr, key, way) {
      return arr.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        if (way === 'asc') {
          return x < y ? -1 : x > y ? 1 : 0;
        }
        if (way === 'desc') {
          return x > y ? -1 : x < y ? 1 : 0;
        }
      });
    };
    loadTextBox = function (key, field) {
      
      var pioFieldLabel = pioloadLanguage(key, field, 'field_label');
      var pioFieldCartName = pioloadLanguage(key, field, 'field_cart_name');
      var pioFieldPlaceholder = pioloadLanguage(key, field, 'placeholder');
      pioFieldPlaceholder = pioFieldPlaceholder ? pioFieldPlaceholder : '';
      var isRequiredClass = '';
      var pioFieldPrice = field.input_type_price;
      if(parseInt(plan_id) > 2 && pioFieldPrice != "" && pioFieldPrice != null){
        
        var priceLabel = pioCurrencyConverter(storeCurrency,pioFieldPrice);
        pioFieldLabel = pioFieldLabel+" (Price: "+priceLabel+")";
      }else{
        pioFieldPrice = '';
      }
      if (parseInt(field.required)) {
        isRequiredClass = 'required';
      }
      if (field.placeholder == null) {
        field.placeholder = '';
      }
      if (field.class_name == null) {
        field.class_name = '';
      }
      return (
        '<div class="td-line-item-field field-' +
        key +
        ' ' +
        field.class_name +
        '"><label class="td-label" for="' +
        pioFieldCartName +
        '">' +
        pioFieldLabel +
        '</label><span class="td-content"><input ' +
        isRequiredClass +
        ' class="pioShortText ' +
        isRequiredClass +
        '" id="' +
        pioFieldCartName +
        '" type="text" pio-price="' +
        pioFieldPrice +
        '"  placeholder="' +
        pioFieldPlaceholder +
        '">'+
        '<input ' +
        isRequiredClass +
        ' class="pioShortText__original' +
        '" id="' +
        pioFieldCartName+'_original'+
        '" type="hidden" name="properties[' +
        pioFieldCartName +
        ']" pio-price="' +
        pioFieldPrice +
        '"></span></div>'
      );
    };
    loadTextArea = function (key, field) {
      
      var pioFieldLabel = pioloadLanguage(key, field, 'field_label');
      var pioFieldCartName = pioloadLanguage(key, field, 'field_cart_name');
      var pioFieldPlaceholder = pioloadLanguage(key, field, 'placeholder');
      pioFieldPlaceholder = pioFieldPlaceholder ? pioFieldPlaceholder : '';
      var isRequiredClass = '';
      var pioFieldPrice = field.input_type_price;
      if(parseInt(plan_id) > 2 && pioFieldPrice != "" && pioFieldPrice != null){
        var priceLabel = pioCurrencyConverter(storeCurrency,pioFieldPrice);
        pioFieldLabel = pioFieldLabel+" (Price: "+priceLabel+")";
      }else{
        pioFieldPrice = '';
      }
      
      if (parseInt(field.required)) {
        isRequiredClass = 'required';
      }
      if (field.placeholder == null) {
        field.placeholder = '';
      }
      if (field.class_name == null) {
        field.class_name = '';
      }
      return (
        '<div class="td-line-item-field field-' +
        key +
        ' ' +
        field.class_name +
        '"><label class="td-label" for="' +
        pioFieldCartName +
        '">' +
        pioFieldLabel +
        '</label><span class="td-content"><textarea ' +
        isRequiredClass +
        ' class="pioLongText ' +
        isRequiredClass +
        '" id="' +
        pioFieldCartName +
        '" pio-price="' +
        pioFieldPrice +
        '" placeholder="' +
        pioFieldPlaceholder +
        '"></textarea><input ' +
        isRequiredClass +
        ' class="pioLongText__original' +
        '" id="' +
        pioFieldCartName+'_original'+
        '" type="hidden" name="properties[' +
        pioFieldCartName +
        ']" pio-price="' +
        pioFieldPrice +
        '"></span></div>'
      );
    };
    loadRadio = function (key, field) {
      var options = field.input_options;
      //var optionsArray = options.split (',');
      var isRequiredClass = '';
      var radioHtml = '';
      var pioFieldLabel = pioloadLanguage(key, field, 'field_label');
      var pioFieldCartName = pioloadLanguage(key, field, 'field_cart_name');
      var optionsArray = pioloadLanguage(key, field, 'input_options');
      //optionsArray = optionsArray? optionsArray: options.split (',');
      if(field.input_options_price != '' && field.input_options_price != null){
        var priceArray = field.input_options_price.split (',');
      }else{
        var priceArray = '';
      }
      
      var pioFieldPrice = "";
      if(parseInt(plan_id) > 2 && priceArray != "" && priceArray.length > 0){
        pioFieldPrice = priceArray[0];
      }else{
        pioFieldPrice = '';
      }
      if (parseInt(field.required)) {
        isRequiredClass = 'required';
      }
      if (field.class_name == null) {
        field.class_name = '';
      }
      for (var i = 0; i < optionsArray.length; i++) {
        var piooptionPrice = "";
        var piooptionPriceLabel = "";
        if(parseInt(plan_id) > 2 && priceArray[i] != ""){
          piooptionPrice = priceArray[i];
          var priceLabel = pioCurrencyConverter(storeCurrency,piooptionPrice);
          piooptionPriceLabel = " (Price: "+priceLabel+")"
        }else{
          
          piooptionPrice = '';
        }
        radioHtml +=
          '<label class="pioRadioLabel" for="' +
          optionsArray[i] +
          '"><input ' +
          isRequiredClass +
          ' id="' +
          optionsArray[i] +
          '" class="pioRadioButton ' +
          isRequiredClass +
          '" type="radio" name="' +
          pioFieldCartName +
          '" value="' +
          optionsArray[i] +
          '"pio-price="'+
          piooptionPrice +
          '"><span class="checkmark"></span>' +
          optionsArray[i] + piooptionPriceLabel+
          '</label>';
      }
      return (
        '<div class="td-line-item-field field-' +
        key +
        ' ' +
        field.class_name +
        '"><label class="td-label" for="' +
        pioFieldCartName +
        '">' +
        pioFieldLabel +
        '</label><span class="td-content">' +
        radioHtml +
        '<input ' +
        isRequiredClass +
        ' class="pioRadioButton__original' +
        '" id="' +
        pioFieldCartName+'_original'+
        '" type="hidden" name="properties[' +
        pioFieldCartName +
        ']" pio-price="' +
        pioFieldPrice +
        '"></span></div>'
      );
    };
    loadSelectBox = function (key, field) {
      //console.log('Dropdown');
      var options = field.input_options;
      //var optionsArray = options.split (',');
      var isRequiredClass = '';
      var selectHtml = '';
      var pioFieldLabel = pioloadLanguage(key, field, 'field_label');
      var pioFieldCartName = pioloadLanguage(key, field, 'field_cart_name');
      var pioFieldPlaceholder = pioloadLanguage(key, field, 'placeholder');
      pioFieldPlaceholder = pioFieldPlaceholder ? pioFieldPlaceholder : '';
      var optionsArray = pioloadLanguage(key, field, 'input_options');
      //optionsArray = optionsArray? optionsArray: options.split (',');
      var pioSelectedFirst = optionsArray[0];
      if(field.input_options_price != '' && field.input_options_price != null){
        var priceArray = field.input_options_price.split (',');
      }else{
        var priceArray = '';
      }
      if(parseInt(plan_id) > 2 && priceArray[0] != ""){
        var firstPrice = pioCurrencyConverter(storeCurrency,priceArray[0]);
        pioSelectedFirst = optionsArray[0]+'|'+firstPrice;
      }
      if (parseInt(field.required)) {
        isRequiredClass = 'required';
      }
      if (field.class_name == null) {
        field.class_name = '';
      }
      var piooptionPriceLabel = "";
      for (var i = 0; i < optionsArray.length; i++) {
        if(parseInt(plan_id) > 2 && priceArray[i] != ""){
          var priceLabel = pioCurrencyConverter(storeCurrency,priceArray[i]);
          piooptionPriceLabel = optionsArray[i] +" (Price: "+priceLabel+")"; 
          var pioPrice = priceArray[i];
        }else{
          piooptionPriceLabel = optionsArray[i];
          var pioPrice = '';
        }
        selectHtml +=
          '<option value="' +
          optionsArray[i] +
          '" pio-price="'+
          priceArray[i] +
          '">' +
          piooptionPriceLabel +
          '</option>';
      }
      return (
        '<div class="td-line-item-field field-' +
        key +
        ' ' +
        field.class_name +
        '"><label class="td-label" for="' +
        pioFieldCartName +
        '">' +
        pioFieldLabel +
        '</label><span class="td-content"><select placeholder="' +
        pioFieldPlaceholder +
        '" ' +
        isRequiredClass +
        ' class="pioSelect ' +
        isRequiredClass +
        '" id="' +
        pioFieldCartName +
        '" name="' +
        pioFieldCartName +
        '">' +
        selectHtml +
        '</select><input class="'+
        'pioSelect__original" id="'+
        pioFieldCartName+
        '_original" type="hidden" name="properties['+
        pioFieldCartName+
        ']" pio-price="'+
        pioPrice+
        '" value="'+pioSelectedFirst+'">'+
        '</span></div>'
      );
    };
    loadImageUpload = function (key, field) {
      //console.log('Image');
      var pioFieldLabel = pioloadLanguage(key, field, 'field_label');
      var pioFieldCartName = pioloadLanguage(key, field, 'field_cart_name');
      var isRequiredClass = '';
      var pioFieldPrice = field.input_type_price;
      if(parseInt(plan_id) > 2 && pioFieldPrice != "" && pioFieldPrice != null){
        var priceLabel = pioCurrencyConverter(storeCurrency,pioFieldPrice);
        pioFieldLabel = pioFieldLabel+" (Price: "+priceLabel+")";
      }else{
        pioFieldPrice = ''; 
      }
      if (parseInt(field.required)) {
        isRequiredClass = 'required';
      }
      if (field.class_name == null) {
        field.class_name = '';
      }
      return (
        '<div class="td-line-item-field field-' +
        key +
        ' ' +
        field.class_name +
        '"><label class="td-label" for="' +
        pioFieldCartName +
        '">' +
        pioFieldLabel +
        '</label><span class="td-content"><input type="file" ' +
        isRequiredClass +
        ' class="pioImage ' +
        isRequiredClass +
        '" id="' +
        pioFieldCartName +
        '" name="properties[' +
        pioFieldCartName +
        ']" pio-price="'+
        pioFieldPrice+
        '"><input class="'+
        'pioImage__original" id="'+
        pioFieldCartName+
        '_original" type="hidden" name="properties['+
        pioFieldCartName+'_price'+
        ']" pio-price="'+
        pioFieldPrice+
        '" value="">'+
        '</span></div>'
      );
    };
    loadDatepicker = function (key, field) {
      //console.log('date');
      var pioFieldLabel = pioloadLanguage(key, field, 'field_label');
      var pioFieldCartName = pioloadLanguage(key, field, 'field_cart_name');
      var pioFieldPlaceholder = pioloadLanguage(key, field, 'placeholder');
      pioFieldPlaceholder = pioFieldPlaceholder ? pioFieldPlaceholder : '';
      var isRequiredClass = '';
      var pioFieldPrice = field.input_type_price;
      if(parseInt(plan_id) > 2 && pioFieldPrice != "" && pioFieldPrice != null){
        var priceLabel = pioCurrencyConverter(storeCurrency,pioFieldPrice);
        pioFieldLabel = pioFieldLabel+" (Price: "+priceLabel+")";
      }else{
        pioFieldPrice = '';
        pioFieldLabel = pioFieldLabel;
      }
      if (parseInt(field.required)) {
        isRequiredClass = 'required';
      }
      if (field.placeholder == null) {
        field.placeholder = '';
      }
      if (field.class_name == null) {
        field.class_name = '';
      }
      return (
        '<div class="td-line-item-field field-' +
        key +
        ' ' +
        field.class_name +
        '"><label class="td-label" for="' +
        pioFieldCartName +
        '">' +
        pioFieldLabel +
        '</label><span class="td-content"><input type="date" ' +
        isRequiredClass +
        ' class="pioDatePick ' +
        isRequiredClass +
        '" id="' +
        pioFieldCartName +
        '" name="' +
        pioFieldCartName +
        '" pio-price="'+
        pioFieldPrice+
        '"><input class="pioDatePick__original" id="'+
        pioFieldCartName+
        '_original" type="hidden" name="properties['+
        pioFieldCartName+
        ']" pio-price="'+
        pioFieldPrice+
        '" value=""></input>'+
        '</span></div>'
      );
    };
    loadCheckBox = function (key, field) {
      //console.log('checkbox');
      var options = field.input_options;
      //var optionsArray = options.split (',');
      var isRequiredClass = '';
      var CheckBoxHtml = '';
      var pioFieldLabel = pioloadLanguage(key, field, 'field_label');
      var pioFieldCartName = pioloadLanguage(key, field, 'field_cart_name');
      var optionsArray = pioloadLanguage(key, field, 'input_options');
      //optionsArray = optionsArray? optionsArray: options.split (',');
      if(parseInt(plan_id) > 2 && field.input_options_price != '' && field.input_options_price != null){
        var priceArray = field.input_options_price.split (',');
      }else{
        var priceArray = '';
      }
      
      var pioFieldPrice = "";
      if(parseInt(plan_id) > 2 && priceArray != "" || priceArray.length > 0){
        pioFieldPrice = priceArray[0];
      }
      if (parseInt(field.required)) {
        isRequiredClass = 'required';
      }
      if (field.class_name == null) {
        field.class_name = '';
      }
      for (var i = 0; i < optionsArray.length; i++) {
        if(priceArray[i] != "" && priceArray[i] != null){
          piooptionPrice = priceArray[i];
          var priceLabel = pioCurrencyConverter(storeCurrency,piooptionPrice);
          var piooptionPriceLabel = " (Price: "+priceLabel+")";
        }else{
          piooptionPrice = '';
          var piooptionPriceLabel = "";
        }
        CheckBoxHtml +=
          '<input type="checkbox" ' +
          isRequiredClass +
          ' class="pioCheckBox ' +
          isRequiredClass +
          '" id="' +
          optionsArray[i] +
          '" name="' +
          pioFieldCartName +
          '" data-val ="' +
          optionsArray[i] +
          '" value="' +
          optionsArray[i] +
          '"pio-price="'+
          piooptionPrice+
          '"><label for="' +
          optionsArray[i] +
          '">' +
          optionsArray[i] + piooptionPriceLabel +
          '</label>';
      }
      return (
        '<div class="td-line-item-field field-' +
        key +
        ' ' +
        field.class_name +
        ' pio-checkbox-' +
        key +
        '"><label class="td-label" for="' +
        pioFieldCartName +
        '">' +
        pioFieldLabel +
        '</label><span class="td-content">' +
        CheckBoxHtml +
        '<input class="pioCheckBox__original" id="'+
        pioFieldCartName+'_original" type="hidden" name="properties['+
        pioFieldCartName+
        ']" pio-price="'+
        pioFieldPrice+'" value=""></input>'+
        '</span></div>'
      );
    };
    pioValidateRule = function (optionSet) {
      var pioProductHandle = $pioobject('.pio-multiple-options').data(
        'phandle'
      );
      //console.log(optionSet.option_type);
      switch (optionSet.option_type) {
        case 1:
          // Tags
          var tag = optionSet.option_name;
          var getProduct = pioGetProduct(pioProductHandle);
          //console.log(getProduct);
          var productTags = '';
          if (getProduct != '') {
            productTags = getProduct.tags;
          }
          // var productTagsArray = productTags.split(',');
          var productTagsArray = $pioobject.map(
            productTags.split(','),
            $pioobject.trim
          );
          if (
            productTags != '' &&
            $pioobject.inArray(tag, productTagsArray) != -1
          ) {
            return true;
          } else {
            return false;
          }
          break;
        case 2:
          // Vendor
          var vendor = optionSet.option_name;
          var getProduct = pioGetProduct(pioProductHandle);
          if (getProduct != '' && getProduct.vendor == vendor) {
            return true;
          } else {
            return false;
          }
          break;
        case 3:
          // Type
          var productType = optionSet.option_name;
          var getProduct = pioGetProduct(pioProductHandle);
          if (getProduct != '' && getProduct.product_type == productType) {
            return true;
          } else {
            return false;
          }
          break;
        case 4:
          // URL
          var productURL = optionSet.option_name;
          var currentURL = $pioobject(location).attr('href');
          if (currentURL == productURL) {
            return true;
          } else {
            return false;
          }
          break;
        case 5:
            // Handle

          //var getProduct = pioGetProduct(pioProductHandle);
          var productHandle = optionSet.option_name;
          if (getProduct != '' && productHandle == pioProductHandle) {

            return true;

          } else {

            return false;

          }

        
          break;
        default:
          // All Products
          return true;
      }
    };
    pioGetProduct = function (handle) {
      if (pioProductData != '') {
        return pioProductData;
      } else {
        $pioobject.ajax({
          dataType: 'json',
          cache: false,
          async: false,
          url: '/products/' + handle + '.json',
          success: function (data) {
            pioProductData = data.product;
          },
          error: function (error) {
            //throw 'Pio product lookup error';
          },
        });
        return pioProductData;
      }
    };
    pioloadLanguage = function (piokey, field, pioNeededParam) {
      var pioLanguage = $pioobject('html').attr('lang');
      if (!pioLanguage || pioLanguage == '') {
        pioLanguage = $pioobject('#pioLang').attr('lang');
      }
      var pioLanguageText = {};
      if (!pioLanguageSettings.language || pioLanguageSettings.language.length === 0) { //when there is no language created
        pioLanguageText['field_label'] = field.field_label;
        pioLanguageText['field_cart_name'] = field.field_cart_name;
        pioLanguageText['placeholder'] = field.placeholder;
        if (pioNeededParam == 'input_options') {
          pioLanguageText['input_options'] = field.input_options.split(',');
        }
      } else {
        var pioshopLanguage = pioLanguageSettings.language;
        //console.log(pioshopLanguage);
        $pioobject.each(pioshopLanguage, function (index, piolang) {
          if (index == pioLanguage) {
            $pioobject.each(piolang, function (piokey, langfields) {
              $pioobject.each(langfields, function (piokey, langfield) {  
                if (langfield.optionset_id == field.optionset_id && langfield.option_id == field.option_id && langfield.label == pioNeededParam) {
                  pioLanguageText[pioNeededParam] = langfield.data;
                  return false;
                }
              });
            });
            return false;
          } else {
            pioLanguageText['field_label'] = field.field_label;
            pioLanguageText['field_cart_name'] = field.field_cart_name;
            pioLanguageText['placeholder'] = field.placeholder;
            if (pioNeededParam == 'input_options') {
              pioLanguageText['input_options'] = field.input_options.split(',');
            }
          }
        });
      }
      return pioLanguageText[pioNeededParam];
    }
    
    //For text field price
    $pioobject(document).on("change paste keyup",".pioShortText", function() {
      if($pioobject(this).val() != ""){
        var pioTxtPrice = $pioobject(this).attr("pio-price");
        var priceWithCurrency = pioCurrencyConverter(storeCurrency,pioTxtPrice);
        if(pioTxtPrice !='' && pioTxtPrice != null){
          $pioobject(this).next(".pioShortText__original").val($pioobject(this).val()+" |"+ priceWithCurrency);   
        }else{
          $pioobject(this).next(".pioShortText__original").val($pioobject(this).val());
        }
        
      }else{
        $pioobject(this).next(".pioShortText__original").val(" "); 
      }
      
    });
    
    //For text area field price
    $pioobject(document).on("change paste keyup",".pioLongText", function() {
      if($pioobject(this).val() != ""){
        var pioLongTxtPrice = $pioobject(this).attr("pio-price");
        var priceWithCurrency = pioCurrencyConverter(storeCurrency,pioLongTxtPrice);
        if(pioLongTxtPrice != '' && pioLongTxtPrice != null){
          $pioobject(this).next(".pioLongText__original").val($pioobject(this).val()+" |"+priceWithCurrency);   
        }else{
          $pioobject(this).next(".pioLongText__original").val($pioobject(this).val());   
        }
        
      }else{
        $pioobject(this).next(".pioLongText__original").val(" "); 
      }  
    });
    
    //For radio button field price
    $pioobject(document).on("change",".pioRadioButton", function() {
      var pioPrice = $pioobject(this).attr("pio-price");
      if(pioPrice != ""){
        var priceWithCurrency = pioCurrencyConverter(storeCurrency,pioPrice);
        pioPrice = " |"+priceWithCurrency;
      }
      if($pioobject(this).val() != ""){
        if(pioPrice != '' && pioPrice != null){
          $pioobject(this).parents(".td-content").find(".pioRadioButton__original").val($pioobject(this).val()+pioPrice); 
        }else{
          $pioobject(this).parents(".td-content").find(".pioRadioButton__original").val($pioobject(this).val());   
        }
        
      }else{
        $pioobject(this).parents(".td-content").find(".pioRadioButton__original").val(" "); 
      } 
      return true; 
    });
    
    //For select field price
    $pioobject(document).on("change",".pioSelect", function() {
      var pioPrice = "";
      var pioSelectedOption = $pioobject(this).find(":selected");
    
      if(pioSelectedOption.val() != ""){
        var priceWithCurrency = pioCurrencyConverter(storeCurrency,pioSelectedOption.attr("pio-price"));
        pioPrice = " |"+priceWithCurrency;
      }
      if($pioobject(this).val() != ""){
        if(parseInt(plan_id) > parseInt(2) && pioSelectedOption.attr("pio-price") != '' && pioSelectedOption.attr("pio-price") != null){
          $pioobject(this).next(".pioSelect__original").val(pioSelectedOption.val()+pioPrice);   
        }else{
          $pioobject(this).next(".pioSelect__original").val(pioSelectedOption.val());   
        }
      }else{
        $pioobject(this).next(".pioSelect__original").val(" "); 
      } 
      return true; 
    });
    
    //For Image field price
    $pioobject(document).on("change",".pioImage", function() {
      var pioFile = $pioobject(this).get(0).files[0];
      if($pioobject(this).val() != ""){
        var pioImagePrice = $pioobject(this).attr("pio-price");
        var priceWithCurrency = pioCurrencyConverter(storeCurrency,pioImagePrice);
        if(pioImagePrice != '' && pioImagePrice != null){
          $pioobject(this).next(".pioImage__original").val(pioFile.name+" |"+priceWithCurrency);   
        }else{
          //$pioobject(this).next(".pioImage__original").val(pioFile.name);   
          $pioobject(this).next(".pioImage__original").val(" ");   
        }
        
      }else{
        $pioobject(this).next(".pioImage__original").val(" "); 
      }
    });
    
    //For Date field price
    $pioobject(document).on("change",".pioDatePick", function() {
      if($pioobject(this).val() != ""){
        var pioDatePrice = $pioobject(this).attr("pio-price");
        var priceWithCurrency = pioCurrencyConverter(storeCurrency,pioDatePrice);
        if(pioDatePrice != '' && pioDatePrice != null){
          $pioobject(this).next(".pioDatePick__original").val($pioobject(this).val()+" |"+priceWithCurrency);   
        }else{
          $pioobject(this).next(".pioDatePick__original").val($pioobject(this).val());   
        }
      }else{
        $pioobject(this).next(".pioDatePick__original").val(" "); 
      }
    });
    
    //For checkbox field price
    $pioobject(document).on("change",".pioCheckBox", function() {
      var pioOptPrice = 0;
      var pioSelectedChk = $pioobject(this).parents(".td-content").find('.pioCheckBox:checkbox:checked');
      var pioSelectedPrice = pioSelectedChk.map(function() {
          //return $pioobject(this).attr('pio-price');
          if($pioobject(this).attr('pio-price') != ""){
            pioOptPrice += Number($pioobject(this).attr('pio-price'));
          }
      }).get();
      var pioSelectedCheckbox = pioSelectedChk.map(function() {
          return this.value;
      }).get();
      var pioSelectedOptions = pioSelectedCheckbox.join(",");
      if(pioSelectedOptions != ""){
        var priceWithCurrency = pioCurrencyConverter(storeCurrency,pioOptPrice);
        if(parseInt(plan_id) > parseInt(2) && pioOptPrice != '' && pioOptPrice != null){
          $pioobject(this).parents(".td-content").find(".pioCheckBox__original").val(pioSelectedOptions+" |"+priceWithCurrency);   
        }else{
          $pioobject(this).parents(".td-content").find(".pioCheckBox__original").val(pioSelectedOptions); 
        }
        
      }else{
        $pioobject(this).parents(".td-content").find(".pioCheckBox__original").val(" "); 
      }
    });
    
    //Checkout
    var pioElimentcheck = '[name="checkout"], [name="goto_pp"], [name="goto_gc"], .piocheckout';
    $pioobject('body').on('click', pioElimentcheck , function(e) {
      if(parseInt(plan_id) > parseInt(2)){
        e.preventDefault();
        pioDraftCreate();
      }
    });

    //Convert the price with symbol 
    pioCurrencyConverter = function (format,amountData) {
      var pioShopCurrency = format.replace('{{amount}}', amountData)
        .replace('{{ amount }}', amountData)
        .replace('{{amount_with_comma_separator}}', amountData)
        .replace('{{ amount_with_comma_separator }}', amountData)
        .replace('{{amount_no_decimals}}', amountData)
        .replace('{{ amount_no_decimals }}', amountData)
        .replace('{{amount_with_apostrophe_separator}}', amountData)
        .replace('{{ amount_with_apostrophe_separator }}', amountData)
        .replace('{{amount_no_decimals_with_comma_separator}}', amountData)
        .replace('{{ amount_no_decimals_with_comma_separator }}', amountData)
        .replace('.00', "");
      return pioShopCurrency;
    }

    
    //Draft order create
    pioDraftCreate = function () {
        $pioobject.getJSON('/cart.js', function() {      
          
        }).then(function(response){
          
          var draftData = 0;
          //Ajax For Creating Draft order
          const draftURL = $pioobject.ajax({
            type: 'POST',
            async: false,
            cache: false,
            url: pioBasePath+'checkout-draft',
            dataType:"json",
            data: {
              shop: pioShop,
              pioCart: response,
              shopCurrency: storeCurrency
            },
            success: function (draftdata) {
              const drafURL = draftdata;
              console.log(draftdata);
              return drafURL;
              
              // if(draftdata != 0){
              //   return drafURL;
              
              // }else{
              //   return '/checkout';
              
              // }
            }
          });
          //console.log(draftURL.responseText );
          //Redirect based on the Draft order response
          if(draftURL.responseText != 0){
              window.location.href = draftURL.responseText;
          }else{
              window.location.href = '/checkout';
          }
        });
    }
    $pioobject('body').on('click', "#pioWrapper" , function(e) {
        e.preventDefault();
        if(parseInt(plan_id) <= parseInt(2)){
          pioBuyItNowButtonValidation(e);  
        }else{
          var tdProductForm = $(this).closest("form");
            var tdFormData = new FormData($(this).closest("form")[0]);
            $.ajax({
                  url: '/cart/add.js',
                  dataType: 'json',
                  type: 'post',
                  cache: false,
                  contentType: false,
                  processData: false,
                  data: tdFormData,
                  success: function(response) {
                    pioDraftCreate();
                  }
            }); 
        }     
    });

    
    // Call function
    $pioobject('div').pioLoad();
  })(window.jQuery, window, document);
}