// Name:        Seadragon.Seadragon.Config.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.725
// FileVersion: 4.1.7.0725
// (c) 2010 CodePlex Foundation
Type.registerNamespace('Sys.Extended.UI.Seadragon');
Type.registerNamespace('Seadragon');
Sys.Extended.UI.Seadragon.Config = function() {

    this.debugMode = true;

    this.animationTime = 1.5;

    this.blendTime = 0.5;

    this.alwaysBlend = false;

    this.autoHideControls = true;

    this.immediateRender = false;

    this.wrapHorizontal = false;

    this.wrapVertical = false;

    this.minZoomDimension = 0.8;

    this.maxZoomPixelRatio = 2;

    this.visibilityRatio = 0.5;

    this.springStiffness = 5.0;

    this.imageLoaderLimit = 2;

    this.clickTimeThreshold = 200;

    this.clickDistThreshold = 5;

    this.zoomPerClick = 2.0;

    this.zoomPerSecond = 2.0;

    this.showNavigationControl = true;

    this.maxImageCacheCount = 100;

    this.minPixelRatio = 0.5;

    this.mouseNavEnabled = true;

    this.navImages = {
        zoomIn: {
            REST: 'WebResource.axd?d=UQ25qz5S50VjNFMbWWF9ZEHBFf8eWL_9PTv-2tGlrEdE_1whPRqucjdHBp2gu1Tsj_7EVc_XSrkzqOzQzYck2FJcZ9elGROsNawD4rewtwrIej0enoanHUI0tRKbNcU1EGbDF9b624Yk8rr1f6F7hw2&t=635122560880000000',
            GROUP: 'WebResource.axd?d=JfV6JmnV_xZAVGEqzhtC1UEQtuu45MFA47ZdC10JhgjQs46psG7pee3I5rYYYfOLPpJsrIDfDrU2l85CqqU2SRPxuH-noLWuWXtTf179Z07SWjoWlpQzUllvaj0Li_dbG5Hjk_iuKRsSm6IxLPWmAYZeMwqz5iOVNxD4LTdv7JQ1&t=635122560880000000',
            HOVER: 'WebResource.axd?d=hW860sP5QRletu5dxlgHRYEvMKvMUzn3orCRgf8LL7jgGU3JJ2twuZYLXc0F2I1NTjkC3th6eEIkHd0FkKNtJQisWfSTHJbbKoGt0QkoCkDEHwH9CxnnrZXWHrONcANP3WBNmlbV8CeT_FyZBNF0WA2&t=635122560880000000',
            DOWN: 'WebResource.axd?d=Rl2pgs-WYnH2tB74aMpkr_7NtbT1jTJEk0T66Ep5uOqf8SS9_M7hkV3M_cNSd1l0crnksLZxsIiTsIr9jAYd-_ZEN8kwRMnUtOsL966gv5-0KVxkk1YOln55r_-EAaxm7tyT60Dfd0aS1ZnTHUo3VQ2&t=635122560880000000'
        },
        zoomOut: {
            REST: 'WebResource.axd?d=8Ay5fiAJTSyzj1XnW_mOxIyoi1p8_Wxjp7LYbfzbgkhzRgLp7Hcsm9hgr4Aqz0YA1gZlprrzq4lEEAbCVsyezIl9cwzEpMIYP7gTAe-PYA4T5XnRjtm95UHCrfgd-ERzsGw4RCkMEOkThPer4x_iuQ2&t=635122560880000000',
            GROUP: 'WebResource.axd?d=jNQdEfqhHdtIDZHT1f3aToha6haGgY_ptSogvuoCldjdWiFXDuDYdIYWbnVkts9rH1O_7UxtBHw6lDHhGInVUrbTOXbe5JLjkRTjq8wHaQN9vHzR_rrMun4Vnum4lcOgm9Iul8KmIuC5IuZf6xyP8vltEMi5mwoVLPq6rLxdi_Q1&t=635122560880000000',
            HOVER: 'WebResource.axd?d=CIkDVcbI3QI36VMw-Thmwnh1XHkhQuz_TZDEEaY5J2SprxD3rz1FAdAw2xdqtw9zswwi_Wnoa62u7pO0RCbnD5auniTZy7BrfKZIsUiYwvfQMCDsoWzP6FqFkPvn_IDQDDzi_g-arHX1NApxu1GqMQ2&t=635122560880000000',
            DOWN: 'WebResource.axd?d=d7APGJc9DDj4bNW3nzSNUVNH7Kv5EqdfqVm99wwKiVw_jLiK_ce2GK9O7IubtbB1ZCBHg2FErj6EezMCmf4YsgbGIG10LVTvbdMNODGhJEGw5QFAwod18LGUxefaAJwrviI8hEP7UCWbzWJKhzMa5SGfeutNJI88Qw0MnIPcOeI1&t=635122560880000000'
        },
        home: {
            REST: 'WebResource.axd?d=6iIED6CRWDhhJTqZYoIygO5erZDIDWIFsIOpLP-GeKRl19dSTSJcXVIztA4JyTZkoifLOmPMdz0xbcQwtenPC3emr-D3FCV8kD5dXmKR7XYzJ9rP30kJZzhnNu5ZH1d3qrz0ixuVQwI_w0zR8yclbw2&t=635122560880000000',
            GROUP: 'WebResource.axd?d=DOWBWgYls_rOaRsS8rLdF4r34lW4xUZfUsqjiM4uHtWFrETWRk8xOVTYIrUozxyf2qukc37tMY_Sh_7LAaTrUUwZNASSrjg1jUc02_siW6GiOpmRxjNCaAZxGehdTpoGqjRtiAfcZRL2cF64vM2v-EcYj4q39F0oPiK77sB5JJ81&t=635122560880000000',
            HOVER: 'WebResource.axd?d=fKg_kb1-C161y_VD1VtCEYdoADyjLvvGJSZJjG4gxuUdoB-zmsk-BPWQ7_PNiVqaixenmy4pwroR26I0WpzO684R5OFUucDHlMOOuePOjLvDw9dmpAnvLnnLsfhPo2FgaQZVOu4gDKDOCft8avgKmg2&t=635122560880000000',
            DOWN: 'WebResource.axd?d=k4oOOnUmKnkmnEOnqeAB9ay9IbhDBhN3KjYX0-iMtCx7DfH2DGkTvAtI6eLhni4jtb4dkXr63urAHbR48HfjzAJT-fEw8QspU_imV_Dia__6MDI3YnrXKCHuPBewXtPrw0swkpO6MS7cV6_QEn4drw2&t=635122560880000000'
        },
        fullpage: {
            REST: 'WebResource.axd?d=kNuVZssrdgvQzQuFtQKnMkxttK6kvsD6ZJ8uSq3h4iTvrxNTNTqUSflinFv3Bw7Z8dk6KQifRe67IOVdyHC9kWERZKAUTYUiobrR0ng6Khs1ena1rpP7_THgtg-ooM6dIMH1ndk2i8ANG90gLsytFg2&t=635122560880000000',
            GROUP: 'WebResource.axd?d=W8AIu3w9V2zQCZZjBoFLslpeIQAKAVc6GlSRFWkz0-HC6a_xjZDFcJU8Ax8vx7XRxnMeqC8CMG1_Wl8-J3CGJlU1uDlqB-FYiblQqsJuHDc4hh3oo5QGhD5eeU75dwthi28zkzaIaBy8IMqkrzy3xGgkzjXuasNK9bLSTb9bG_A1&t=635122560880000000',
            HOVER: 'WebResource.axd?d=xBSI3s_DyjbNntPdYB1m5YhOOuZ6hDA8VoizskvAD5OalKPS2qNUL3hQSN4vBsn42GhAGloTm8t7iq_ZuCppA7tTqJhIUQdNBO8-DbcDsLoJHomdsJ3nMlmZs6h78JWT4mtkOj4fMNUavs2z8-J60A2&t=635122560880000000',
            DOWN: 'WebResource.axd?d=k9ge9K1i0W3Qqn8H4Pp8FKfduWcjBMDXaV97J3GqaDH-fCLOzLPByN_2WYCFAln43R4MLgOJsBQVz_HbvhvncU-XJ1qk6Pd-e4vJhpPlr-GliEUj-dSSDJ3a3H4krjVspVMjR_XW2j6K1A5W2Ujro7q5Fu_-7gBg8XrIWWBu62Y1&t=635122560880000000'
        }
    };
};
Sys.Extended.UI.Seadragon.Config.registerClass('Sys.Extended.UI.Seadragon.Config', null, Sys.IDisposable);
