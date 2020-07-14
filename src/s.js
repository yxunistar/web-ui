App.LobbyUserMobileCertificationController = Ember.ObjectController.extend({
    needs: ["lobby"],
    account: "", // 帳號
    mobileNo: null, // 手機號碼
    layoutMobileNo: null, // 畫面顯示用的手機號碼 (會有遮罩轉換)
    remainingTimes: -1, // 剩餘可獲取驗證碼的次數
    remainingSeconds: -1, // 可提交驗證碼的秒數
    remainingTime: -1, // 當下倒數的剩餘秒數
    countDownTimer: null, // 倒數計時器
    authenticationCode: null, // 驗證碼

    isSuboMobileNoError: false, //是否傳送驗證碼的檢查 flag
    isMobileNoErrorShow: false, //頁面是否顯示手機號碼相關錯誤 tooltip 的判斷 flag
    isGetVerifyCode: false, //是否成功獲取認證碼 flag
    isOverUpperLimitTimes: false, //是否達到每日獲取認證碼上限次數
    isInLimitTimes: false, //是否有在每日獲取驗證碼的限制範圍內 (0 次 120 秒內 ~ 4 次)
    isAuthenticationCodeError: false, //是否可提交驗證碼的檢查 flag
    isAuthenticationCodeErrorShow: false, //頁面是否顯示認證碼相關錯誤 tooltip 的判斷 flag
    isSuccessAuthenticated: false, //是否認證成功
    isReadyToUnbind: false, //是否準備開始進入解除認證過程
    isMobileReadyCheck: false, //規避第一次的手機號碼檢查
    isVerifyCodeReadyCheck: false, //規避第一次的驗證碼檢查
    suboMobileNoErrorMsg: "",
    suboAuthenticationCodeErrorMsg: "",

    /**
     * 手機號碼檢測: 判定輸入參數是否有值，若有則檢查輸入的參數，否則為動態檢查頁面上的手機號碼欄位
     * @param string
     */
    mobileChange: function (mobileNo) {
        // 針對 layoutMobileNo 第一次指定部分遮罩手機號碼時，在頁面上不該出現錯誤訊息，因此利用 isMobileReadyCheck 來控制
        if (!this.get("isMobileReadyCheck")) {
            this.set("isMobileReadyCheck", true);
            return;
        }

        var hasInputMobileNo = typeof (mobileNo) === "string",
            detectedMobileNo = hasInputMobileNo ? mobileNo : this.get("layoutMobileNo"),
            validateMsg = this.verifyMobileNo(detectedMobileNo),
            isValid = ("pass" === validateMsg);
        var spanObj = $("label.mobile_no");

        if (detectedMobileNo != null) {
            this.addSpanStatus(spanObj, isValid);
            this.set("isSuboMobileNoError", !isValid);
            this.set("isMobileNoErrorShow", !isValid);
        }

        if (!isValid) {
            this.set("suboMobileNoErrorMsg", Em.I18n.translations.mobileCertification[validateMsg]);
        }

        if (this.get("isSuccessAuthenticated")) {
            this.set("isReadyToUnbind", isValid);
        }

        if (!hasInputMobileNo) {
            this.set("mobileNo", detectedMobileNo);
        }
    }.observes("layoutMobileNo"),

    /* 驗證碼檢測 */
    authenticationCodeChange: function () {
        // 針對 layoutMobileNo 第一次進入時，在頁面上不該出現錯誤訊息，因此利用 isVerifyCodeReadyCheck 來控制
        if (!this.get("isVerifyCodeReadyCheck")) {
            this.set("isVerifyCodeReadyCheck", true);
            return;
        }

        var validateMsg = this.verifyAuthenticationCode(this.get("authenticationCode"));
        var isValid = ("pass" === validateMsg);

        if (this.get("authenticationCode") != null) {
            this.set("isAuthenticationCodeError", !isValid);
            this.set("isAuthenticationCodeErrorShow", !isValid);
        }

        if (!isValid) {
            this.set("suboAuthenticationCodeErrorMsg", Em.I18n.translations.mobileCertification[validateMsg]);
        }

    }.observes("authenticationCode"),

    /* 手機驗證碼區塊的顯示邏輯 */
    isDisableVerifyFunc: function () {
        return !this.get("isInLimitTimes") || this.get("isSuccessAuthenticated");
    }.property("isInLimitTimes", "isSuccessAuthenticated"),

    /* 獲取驗證碼按鈕使用邏輯 */
    isDisableGetVerifyCodeBtn: function () {
        return this.get("isGetVerifyCode") || this.get("isOverUpperLimitTimes");
    }.property("isGetVerifyCode", "isOverUpperLimitTimes"),

    /* 倒數計時秒數顯示邏輯 */
    isDisableCountDown: function () {
        return !(this.get("isGetVerifyCode") && this.get("remainingTime") > 0);
    }.property("isGetVerifyCode", "remainingTime"),

    /**
     * 獲取驗證碼的剩餘次數檢查
     * 影響範圍:
     *     獲取驗證碼的按鈕使用邏輯
     *     手機驗證碼區塊顯示邏輯
     */
    remainingTimesCheck: function () {
        var remainingTimes = this.get("remainingTimes"),
            isNotInLowerLimitTime = (this.get("remainingTimes") <= 0 && this.get("remainingTime") <= 0);

        this.set("isOverUpperLimitTimes", !(this.get("remainingTimes") > 0));
        this.set("isInLimitTimes", !(this.get("remainingTimes") >= 5 || isNotInLowerLimitTime));
    }.observes("remainingTimes", "remainingTime"),

    /* 檢查手機號碼格式 */
    verifyMobileNo: function (mobileNo) {
        var mobileCheck = /^\+?[1][\d]{10}$/;
        if (!!!mobileNo) {
            return "mobileEmptyInvalid";
        } else if (!mobileCheck.test(mobileNo)) {
            return "mobileFormatInvalid";
        }

        return "pass";
    },

    /* 檢查驗證碼格式 */
    verifyAuthenticationCode: function (authenticationCode) {
        var authenticationCodeCheck = /^\d{6}$/;
        if (!!!authenticationCode) {
            return "authenticationCodeEmptyInvalid";
        } else {
            if (!authenticationCodeCheck.test(authenticationCode)) {
                return "authenticationCodeFormatInvalid";
            }
        }

        return "pass";
    },
    // 欄位驗證msg className
    addSpanStatus: function (spanObj, isValid) {
        if (false == isValid) {
            if (spanObj.hasClass('correct')) {
                spanObj.removeClass("correct");
            }

            if (!spanObj.hasClass('error')) {
                spanObj.addClass("error");
            }
        } else if (true == isValid) {
            if (spanObj.hasClass('error')) {
                spanObj.removeClass("error");
            }

            if (!spanObj.hasClass('correct')) {
                spanObj.addClass("correct");
            }
        }
    },

    /* 初始化各項參數 */
    initData: function () {
        var responseData = null, self = this;
        this.set("account", localStorage.getItem("access_username"));
        App.LobbyUserMobileCertification.getMobileVerifyStatus().then(function (response) {
            if (response.success) {
                responseData = response.value;
                console.log(responseData);

                self.set("mobileNo", responseData.mobileNo);
                self.set("remainingTimes", responseData.remainingTimes);
                self.set("remainingTime", responseData.remainingSeconds);
                self.set("remainingSeconds", responseData.remainingSeconds);
                self.set("layoutMobileNo", self.getMaskMobileNo(responseData.mobileNo));
                self.set("authenticationCode", "");

                // 次數上限判斷
                // if (self.get("remainingTimes") <= 0) {
                //     self.set("isOverUpperLimitTimes", true);
                // }

                // 是否為認證成功狀態
                if (responseData.status === "AUTHENTICATED") {
                    self.set("isSuccessAuthenticated", true);
                    self.set("remainingSeconds", -1);
                    self.set("remainingTime", -1);
                } else {
                    self.checkCurrentRemaining(responseData.verificationCodeValidSeconds);
                }
            }
        });

        this.set("isMobileReadyCheck", false);
        this.set("isVerifyCodeReadyCheck", false);
        this.set("isMobileNoErrorShow", false);
        this.set("isAuthenticationCodeErrorShow", false);
    },

    /* 手機號碼部分遮罩轉換 */
    getMaskMobileNo: function (mobileNo) {
        if (!!!mobileNo) {
            return '';
        }

        var plainText = mobileNo.slice(-4), maskText = "";
        maskText += mobileNo.slice(0, mobileNo.length - plainText.length).split("").map(function () {
            return '●';
        }).join("");

        return maskText + plainText;
    },

    /* 檢查現在是否正在提交驗證碼的倒數計時秒數內 */
    checkCurrentRemaining: function (verificationCodeValidSeconds) {
        this.verificationCodeValidSecondsCounter(verificationCodeValidSeconds);

        if (this.get("remainingSeconds")) {
            this.startCountDown();
        }
    },

    /* 手機驗證碼時限計時器 */
    verificationCodeValidSecondsCounter(verificationCodeValidSeconds) {
        if(verificationCodeValidSeconds == null || verificationCodeValidSeconds <= 0){
            this.set("isInLimitTimes", false);
            return;
        }
        this.set("isInLimitTimes", true);
        //The timer only needs to run once after the countdown, in order to hide the verified block.
        setTimeout(function(){
            this.set("isInLimitTimes", false);
        }, verificationCodeValidSeconds);
    },

    /* 開始進行倒數 */
    startCountDown: function () {
        this.set("isGetVerifyCode", true);
        this.triggerCountDownTimer();
    },

    /* 啟動倒數計時器 */
    triggerCountDownTimer: function () {
        var self = this;
        if (!!!this.get("countDownTimer")) {
            this.set("countDownTimer", UU.Pollster.create({
                name: "user_mobileCertificationTimer",
                interval: 1000,
                onPoll: function () {
                    self.set("remainingTime", self.get("remainingTime") - 1);
                    if (self.get("remainingTime") <= 0) {
                        self.set("isGetVerifyCode", false);
                    }
                }
            }));
        }

        if (!!!this.get("countDownTimer.isTimerRunning")) {
            this.get("countDownTimer").start();
        }
    },

    /* 檢查手機號碼欄位的顯示方式 */
    checkMobileFieldLayout: function () {
        // 若在手機認證成功且沒有準備要解除認證的情況下，手機號碼欄位以唯讀方式顯示
        return this.get("isSuccessAuthenticated") && !this.get("isReadyToUnbind");
    }.property("isSuccessAuthenticated", "isReadyToUnbind"),

    actions: {
        setup: function () {
            this.initData();
        },

        /* 獲取驗證碼 */
        sendVerifyCode: function () {
            this.mobileChange(this.get("mobileNo"));
            if (this.get("isSuboMobileNoError")) {
                return;
            }

            // 防止連點而先改變狀態
            this.set("isGetVerifyCode", true);

            var queryData = {mobileNo: this.get("mobileNo")}, self = this;

            App.LobbyUserMobileCertification.sendMobileVerifyCode(queryData).then(function (response) {
                var responseData = response.value;
                self.set("remainingTimes", responseData.remainingTimes);
                self.set("remainingSeconds", responseData.remainingSeconds);
                self.set("remainingTime", responseData.remainingSeconds);
                self.set("authenticationCode", "");
                self.startCountDown();
            })['catch'](function (error) {
                var response = error.responseJSON,
                    responseText = !!response.errorCode ?
                        Em.I18n.translations.mobileCertification[response.errorCode] : Em.I18n.translations.errors.unknownError;
                UU.Dialog.alert({
                    title: "注意",
                    text: responseText,
                    textAlign: "left"
                });
                self.set("isGetVerifyCode", false);
            });
        },

        /* 提交驗證碼 */
        submitVerifyCode: function () {
            this.authenticationCodeChange();
            if (this.get("isAuthenticationCodeError")) {
                return;
            }

            var queryData = {mobileNo: this.get("mobileNo"), verificationCode: this.get("authenticationCode")},
                self = this;

            App.LobbyUserMobileCertification.submitMobileAuthenticationCode(queryData).then(function (response) {
                if (typeof (response) === "boolean") {
                    self.set("isSuccessAuthenticated", response);
                    self.set("remainingSeconds", -1);
                    self.set("remainingTime", -1);
                    self.get("countDownTimer").stopByName("user_mobileCertificationTimer");

                    UU.Dialog.alert({
                        title: "手机认证成功！",
                        text: "恭喜您完成手机认证！",
                        textAlign: "left",
                        type: "success"
                    });
                }
            })['catch'](function (error) {
                var response = error.responseJSON,
                    responseText = !!response.errorCode ?
                        Em.I18n.translations.mobileCertification[response.errorCode] : Em.I18n.translations.errors.unknownError;
                UU.Dialog.alert({
                    title: "注意",
                    text: responseText,
                    textAlign: "left"
                });
            });
        },

        // TODO: 暫時停用此功能，等待產品決策是否移除或續用
        /* 解除認證 */
        unbindVerify: function () {
            return;

            // 檢查手機號碼格式
            this.mobileChange(this.get("mobileNo"));
            if (this.get("isSuboMobileNoError")) {
                return;
            }

            var queryData = {mobileNo: this.get("mobileNo")}, self = this;
            UU.Dialog.confirm({
                title: "解除认证",
                text: "您确定要解除手机号码认证吗？解除认证后，无法再使用同个号码进行认证",
                type: "warning",
                confirm: function () {
                    App.LobbyUserMobileCertification.unbindMobileCertification(queryData).then(function (response) {
                        if (typeof (response) === "boolean" && response) {
                            self.set("isReadyToUnbind", false);
                            self.set("isSuccessAuthenticated", false);
                            self.set("isGetVerifyCode", false);
                            self.initData();
                        }
                    })['catch'](function (error) {
                        var response = error.responseJSON,
                            responseText = !!response.errorCode ?
                                Em.I18n.translations.mobileCertification[response.errorCode] : Em.I18n.translations.errors.unknownError;
                        UU.Dialog.alert({
                            title: "注意",
                            text: responseText,
                            textAlign: "left"
                        });
                    });
                }
            });
        }
    }
});
