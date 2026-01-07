// HERE 1

async function loadRaster(url) {
    const tiff = await GeoTIFF.fromUrl(url);
    const image = await tiff.getImage();

    const width = image.getWidth();
    const height = image.getHeight();

    if (!Number.isInteger(width) || !Number.isInteger(height)) {
        throw new Error('Invalid raster dimensions');
    }

    const data = await image.readRasters({ interleave: true });

    return {
        data,
        width,
        height,
        bbox: image.getBoundingBox() ?? [
            image.getOrigin()[0],
            image.getOrigin()[1] - height * image.getResolution()[1],
            image.getOrigin()[0] + width * image.getResolution()[0],
            image.getOrigin()[1]
        ]
    };
;}

async function sumBooleanTiffs(url_lac, url_foret, url_etang, url_ville, url_village, url_primaire, url_uni) {
    const r1 = await loadRaster(url_lac);
    const r2 = await loadRaster(url_foret);
    const r3 = await loadRaster(url_etang);
    const r4 = await loadRaster(url_ville);
    const r5 = await loadRaster(url_village);
    const r6 = await loadRaster(url_primaire);
    const r7 = await loadRaster(url_uni);


    // HERE ICI


    if (r1.width !== r2.width || r1.height !== r2.height) {
        throw new Error("GeoTIFF dimensions do not match");
    }

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
    'Data/Incitation/Nature/Etang_1km_WGS_boolean.tif',
    'Data/Incitation/Nature/Foret_grd_1km_WGS_boolean.tif']) {
    const result = await sumBooleanTiffs(
        files_url[0],
        files_url[1]
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







            <div id="legend">
                <div id="couleurlegend">
                    <div id="darkred"></div>
                    <div id="red"></div>
                    <div id="orange"></div>
                    <div id="yellow"></div>
                    <div id="green"></div>
                    <div id="lightblue"></div>
                    <div id="blue"></div>
                    <div id="black"></div>
                    <div id="blackCont"></div>
                </div>
                <div id="explicationlegend" class="LegendText"> 
                    <p data-i18n="compat_horr"></p>
                    <p data-i18n="compat_t_nul"></p>
                    <p data-i18n="compat_nul"></p>
                    <p data-i18n="compat_mid"></p>
                    <p data-i18n="compat_bien"></p>
                    <p data-i18n="compat_t_bien"></p>
                    <p data-i18n="compat_top"></p>
                    <p data-i18n="non_construction"></p>
                    <p data-i18n="ctn_frib"></p>
                </div>
            </div>