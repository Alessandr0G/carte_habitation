let map;
let sumLayer = null;
let exclusionLayer = null;
let frLayer = null;
let currentLayer = null;

function MapCreation() {
    map = L.map('map').setView([46.72, 7.05], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
};

MapCreation();

async function addLayer(
    group,
    tiffUrl,
    color = [255, 0, 0], // RGB
    opacityValue = 0.6,
    valeurmin = 1,
    valeurmax = 2
) {
    const raster = await loadRaster(tiffUrl);

    // if (currentLayer) map.removeLayer(currentLayer);

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = raster.width;
    canvas.height = raster.height;

    const ctx = canvas.getContext('2d');
    const img = ctx.createImageData(raster.width, raster.height);

    for (let i = 0; i < raster.data.length; i++) {
        const v = raster.data[i];
        const idx = i * 4;

        if (!Number.isFinite(v) || v < valeurmin || v > valeurmax) {
            img.data[idx + 3] = 0; // transparent
        } else {
            img.data[idx]     = color[0];
            img.data[idx + 1] = color[1];
            img.data[idx + 2] = color[2];
            img.data[idx + 3] = Math.round(opacityValue * 255);
        }
    }

    ctx.putImageData(img, 0, 0);

    const layer = L.imageOverlay(
        canvas.toDataURL(),
        [
            [raster.bbox[1], raster.bbox[0]],
            [raster.bbox[3], raster.bbox[2]]
        ]
    );

    layer.addTo(map);

    // 👇 STORE BY GROUP
    if (group === "exclusion") {
        exclusionLayer = layer;
    } else if (group === "frlayer") {
        frLayer = layer;
    } else if (group === "sumLayer") {
        sumLayer = layer;
    } else {
        currentLayer = layer;
    }
};

function importanceValue() {
    const dangersfm_imp_val = document.querySelector('input[name="sliderdangerfm"]').value
    const lac_imp_val = document.querySelector('input[name="sliderlac"]').value
    const foret_imp_val = document.querySelector('input[name="sliderforet"]').value
    const etang_imp_val = document.querySelector('input[name="slideretang"]').value
    const ville_imp_val = document.querySelector('input[name="sliderville"]').value
    const village_imp_val = document.querySelector('input[name="slidervillage"]').value
    const prim_imp_val = document.querySelector('input[name="sliderecoleprim"]').value
    const uni_imp_val = document.querySelector('input[name="sliderecoleuni"]').value

    return {
        dangersfm_x: dangersfm_imp_val,
        lac_x: lac_imp_val,
        foret_x: foret_imp_val,
        etang_x: etang_imp_val,
        ville_x: ville_imp_val,
        village_x: village_imp_val,
        prim_x: prim_imp_val,
        uni_x: uni_imp_val
    }
}

function importanceselection() {
    const Lac_yesno =
        document.querySelector('input[name="lacyesno"]:checked').value;
    if (Lac_yesno === "0") {
        lac_val = 1;
    } else {
        lac_val = -1;
    };
    const foret_yesno =
        document.querySelector('input[name="foretyesno"]:checked').value;
    if (foret_yesno === "0") {
        foret_val = 1;
    } else {
        foret_val = -1;
    };
    const etang_yesno =
        document.querySelector('input[name="etangyesno"]:checked').value;
    if (etang_yesno === "0") {
        etang_val = 1;
    } else {
        etang_val = -1;
    };
    const village_yesno =
        document.querySelector('input[name="villageyesno"]:checked').value;
    if (village_yesno === "0") {
        village_val = 1;
    } else {
        village_val = -1;
    };
    const ville_yesno =
        document.querySelector('input[name="villeyesno"]:checked').value;
    if (ville_yesno === "0") {
        ville_val = 1;
    } else {
        ville_val = -1;
    };
    const ecole_prim_yesno =
        document.querySelector('input[name="ecoleprimyesno"]:checked').value;
    if (ecole_prim_yesno === "0") {
        ecole_prim_val = 1;
    } else {
        ecole_prim_val = -1;
    };
    const ecole_uni_yesno =
        document.querySelector('input[name="ecoleuniyesno"]:checked').value;
    if (ecole_uni_yesno === "0") {
        ecole_uni_val = 1;
    } else {
        ecole_uni_val = -1;
    };
    const dangerfm_yesno =
        document.querySelector('input[name="dangerfm"]:checked').value;
    if (dangerfm_yesno === "0") {
        dangerfm_val = 1;
    } else {
        dangerfm_val = 0;
    };

    return {
        dangerfm: dangerfm_val,
        lac: lac_val,
        foret: foret_val,
        etang: etang_val,
        village: village_val,
        ville: ville_val,
        ecole_prim: ecole_prim_val,
        ecole_uni: ecole_uni_val
    };
};

function distselection(){
  const dist_lac = document.querySelector("input[id=Lacdist]:checked").value;
  if(dist_lac === "0"){
    const dist_lac_files = ("1km");
  } else if(dist_lac === "1"){
    const dist_lac_files = ("5km");
  } else if(dist_lac === "2"){
    const dist_lac_files = ("10km");
  };
  const dist_foret = document.querySelector("input[id=Foretdist]:checked").value;
  if(dist_foret === "0"){
    const dist_foret_files = ("1km");
  } else if(dist_foret === "1"){
    const dist_foret_files = ("5km");
  };
  const dist_etang = document.querySelector("input[id=Etangdist]:checked").value;
  if(dist_etang === "0"){
    const dist_etang_files = ("1km");
  } else if(dist_etang === "1"){
    const dist_etang_files = ("5km");
  };
  const dist_uni = document.querySelector("input[id=Ecoleunidist]:checked").value;
  if(dist_uni === "0"){
    const dist_uni_files = ("1km");
  } else if(dist_uni === "1"){
    const dist_uni_files = ("10km");
  };
  return {
    lac_files: dist_lac_files,
    foret_files: dist_foret_files,
    etang_files: dist_etang_files,
    uni_files: dist_uni_files
  };
};


// HERE 1

async function loadRaster(url) {
    const response = await fetch(url, {
        cache: "no-store",
        headers: {
            "Cache-Control": "no-cache"
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
    }

    const arrayBuffer = await response.arrayBuffer();

    // SAFETY CHECK (very useful)
    if (arrayBuffer.byteLength < 100) {
        throw new Error(`Invalid TIFF file (too small): ${url}`);
    }

    const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);
    const image = await tiff.getImage();

    const width = image.getWidth();
    const height = image.getHeight();
    const data = await image.readRasters({ interleave: true });

    return {
        data,
        width,
        height,
        bbox: image.getBoundingBox()
    };
}

function mergeBooleanLayers(r1, r2) {
    if (r1.width !== r2.width || r1.height !== r2.height) {
        throw new Error('Raster dimensions do not match');
    }

    const merged = new Float32Array(r1.data.length);

    for (let i = 0; i < r1.data.length; i++) {
        const v1 = r1.data[i] > 0.5 ? 1 : 0;
        const v2 = r2.data[i] > 0.5 ? 1 : 0;

        // OR logic (presence in either distance)
        merged[i] = v1 || v2 ? 1 : 0;
    }

    return {
        data: merged,
        width: r1.width,
        height: r1.height,
        bbox: r1.bbox
    };
};

async function sumBooleanTiffs(url1, url2, url3, url4, url5, url6, url7, url8, url9, url10,
    url11, url12, url13, url14, url15, url16, url17, url18, url19, url20, url21, url22) {
    const layer_Avalanche = await loadRaster(url1);
    const layer_Chute_P = await loadRaster(url2);
    const layer_Crue = await loadRaster(url3);
    const layer_Effondre = await loadRaster(url4);
    const layer_G_perm = await loadRaster(url5);
    const layer_G_spon = await loadRaster(url6);
    const layer_Lave_torr = await loadRaster(url7); // Danger fm
    const layer_Frt_1 = await loadRaster(url8);
    const layer_Frt_5 = await loadRaster(url9);
    const layer_Etng_1 = await loadRaster(url10);
    const layer_Etng_5 = await loadRaster(url11);
    const layer_Lac_1 = await loadRaster(url12);
    const layer_Lac_5 = await loadRaster(url13);
    const layer_Lac_10 = await loadRaster(url14); // Nature
    const layer_ville_moins = await loadRaster(url15);
    const layer_ville_plus = await loadRaster(url16);
    const layer_village_moins = await loadRaster(url17);
    const layer_village_plus = await loadRaster(url18);
    const layer_ecole_prim = await loadRaster(url19);
    const layer_ecole_uni_1 = await loadRaster(url20);
    const layer_ecole_uni_5 = await loadRaster(url21);
    const layer_ecole_uni_10 = await loadRaster(url22); // Social

    // valeur attractives/repulsives
    const r_values = importanceselection();
    const r_danger = r_values.dangerfm;
    const r_lac = r_values.lac;
    const r_foret = r_values.foret;
    const r_etang = r_values.etang;
    const r_ville = r_values.ville;
    const r_village = r_values.village;
    const r_prim = r_values.ecole_prim;
    const r_uni = r_values.ecole_uni;

    // Selection des couches en fonction des distances et attraction/repulsion
    const dist_files = distselection();
    if (dist_files.lac_files === "1km") {
        layer_Lac = layer_Lac = layer_Lac_1;
    } else if (dist_files.lac_files === "5km"){
        layer_Lac = mergeBooleanLayers(layer_Lac_1, layer_Lac_5);
    } else {
        layer_Lac = mergedBooleanLayers(mergeBooleanLayers(layer_Lac_1, layer_Lac_5),layer_Lac_10);
    };
    if(dist_files.foret_files === "1km") {
        layer_Foret = layer_Frt_1;
    } else {
        layer_Foret = mergeBooleanLayers(layer_Frt_1,layer_Frt_5);
    };
    if(dist_files.etang_files === "1km") {
        layer_Foret = layer_Etng_1;
    } else {
        layer_Foret = mergeBooleanLayers(layer_Etng_1,layer_Etng_5);
    };
    if(dist_files.uni_files === "1km") {
        layer_Uni = layer_ecole_uni_1;
    } else {
        layer_Uni = mergeBooleanLayers(mergeBooleanLayers(layer_ecole_uni_1,layer_ecole_uni_5),layer_ecole_uni_10);
    };

    // valeur d'importance du critère

    const x_values = importanceValue();
    const x_lac = x_values.lac_x;
    const x_foret = x_values.foret_x;
    const x_etang = x_values.etang_x;
    const x_ville = x_values.ville_x;
    const x_village = x_values.village_x;
    const x_prim = x_values.prim_x;
    const x_uni = x_values.uni_x;

    // HERE ICI CONTINUE

    const sum = new Float32Array(r1.data.length);

    // Normalize values: treat nodata / invalid extremes as 0, and
    // convert any truthy raster values to boolean 1 (threshold > 0.5).
    for (let i = 0; i < r1.data.length; i++) {
        let v1 = r1.data[i];
        let v2 = r2.data[i];

        // Guard against NaN, Infinity, or sentinel large negative values
        if (!Number.isFinite(v1) || Math.abs(v1) > 1e30) v1 = 0;
        if (!Number.isFinite(v2) || Math.abs(v2) > 1e30) v2 = 0;

        // Some boolean rasters use 255 or other positive values for "true".
        v1 = v1 > 0.5 ? 1 : 0;
        v2 = v2 > 0.5 ? 1 : 0;

        sum[i] = v1 + v2;
    }
    console.log('Sum data sample:', sum.slice(1500, 2600));
    return {
        data: sum,
        width: r1.width,
        height: r1.height,
        bbox: r1.bbox
    };
};
//TEst
function createRasterCanvas(result) {
  console.log(result.width, result.height, result.data.slice(0, 10));
  const uniqueValues = Array.from(new Set(result.data));
  console.log('Unique values in data:', uniqueValues);
    if (result.data.length !== result.width * result.height) {
        throw new Error('Raster size mismatch');
    }

    const canvas = document.createElement('canvas');
    canvas.width  = result.width;
    canvas.height = result.height;

    const ctx = canvas.getContext('2d');
    const img = ctx.createImageData(result.width, result.height);

    for (let i = 0; i < result.data.length; i++) {
        const v = result.data[i]; // 0,1,2
        const idx = i * 4;

        img.data[idx]     = 0; // R
        img.data[idx + 1] = 0; // G
        img.data[idx + 2] = 0; // B
        
        if (v === 0) {
            img.data[idx + 3] = 0; // transparent
        } else if (v === 1) {
            img.data[idx]     = 100;
            img.data[idx + 1] = 150;
            img.data[idx + 2] = 255; // light blue
            img.data[idx + 3] = 180;
        } else if (v === 2) {
            img.data[idx]     = 255;
            img.data[idx + 1] = 100;
            img.data[idx + 2] = 0; // orange
            img.data[idx + 3] = 180;
        }
    }
    ctx.putImageData(img, 0, 0);
    return canvas;
};

async function addSummedLayer(files_url = [
    'Data/Incitation/Dangers_fm/Avalanche_WGS_boolean.tif', //0
    'Data/Incitation/Dangers_fm/Chute_pierre_WGS_boolean.tif',
    'Data/Incitation/Dangers_fm/Crue_WGS_boolean.tif',
    'Data/Incitation/Dangers_fm/Effondrement_WGS_boolean.tif',
    'Data/Incitation/Dangers_fm/G_perm_WGS_boolean.tif',
    'Data/Incitation/Dangers_fm/G_spon_WGS_boolean.tif',
    'Data/Incitation/Dangers_fm/Lave_torr_WGS_boolean.tif', // 6
    'Data/Incitation/Nature/Foret_grd_1km_WGS_boolean.tif',
    'Data/Incitation/Nature/Foret_grd_5km_WGS_boolean.tif',
    'Data/Incitation/Nature/Etang_1km_WGS_boolean.tif',
    'Data/Incitation/Nature/Etang_5km_WGS_boolean.tif',
    'Data/Incitation/Nature/Lac_1km_WGS_boolean.tif',
    'Data/Incitation/Nature/Lac_5km_WGS_boolean.tif',
    'Data/Incitation/Nature/Lac_10km_WGS_boolean.tif', //13
    'Data/Incitation/Social/ville_moins_2km_WGS_boolean.tif',
    'Data/Incitation/Social/ville_plus_2km_WGS_boolean.tif',
    'Data/Incitation/Social/village_moins_2km_WGS_boolean.tif',
    'Data/Incitation/Social/village_plus_2km_WGS_boolean.tif',
    'Data/Incitation/Social/ecole_prim_co_1km_WGS_boolean.tif',
    'Data/Incitation/Social/ecole_uni_1km_WGS_boolean.tif',
    'Data/Incitation/Social/ecole_uni_5km_WGS_boolean.tif',
    'Data/Incitation/Social/ecole_uni_10km_WGS_boolean.tif' //21
]) {
    const result = await sumBooleanTiffs(
        files_url[0], files_url[1], files_url[2], files_url[3], files_url[4],
        files_url[5], files_url[6], files_url[7], files_url[8],
        files_url[9], files_url[10], files_url[11], files_url[12],
        files_url[13], files_url[14], files_url[15], files_url[16],
        files_url[17], files_url[18], files_url[19], files_url[20],
        files_url[21]
    );
    console.log(result.bbox);

    if (currentLayer) map.removeLayer(currentLayer);

    const canvas = createRasterCanvas(result);

    currentLayer = L.imageOverlay(
        canvas.toDataURL(),
        [
            [result.bbox[1], result.bbox[0]],
            [result.bbox[3], result.bbox[2]]
        ],
        { opacity: 0.8 }
    );

    currentLayer.addTo(map);
};
addSummedLayer();

// HERE 2

function sumLayers() {
// a implementer
};




function exclusionlayer() {
    const exclusionCheckbox = document.getElementById('exclusion');
    if (exclusionCheckbox.checked) {
        addLayer("exclusion",'Data/Exclusion/Avalanche_exclusion_WGS_boolean.tif', [0, 0, 0], 1);
        addLayer("exclusion",'Data/Exclusion/Chute_pierre_exclusion_WGS_boolean.tif', [0, 0, 0], 1);
        addLayer("exclusion",'Data/Exclusion/Crues_exclusion_WGS_boolean.tif', [0, 0, 0], 1);
        addLayer("exclusion",'Data/Exclusion/Eau_exclusion_WGS_boolean.tif', [0, 0, 0], 1);
        addLayer("exclusion",'Data/Exclusion/Effondrement_exclusion_WGS_boolean.tif', [0, 0, 0], 1);
        addLayer("exclusion",'Data/Exclusion/G_perm_exclusion_WGS_boolean.tif', [0, 0, 0], 1);
        addLayer("exclusion",'Data/Exclusion/G_spon_exclusion_WGS_boolean.tif', [0, 0, 0], 1);
        addLayer("exclusion",'Data/Exclusion/Lave_torr_exclusion_WGS_boolean.tif', [0, 0, 0], 1);
    } else {
        // 👇 REMOVE ONLY EXCLUSION LAYERS
        map.removeLayer(exclusionLayer);
        exclusionLayer = [];
    }
};

function frlayer() {
    const frlayerCheckbox = document.getElementById('frlayer');
    if (frlayerCheckbox.checked) {
        addLayer('Data/Canton_WGS.tif', "greys", 0.7, 1, 30);
    } else {
        if (currentLayer) {
            map.removeLayer(currentLayer);
            currentLayer = null;
        }
    }
};


// ELEMENTS NON DEFINITIFS DANS LE TRAVAIL FINAL

function test() {
    const pieValue = document.querySelector('input[name="Pie radio"]:checked').value;
    if (pieValue === "1") {
        addLayer('Data/Incitation/Nature/Lac_10km_WGS_boolean.tif');
    } else {
        addLayer('Data/Incitation/Nature/Foret_grd_1km_WGS_boolean.tif');
    };
};

console.log(window.GeoTIFF);
async function testTiff(url) {
    const tiff = await GeoTIFF.fromUrl(url);
    const image = await tiff.getImage();
    console.log('Raster width:', image.getWidth(), 'height:', image.getHeight());
    const data = await image.readRasters();
    console.log('First pixel value:', data[0][0]);
    console.log('Unique values:', Array.from(new Set(data[0])));
};
testTiff('Data/Incitation/Nature/Lac_10km_WGS_boolean.tif');
