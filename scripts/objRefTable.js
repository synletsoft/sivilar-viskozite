const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.video,
		C3.Plugins.Sprite,
		C3.Behaviors.Tween,
		C3.Plugins.Touch,
		C3.Plugins.Browser,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.Browser.Acts.GoToURL,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.ForEachOrdered,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.video.Cnds.IsPlaying,
		C3.Plugins.video.Acts.Pause,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Acts.SetEffectEnabled,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.video.Acts.Play,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.video.Acts.SetSource2,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.System.Exps.loadingprogress,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Video: 0},
	{derece: 0},
	{kulp: 0},
	{posX: 0},
	{posY: 0},
	{Tween: 0},
	{menuBg: 0},
	{videoSource: 0},
	{etilenGlikon40: 0},
	{su40: 0},
	{su25: 0},
	{etilenGlikol25: 0},
	{gliserin25: 0},
	{gliserin40: 0},
	{Touch: 0},
	{refreshBtn: 0},
	{audioBtn: 0},
	{shareBtn: 0},
	{fullScreenBtn: 0},
	{Browser: 0},
	{loaderEmpty: 0},
	{loaderFill: 0},
	{loaderLogo: 0},
	{menuItems: 0},
	{animStart: 0},
	{showKulpOutline: 0},
	{showMenuItemOutline: 0},
	{videoStart: 0},
	{activeVideoSource: 0},
	{isLoader: 0}
];

self.InstanceType = {
	Video: class extends self.IWorldInstance {},
	derece: class extends self.ISpriteInstance {},
	kulp: class extends self.ISpriteInstance {},
	menuBg: class extends self.ISpriteInstance {},
	etilenGlikon40: class extends self.ISpriteInstance {},
	su40: class extends self.ISpriteInstance {},
	su25: class extends self.ISpriteInstance {},
	etilenGlikol25: class extends self.ISpriteInstance {},
	gliserin25: class extends self.ISpriteInstance {},
	gliserin40: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	refreshBtn: class extends self.ISpriteInstance {},
	audioBtn: class extends self.ISpriteInstance {},
	shareBtn: class extends self.ISpriteInstance {},
	fullScreenBtn: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	loaderEmpty: class extends self.ISpriteInstance {},
	loaderFill: class extends self.ISpriteInstance {},
	loaderLogo: class extends self.ISpriteInstance {},
	menuItems: class extends self.ISpriteInstance {}
}