const image = document.getElementById("image");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", { antialias: false });

(async () => {
    await image.decode();
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    const cubeFileText = await getCubeFileText("LUT/Cinematic-1.cube");
    const lutData = parseCubeFile(cubeFileText);
    const { redTable, greenTable, blueTable } = convert3DLutTo1DTables(lutData);
    const lutData1D = [redTable, greenTable, blueTable];
    const lutFilter = createSvgLUTFilterFromLutData(lutData1D);
    ctx.filter = lutFilter;
    ctx.drawImage(image, 0, 0);
})();

async function getCubeFileText(url) {
    const response = await fetch(url);
    const text = await response.text();
    return text;
}

function createSvgLUTFilterFromLutData(lutData) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");

    const filter = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "filter"
    );
    filter.setAttribute("id", "lutFilter");

    const feComponentTransfer = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "feComponentTransfer"
    );

    const feFuncR = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "feFuncR"
    );
    const feFuncG = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "feFuncG"
    );
    const feFuncB = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "feFuncB"
    );

    [feFuncR, feFuncG, feFuncB].forEach((func, i) => {
        func.setAttribute("type", "table");
        func.setAttribute("tableValues", lutData[i].join(" "));
    });

    feComponentTransfer.appendChild(feFuncR);
    feComponentTransfer.appendChild(feFuncG);
    feComponentTransfer.appendChild(feFuncB);
    filter.appendChild(feComponentTransfer);
    svg.appendChild(filter);

    document.body.appendChild(svg);
    return `url(#lutFilter)`;
}

const parseCubeFile = (fileContent) => {
    const lines = fileContent.split("\n");
    let size = 0;
    const lutData = [];
    let readingData = false;

    for (let line of lines) {
        line = line.trim();

        // Skip comments and empty lines
        if (line.startsWith("#") || line === "") continue;

        // Parse LUT size
        if (line.startsWith("LUT_3D_SIZE")) {
            size = Number.parseInt(line.split(" ")[1]);
            continue;
        }

        // Start reading data
        if (line.match(/^[0-9]/) || readingData) {
            readingData = true;
            const values = line.split(/\s+/).map(Number);
            if (values.length >= 3) {
                lutData.push({
                    r: values[0],
                    g: values[1],
                    b: values[2],
                });
            }
        }
    }

    return {
        size,
        data: lutData,
    };
};

const convert3DLutTo1DTables = (lutData) => {
    // This is a simplified conversion - a true 3D LUT can't be perfectly
    // represented by 1D tables, but we can approximate it

    // For a proper implementation, we would need to sample the 3D LUT
    // at regular intervals for each channel

    const size = lutData.size;
    const data = lutData.data;

    // Create simplified 1D tables by sampling along the diagonal of the cube
    // (where R=G=B, representing grayscale values)
    const numSamples = 7; // Number of samples for our 1D LUT
    const redTable = [];
    const greenTable = [];
    const blueTable = [];

    for (let i = 0; i < numSamples; i++) {
        const t = i / (numSamples - 1); // 0 to 1

        // Find the closest point in the 3D LUT
        const index = Math.floor(t * (size * size * size - 1));
        if (index < data.length) {
            redTable.push(data[index].r);
            greenTable.push(data[index].g);
            blueTable.push(data[index].b);
        }
    }

    return { redTable, greenTable, blueTable };
};
