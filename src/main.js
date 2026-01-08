let map;
let sumLayer = [];
let exclusionLayer = [];
let frLayer = [];
let currentLayer = [];

function MapCreation() {
    map = L.map('map').setView([46.75, 7.08], 10);

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
        exclusionLayer.push(layer);
    } else if (group === "frlayer") {
        frLayer.push(layer);
    } else if (group === "sumLayer") {
        sumLayer.push(layer);
    } else {
        currentLayer.push(layer);
    }
};

const dangerSlider = document.querySelector('input[name="sliderdangerfm"]');
const dangerRadio0 = document.querySelector('input[name="dangerfm"][value="0"]');
const dangerRadio1 = document.querySelector('input[name="dangerfm"][value="1"]');

dangerSlider.addEventListener('input', () => {
    if (Number(dangerSlider.value) === 0) {
        dangerRadio1.checked = true; // select the radio button
    } else {
        dangerRadio0.checked = true;
    }
});

function importanceValue() {
    const dangersfm_imp_val = document.querySelector('input[name="sliderdangerfm"]').value;
    const lac_imp_val = document.querySelector('input[name="sliderlac"]').value
    const foret_imp_val = document.querySelector('input[name="sliderforet"]').value
    const etang_imp_val = document.querySelector('input[name="slideretang"]').value
    const ville_imp_val = document.querySelector('input[name="sliderville"]').value
    const village_imp_val = document.querySelector('input[name="slidervillage"]').value
    const prim_imp_val = document.querySelector('input[name="sliderecoleprim"]').value
    const uni_imp_val = document.querySelector('input[name="sliderecoleuni"]').value
    const gare_imp_val = document.querySelector('input[name="slidergare"]').value

    return {
        dangersfm_x: dangersfm_imp_val,
        lac_x: lac_imp_val,
        foret_x: foret_imp_val,
        etang_x: etang_imp_val,
        ville_x: ville_imp_val,
        village_x: village_imp_val,
        prim_x: prim_imp_val,
        uni_x: uni_imp_val,
        gare_x: gare_imp_val
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
        dangerfm_val = -1;
    } else {
        dangerfm_val = 0;
        document.querySelector('input[name="sliderdangerfm"]').value = 0;
    };
    const gare_yesno =
        document.querySelector('input[name="gareyesno"]:checked').value;
    if (gare_yesno === "0") {
        gare_val = 1;
    } else {
        gare_val = -1;
    };

    return {
        dangerfm: dangerfm_val,
        lac: lac_val,
        foret: foret_val,
        etang: etang_val,
        village: village_val,
        ville: ville_val,
        ecole_prim: ecole_prim_val,
        ecole_uni: ecole_uni_val,
        gare: gare_val
    };
};

