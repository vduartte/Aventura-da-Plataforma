const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{PlanoDeFundoEmBlocos2: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{Sprite: 0},
	{Sólido: 0},
	{sol: 0},
	{ceu: 0},
	{Sprite2: 0},
	{Monstro: 0},
	{Sprite3: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Plataforma: class extends self.ISpriteInstance {},
	sol: class extends self.ISpriteInstance {},
	ceu: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Monstro: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {}
}