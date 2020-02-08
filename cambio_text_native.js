const NativeUI = require('NativeUI');
const Scene = require('Scene');
const Textures = require('Textures');
const TG = require('TouchGestures');

// Ubicar los planos en la escena
const ojo_izquierdo = Scene.root.find('plane0');
const ojo_derecho = Scene.root.find('plane1');

// Ubicar las texturas en los assets
const textura0 = Textures.get('pupila_celeste');
const textura1 = Textures.get('pupila_fuscia');
const textura2 = Textures.get('pupila_verde');
const textura3 = Textures.get('pupila_violeta');
const textura4 = Textures.get('pupila_negra');

// Crear referencia al picker y establecele un index

const picker = NativeUI.picker
const index = 0;

// Establecer el objeto JSON de cofiguración

const configuration = {
    selectedIndex : index,
    items : [
        {image_texture:textura0},
        {image_texture:textura1},
        {image_texture:textura2},
        {image_texture:textura3},
        {image_texture:textura4}
    ]
};

picker.configure(configuration);


TG.onTap(ojo_izquierdo).subscribe((_gesture) => {
    picker.visible = true;
});

TG.onTap(ojo_derecho).subscribe((_gesture) => {
    picker.visible = true;
});

// Aplicar el cambio

picker.selectedIndex.monitor().subscribe((index) => {
    ojo_izquierdo.material.diffuse = configuration.items[index.newValue].image_texture;
    ojo_derecho.material.diffuse = configuration.items[index.newValue].image_texture;
});