function distselection(){
  const dist_lac = document.querySelector("input[id=Lacdist]:checked").value;
  let dist_lac_files;
  if(dist_lac === "0"){
    dist_lac_files = "1km";
  } else if(dist_lac === "1"){
    dist_lac_files = "5km";
  } else if(dist_lac === "2"){
    dist_lac_files = "10km";
  };
  const dist_foret = document.querySelector("input[id=Foretdist]:checked").value;
  let dist_foret_files;
  if(dist_foret === "0"){
    dist_foret_files = "1km";
  } else if(dist_foret === "1"){
    dist_foret_files = "5km";
  };
  const dist_etang = document.querySelector("input[id=Etangdist]:checked").value;
  let dist_etang_files;
  if(dist_etang === "0"){
    dist_etang_files = "1km";
  } else if(dist_etang === "1"){
    dist_etang_files = "5km";
  };
  const dist_uni = document.querySelector("input[id=Ecoleunidist]:checked").value;
  let dist_uni_files;
  if(dist_uni === "0"){
    dist_uni_files = "1km";
  } else if(dist_uni === "1"){
    dist_uni_files = "10km";
  };
  const dist_village = document.querySelector("input[id=Villagedist]:checked").value;
  let dist_village_files;
  if(dist_village === "0"){
    dist_village_files = "1km";
  } else if(dist_village === "1"){
    dist_village_files = "5km";
  };
  const dist_ville = document.querySelector("input[id=Villedist]:checked").value;
  let dist_ville_files;
  if(dist_ville === "0"){
    dist_ville_files = "5km";
  } else if(dist_ville === "1"){
    dist_ville_files = "10km";
  };
  return {
    lac_files: dist_lac_files,
    foret_files: dist_foret_files,
    etang_files: dist_etang_files,
    uni_files: dist_uni_files,
    village_files: dist_village_files,
    ville_files: dist_ville_files
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
    
    console.log("Loaded file:", url, "size:", arrayBuffer.byteLength);
    
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
    url11, url12, url13, url14, url15, url16, url17, url18, url19, url20, url21, url22, url23
    ) {
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
    const layer_ville_5 = await loadRaster(url15);
    const layer_ville_10 = await loadRaster(url16);
    const layer_village_1 = await loadRaster(url17);
    const layer_village_5 = await loadRaster(url18);
    const layer_ecole_prim = await loadRaster(url19);
    const layer_ecole_uni_1 = await loadRaster(url20);
    const layer_ecole_uni_5 = await loadRaster(url21);
    const layer_ecole_uni_10 = await loadRaster(url22);
    const layer_gare = await loadRaster(url23); // Social

    let layer_Lac, layer_Foret, layer_Etang, layer_Uni;
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
    const r_gare = r_values.gare;

    // Selection des couches en fonction des distances et attraction/repulsion
    const dist_files = distselection();
    if (dist_files.lac_files === "1km") {
        layer_Lac = layer_Lac = layer_Lac_1;
    } else if (dist_files.lac_files === "5km"){
        layer_Lac = mergeBooleanLayers(layer_Lac_1, layer_Lac_5);
    } else {
        layer_Lac = mergeBooleanLayers(mergeBooleanLayers(layer_Lac_1, layer_Lac_5),layer_Lac_10);
    };
    if(dist_files.foret_files === "1km") {
        layer_Foret = layer_Frt_1;
    } else {
        layer_Foret = mergeBooleanLayers(layer_Frt_1,layer_Frt_5);
    };
    if(dist_files.etang_files === "1km") {
        layer_Etang = layer_Etng_1;
    } else {
        layer_Etang = mergeBooleanLayers(layer_Etng_1,layer_Etng_5);
    };
    if(dist_files.uni_files === "1km") {
        layer_Uni = layer_ecole_uni_1;
    } else {
        layer_Uni = mergeBooleanLayers(mergeBooleanLayers(layer_ecole_uni_1,layer_ecole_uni_5),layer_ecole_uni_10);
    };
    if(dist_files.village_files === "1km") {
        layer_village = layer_village_1;
    } else {
        layer_village = layer_village_5;
    };
    if(dist_files.ville_files === "5km") {
        layer_ville = layer_ville_5;
    } else {
        layer_ville = layer_ville_10;
    };

    // valeur d'importance du critère
    const x_values = importanceValue();
    const x_danger = Number(x_values.dangersfm_x);
    const x_lac = Number(x_values.lac_x);
    const x_foret = Number(x_values.foret_x);
    const x_etang = Number(x_values.etang_x);
    const x_ville = Number(x_values.ville_x);
    const x_village = Number(x_values.village_x);
    const x_prim = Number(x_values.prim_x);
    const x_uni = Number(x_values.uni_x);
    const x_gare = Number(x_values.gare_x);

    const mean_x = (x_danger + x_lac + x_foret + x_etang + x_ville + x_village + x_prim + x_uni + x_gare
    ) / 9;

    const sum = new Float32Array(layer_Avalanche.data.length);

    // Normalize values: treat nodata / invalid extremes as 0, and
    // convert any truthy raster values to boolean 1 (threshold > 0.5).
    for (let i = 0; i < layer_Avalanche.data.length; i++) {
        let v0 = layer_Frt_5.data[i];
        let v1 = layer_Avalanche.data[i];
        let v2 = layer_Chute_P.data[i];
        let v3 = layer_Crue.data[i];
        let v4 = layer_Effondre.data[i];
        let v5 = layer_G_perm.data[i];
        let v6 = layer_G_spon.data[i];
        let v7 = layer_Lave_torr.data[i];
        let v8 = layer_Lac.data[i];
        let v9 = layer_Foret.data[i];
        let v10 = layer_Etang.data[i];
        let v11 = layer_ville.data[i];
        let v12 = layer_village.data[i];
        let v13 = layer_ecole_prim.data[i];
        let v14 = layer_Uni.data[i];
        let v15 = layer_gare.data[i];

        // Guard against NaN, Infinity, or sentinel large negative values
        if (!Number.isFinite(v1) || Math.abs(v1) > 1e30) v1 = 0;
        if (!Number.isFinite(v2) || Math.abs(v2) > 1e30) v2 = 0;
        if (!Number.isFinite(v3) || Math.abs(v3) > 1e30) v3 = 0;
        if (!Number.isFinite(v4) || Math.abs(v4) > 1e30) v4 = 0;
        if (!Number.isFinite(v5) || Math.abs(v5) > 1e30) v5 = 0;
        if (!Number.isFinite(v6) || Math.abs(v6) > 1e30) v6 = 0;
        if (!Number.isFinite(v7) || Math.abs(v7) > 1e30) v7 = 0;
        if (!Number.isFinite(v8) || Math.abs(v8) > 1e30) v8 = 0;
        if (!Number.isFinite(v9) || Math.abs(v9) > 1e30) v9 = 0;
        if (!Number.isFinite(v10) || Math.abs(v10) > 1e30) v10 = 0;
        if (!Number.isFinite(v11) || Math.abs(v11) > 1e30) v11 = 0;
        if (!Number.isFinite(v12) || Math.abs(v12) > 1e30) v12 = 0;
        if (!Number.isFinite(v13) || Math.abs(v13) > 1e30) v13 = 0;
        if (!Number.isFinite(v14) || Math.abs(v14) > 1e30) v14 = 0;
        if (!Number.isFinite(v15) || Math.abs(v15) > 1e30) v15 = 0;

        // Some boolean rasters use 255 or other positive values for "true".
        v0 = v0 > 0.5 ? 1 : NaN;
        v1 = v1 > 0.5 ? 1 : NaN;
        v2 = v2 > 0.5 ? 1 : NaN;
        v3 = v3 > 0.5 ? 1 : NaN;
        v4 = v4 > 0.5 ? 1 : NaN;
        v5 = v5 > 0.5 ? 1 : NaN;
        v6 = v6 > 0.5 ? 1 : NaN;
        v7 = v7 > 0.5 ? 1 : NaN;
        v8 = v8 > 0.5 ? 1 : NaN;
        v9 = v9 > 0.5 ? 1 : NaN;
        v10 = v10 > 0.5 ? 1 : NaN;
        v11 = v11 > 0.5 ? 1 : NaN;
        v12 = v12 > 0.5 ? 1 : NaN;
        v13 = v13 > 0.5 ? 1 : NaN;
        v14 = v14 > 0.5 ? 1 : NaN;
        v15 = v15 > 0.5 ? 1 : NaN;

        // Start as no-data. Only set a numeric value if at least one
        // contributing raster cell is valid for this pixel.
        let acc = 0;
        let hasValue = false;

        if (Number.isFinite(v0)) { acc += 0 * 0 * v0; hasValue = true; } // neutral layer
        if (Number.isFinite(v1)) { acc += x_danger * r_danger * v1; hasValue = true; }
        if (Number.isFinite(v2)) { acc += x_danger * r_danger * v2; hasValue = true; }
        if (Number.isFinite(v3)) { acc += x_danger * r_danger * v3; hasValue = true; }
        if (Number.isFinite(v4)) { acc += x_danger * r_danger * v4; hasValue = true; }
        if (Number.isFinite(v5)) { acc += x_danger * r_danger * v5; hasValue = true; }
        if (Number.isFinite(v6)) { acc += x_danger * r_danger * v6; hasValue = true; }
        if (Number.isFinite(v7)) { acc += x_danger * r_danger * v7; hasValue = true; }
        if (Number.isFinite(v8)) { acc += x_lac * r_lac * v8; hasValue = true; }
        if (Number.isFinite(v9)) { acc += x_foret * r_foret * v9; hasValue = true; }
        if (Number.isFinite(v10)) { acc += x_etang * r_etang * v10; hasValue = true; }
        if (Number.isFinite(v11)) { acc += x_ville * r_ville * v11; hasValue = true; }
        if (Number.isFinite(v12)) { acc += x_village * r_village * v12; hasValue = true; }
        if (Number.isFinite(v13)) { acc += x_prim * r_prim * v13; hasValue = true; }
        if (Number.isFinite(v14)) { acc += x_uni * r_uni * v14; hasValue = true; }
        if (Number.isFinite(v15)) { acc += x_gare * r_gare * v15; hasValue = true; }

        sum[i] = hasValue ? acc : NaN;
    };
    console.log('Sum data sample:', sum.slice(1500, 2600));
    return {
        data: sum,
        width: layer_Avalanche.width,
        height: layer_Avalanche.height,
        bbox: layer_Avalanche.bbox, 
        mean_r: mean_x
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
    
    console.log("R_mean:", result.mean_r);
    console.log("dark red threshold:", (-10)*result.mean_r);
    console.log("blue threshold:", (8.5)*result.mean_r);

    for (let i = 0; i < result.data.length; i++) {
        const v = result.data[i]; // 0,1,2
        const idx = i * 4;

        img.data[idx]     = 0; // R
        img.data[idx + 1] = 0; // G
        img.data[idx + 2] = 0; // B

        if (!Number.isFinite(v)) {
            img.data[idx + 3] = 0;
        }else if (v < (-9)*result.mean_r) {
            img.data[idx]     = 150;
            img.data[idx + 1] = 0;
            img.data[idx + 2] = 0; // dark red
            img.data[idx + 3] = 180;
        } else if (v < (-5)*result.mean_r) {
            img.data[idx]     = 255;
            img.data[idx + 1] = 0;
            img.data[idx + 2] = 0; // red
            img.data[idx + 3] = 180;
        } else if (v < (-1.5)*result.mean_r) {
            img.data[idx]     = 255;
            img.data[idx + 1] = 150;
            img.data[idx + 2] = 0; // orange
            img.data[idx + 3] = 180;
        } else if (v  < (0.5)*result.mean_r) {
            img.data[idx]     = 255;
            img.data[idx + 1] = 255;
            img.data[idx + 2] = 0; // yellow
            img.data[idx + 3] = 180;
        } else if (v < (3.5)*result.mean_r) {
            img.data[idx]     = 0;
            img.data[idx + 1] = 255;
            img.data[idx + 2] = 0; // green
            img.data[idx + 3] = 180;
        } else if (v < (7.5)*result.mean_r){
            img.data[idx]     = 0;
            img.data[idx + 1] = 255;
            img.data[idx + 2] = 255; // light blue
            img.data[idx + 3] = 180;
        } else {
            img.data[idx]     = 0;
            img.data[idx + 1] = 0;
            img.data[idx + 2] = 255; // blue
            img.data[idx + 3] = 180;
        };
    };
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
    'Data/Incitation/Nature/Lac_1km_WGS_boolean_v2.tif',
    'Data/Incitation/Nature/Lac_5km_WGS_boolean_v2.tif',
    'Data/Incitation/Nature/Lac_10km_WGS_boolean.tif', //13
    'Data/Incitation/Social/ville_5km_WGS_boolean.tif',
    'Data/Incitation/Social/ville_10km_WGS_boolean.tif',
    'Data/Incitation/Social/village_1km_WGS_boolean.tif',
    'Data/Incitation/Social/village_5km_WGS_boolean.tif',
    'Data/Incitation/Social/ecole_prim_co_1km_WGS_boolean.tif',
    'Data/Incitation/Social/ecole_coll_uni_1km_WGS_boolean.tif',
    'Data/Incitation/Social/ecole_coll_uni_5km_WGS_boolean.tif', 
    'Data/Incitation/Social/ecole_coll_uni_10km_WGS_boolean.tif',
    'Data/Incitation/Social/Gare_1km_WGS_boolean.tif' //22
]) {
    const result = await sumBooleanTiffs(
        files_url[0], files_url[1], files_url[2], files_url[3], files_url[4],
        files_url[5], files_url[6], files_url[7], files_url[8],
        files_url[9], files_url[10], files_url[11], files_url[12],
        files_url[13], files_url[14], files_url[15], files_url[16],
        files_url[17], files_url[18], files_url[19], files_url[20],
        files_url[21], files_url[22]
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
    console.log("finally adding summed layer");
    currentLayer.addTo(map);
};

async function loadMap() {
    exclusionLayer.forEach(layer => {
            map.removeLayer(layer);
        });
    frLayer.forEach(layer => {
            map.removeLayer(layer);
        });
    sumLayer.forEach(layer => {
            map.removeLayer(layer);
        });
    sumLayer = [];
    exclusionLayer = [];
    frLayer = [];
    await addSummedLayer();
    exclusionlayer();
    frlayer();
};
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
        // ✅ REMOVE EACH LAYER
        exclusionLayer.forEach(layer => {
            map.removeLayer(layer);
        });
        exclusionLayer = [];
    }
};

function frlayer() {
    const frlayerCheckbox = document.getElementById('frlayer');
    if (frlayerCheckbox.checked) {
        addLayer("frlayer",'Data/Canton_WGS.tif', "greys", 1, 1, 30);
    } else {
        frLayer.forEach(layer => {
            map.removeLayer(layer);
        });
        frLayer = [];
    }
};

function zoomresetMap() {
    map.setView([46.75, 7.08], 10);
};

function InfoIn(){
    document.getElementById('informations').style.display = "flex";
};

function InfoOut(){
    document.getElementById('informations').style.display = "none";
}

// Popup hover event listeners
const popupElements = document.querySelectorAll('.popup');
popupElements.forEach(popup => {
    popup.addEventListener('mouseenter', function() {
        const popupText = this.querySelector('.popuptext');
        if (popupText) {
            popupText.style.visibility = 'visible';
        }
    });
   
    popup.addEventListener('mouseleave', function() {
        const popupText = this.querySelector('.popuptext');
        if (popupText) {
            popupText.style.visibility = 'hidden';
        }
    });
});

console.log("Main JS loaded");


console.log("Main JS loaded");