window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "btn_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 35;
		t.source = "checkbox_unselect_png";
		t.width = 35;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.stroke = 1;
		t.strokeColor = 0xffffff;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skin/GameMainSkin.exml'] = window.GameMainSkin = (function (_super) {
	__extends(GameMainSkin, _super);
	function GameMainSkin() {
		_super.call(this);
		this.skinParts = ["lbAllCost","list","lbHongbao","lbGongyi","lbTanpai","lbGuanjianci","xiaoguoGp","InputAllCost","inputJiaju","cbJiaju","inputChihe","cbChihe","inputJiaotong","cbJiaotong","inputJiankang","cbJiankang","inputChuanyi","cbChuanyi","inputYule","cbYule","inputZhufang","cbZhufang","inputXuexi","cbXuexi","inputKuaidi","cbKuaidi","inputHongbao","inputGongyi","inputTanpai","inputGuanjianci","btnCreate","setGp","btnReturn","btnJieping"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.xiaoguoGp_i(),this.setGp_i(),this.btnReturn_i(),this.btnJieping_i()];
	}
	var _proto = GameMainSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.horizontalCenter = 0;
		t.source = "bg2_jpg";
		t.width = 1920;
		return t;
	};
	_proto.xiaoguoGp_i = function () {
		var t = new eui.Group();
		this.xiaoguoGp = t;
		t.bottom = 72;
		t.horizontalCenter = -0.5;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.list_i(),this.lbHongbao_i(),this.lbGongyi_i(),this._Label2_i(),this.lbTanpai_i(),this.lbGuanjianci_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "zhangdan_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 566.14;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.lbAllCost_i(),this._Label1_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.lbAllCost_i = function () {
		var t = new eui.Label();
		this.lbAllCost = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 55;
		t.text = "97,925.65";
		t.textColor = 0x029aff;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 55;
		t.text = " 元";
		t.textColor = 0x029aff;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 254;
		t.itemRendererSkinName = MoneyItemSkin;
		t.width = 648;
		t.x = 104;
		t.y = 768.14;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 9;
		return t;
	};
	_proto.lbHongbao_i = function () {
		var t = new eui.Label();
		this.lbHongbao = t;
		t.fontFamily = "Microsoft JhengHei";
		t.right = 123;
		t.size = 30;
		t.text = "7,457.17";
		t.textColor = 0x6C6B69;
		t.y = 1099.14;
		return t;
	};
	_proto.lbGongyi_i = function () {
		var t = new eui.Label();
		this.lbGongyi = t;
		t.fontFamily = "Microsoft JhengHei";
		t.right = 154;
		t.size = 30;
		t.text = "10";
		t.textColor = 0x6C6B69;
		t.y = 1248.14;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 30;
		t.text = "次";
		t.textColor = 0x6C6B69;
		t.x = 710;
		t.y = 1248.14;
		return t;
	};
	_proto.lbTanpai_i = function () {
		var t = new eui.Label();
		this.lbTanpai = t;
		t.fontFamily = "Microsoft JhengHei";
		t.right = 124;
		t.size = 30;
		t.text = "31.2kg";
		t.textColor = 0x6C6B69;
		t.y = 1294.14;
		return t;
	};
	_proto.lbGuanjianci_i = function () {
		var t = new eui.Label();
		this.lbGuanjianci = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 76;
		t.text = "满满正能量";
		t.textColor = 0x5a5859;
		t.y = 1439.14;
		return t;
	};
	_proto.setGp_i = function () {
		var t = new eui.Group();
		this.setGp = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Label3_i(),this._Group16_i(),this.btnCreate_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0.5;
		t.size = 52;
		t.text = "支付宝账单生成器";
		t.textColor = 0x000000;
		t.y = 48;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.bottom = 162;
		t.horizontalCenter = 0.5;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Group2_i(),this._Label5_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i(),this._Group15_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.InputAllCost_i(),this._Label4_i()];
		return t;
	};
	_proto.InputAllCost_i = function () {
		var t = new eui.TextInput();
		this.InputAllCost = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请输入总支出";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.text = "总支出";
		t.textColor = 0x000000;
		t.x = 2.5;
		t.y = 9.5;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.text = "以下勾选5项，勾选的会显示在账单";
		t.textColor = 0x000000;
		t.x = 186;
		t.y = 38;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 74;
		t.elementsContent = [this.inputJiaju_i(),this.cbJiaju_i()];
		return t;
	};
	_proto.inputJiaju_i = function () {
		var t = new eui.TextInput();
		this.inputJiaju = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请输入金额";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto.cbJiaju_i = function () {
		var t = new eui.CheckBox();
		this.cbJiaju = t;
		t.label = "居家生活";
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 10;
		t.y = 84;
		t.elementsContent = [this.inputChihe_i(),this.cbChihe_i()];
		return t;
	};
	_proto.inputChihe_i = function () {
		var t = new eui.TextInput();
		this.inputChihe = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请输入金额";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto.cbChihe_i = function () {
		var t = new eui.CheckBox();
		this.cbChihe = t;
		t.label = "吃吃喝喝";
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 20;
		t.y = 94;
		t.elementsContent = [this.inputJiaotong_i(),this.cbJiaotong_i()];
		return t;
	};
	_proto.inputJiaotong_i = function () {
		var t = new eui.TextInput();
		this.inputJiaotong = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请输入金额";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto.cbJiaotong_i = function () {
		var t = new eui.CheckBox();
		this.cbJiaotong = t;
		t.label = "交通出行";
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 104;
		t.elementsContent = [this.inputJiankang_i(),this.cbJiankang_i()];
		return t;
	};
	_proto.inputJiankang_i = function () {
		var t = new eui.TextInput();
		this.inputJiankang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请输入金额";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto.cbJiankang_i = function () {
		var t = new eui.CheckBox();
		this.cbJiankang = t;
		t.label = "健康与养生";
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 40;
		t.y = 114;
		t.elementsContent = [this.inputChuanyi_i(),this.cbChuanyi_i()];
		return t;
	};
	_proto.inputChuanyi_i = function () {
		var t = new eui.TextInput();
		this.inputChuanyi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请输入金额";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto.cbChuanyi_i = function () {
		var t = new eui.CheckBox();
		this.cbChuanyi = t;
		t.label = "穿衣打扮";
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 50;
		t.y = 124;
		t.elementsContent = [this.inputYule_i(),this.cbYule_i()];
		return t;
	};
	_proto.inputYule_i = function () {
		var t = new eui.TextInput();
		this.inputYule = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请输入金额";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto.cbYule_i = function () {
		var t = new eui.CheckBox();
		this.cbYule = t;
		t.label = "休闲娱乐";
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 60;
		t.y = 134;
		t.elementsContent = [this.inputZhufang_i(),this.cbZhufang_i()];
		return t;
	};
	_proto.inputZhufang_i = function () {
		var t = new eui.TextInput();
		this.inputZhufang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请输入金额";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto.cbZhufang_i = function () {
		var t = new eui.CheckBox();
		this.cbZhufang = t;
		t.label = "住房物业";
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 70;
		t.y = 144;
		t.elementsContent = [this.inputXuexi_i(),this.cbXuexi_i()];
		return t;
	};
	_proto.inputXuexi_i = function () {
		var t = new eui.TextInput();
		this.inputXuexi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请输入金额";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto.cbXuexi_i = function () {
		var t = new eui.CheckBox();
		this.cbXuexi = t;
		t.label = "学习与健身";
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 80;
		t.y = 154;
		t.elementsContent = [this.inputKuaidi_i(),this.cbKuaidi_i()];
		return t;
	};
	_proto.inputKuaidi_i = function () {
		var t = new eui.TextInput();
		this.inputKuaidi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请输入金额";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto.cbKuaidi_i = function () {
		var t = new eui.CheckBox();
		this.cbKuaidi = t;
		t.label = "通讯快递";
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this.inputHongbao_i(),this._Label6_i()];
		return t;
	};
	_proto.inputHongbao_i = function () {
		var t = new eui.TextInput();
		this.inputHongbao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请输入金额";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 24;
		t.text = "转账与红包";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 2.5;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 20;
		t.y = 20;
		t.elementsContent = [this.inputGongyi_i(),this._Label7_i()];
		return t;
	};
	_proto.inputGongyi_i = function () {
		var t = new eui.TextInput();
		this.inputGongyi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "输入捐献次数";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 24;
		t.text = "公益捐献";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 2.5;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 30;
		t.elementsContent = [this.inputTanpai_i(),this._Label8_i()];
		return t;
	};
	_proto.inputTanpai_i = function () {
		var t = new eui.TextInput();
		this.inputTanpai = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "输入千克数";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 22;
		t.text = "碳减排量至少";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 2.5;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 40;
		t.y = 40;
		t.elementsContent = [this.inputGuanjianci_i(),this._Label9_i()];
		return t;
	};
	_proto.inputGuanjianci_i = function () {
		var t = new eui.TextInput();
		this.inputGuanjianci = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "关键词";
		t.width = 350;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 22;
		t.text = "年度关键词";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.x = 2.5;
		return t;
	};
	_proto.btnCreate_i = function () {
		var t = new eui.Button();
		this.btnCreate = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 414;
		t.label = "生成账单";
		t.width = 256;
		t.y = 65;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new eui.Button();
		this.btnReturn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 414;
		t.label = "返回修改";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 256;
		t.y = 65;
		return t;
	};
	_proto.btnJieping_i = function () {
		var t = new eui.Button();
		this.btnJieping = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75.76;
		t.horizontalCenter = -436.5;
		t.label = "保存图片";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 295.15;
		t.y = 931;
		return t;
	};
	return GameMainSkin;
})(eui.Skin);generateEUI.paths['resource/skin/MoneyItemSkin.exml'] = window.MoneyItemSkin = (function (_super) {
	__extends(MoneyItemSkin, _super);
	function MoneyItemSkin() {
		_super.call(this);
		this.skinParts = ["imgIcon","lbTitle","lbMoney"];
		
		this.height = 42;
		this.width = 640;
		this.elementsContent = [this.imgIcon_i(),this.lbTitle_i(),this.lbMoney_i()];
	}
	var _proto = MoneyItemSkin.prototype;

	_proto.imgIcon_i = function () {
		var t = new eui.Image();
		this.imgIcon = t;
		t.left = 0;
		t.source = "jiaju_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbTitle_i = function () {
		var t = new eui.Label();
		this.lbTitle = t;
		t.fontFamily = "SimHei";
		t.text = "居家生活";
		t.textColor = 0x6c6b69;
		t.verticalCenter = 0;
		t.x = 51;
		return t;
	};
	_proto.lbMoney_i = function () {
		var t = new eui.Label();
		this.lbMoney = t;
		t.fontFamily = "Microsoft JhengHei";
		t.right = 4;
		t.size = 30;
		t.text = "7,457.17";
		t.textColor = 0x6C6B69;
		t.verticalCenter = 0;
		return t;
	};
	return MoneyItemSkin;
})(eui.Skin);