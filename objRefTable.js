const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Arr,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Particles,
		C3.Plugins.shadowlight,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Behaviors.Platform.Acts.SetDoubleJumpEnabled
	];
};
self.C3_JsPropNameTable = [
	{personaje: 0},
	{DesplazarHasta: 0},
	{Plataforma: 0},
	{Sprite: 0},
	{Sólido: 0},
	{fondo: 0},
	{Teclado: 0},
	{Partículas: 0},
	{Reflector: 0},
	{moneda: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite6: 0},
	{Sprite5: 0},
	{Texto: 0},
	{FondoEnMosaico: 0},
	{Texto2: 0},
	{Texto3: 0}
];

self.InstanceType = {
	personaje: class extends self.IArrayInstance {},
	Sprite: class extends self.ISpriteInstance {},
	fondo: class extends self.ITiledBackgroundInstance {},
	Teclado: class extends self.IInstance {},
	Partículas: class extends self.IParticlesInstance {},
	Reflector: class extends self.IShadowLightInstance {},
	moneda: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	FondoEnMosaico: class extends self.ITiledBackgroundInstance {},
	Texto2: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {}
}