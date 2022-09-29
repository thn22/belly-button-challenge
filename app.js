const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

    d3.json(url).then(data => {
        console.log(data);
        let ids = data.samples[0].otu_ids;
        console.log(ids);
        let sampleVals = data.samples[0].sample_values.slice(0, 10).reverse();
        console.log(sampleVals);
        let labels = data.samples[0].otu_labels.slice(0, 10);
        console.log(labels);

        let otuTop = (data.samples[0].otu_ids.slice(0, 10)).reverse();
        console.log(otuTop);

        let otuID = otuTop.map(i => "OTU " + i);
        console.log(`OTU IDs: ${otuID}`);


        let trace1 = {
            x: sampleVals,
            y: otuID,
            text: labels,
            orientation: 'h',
            type: 'bar'
        };

        let traceData = [trace1];

        let layout = {
            title: "Top 10 OTUs Found"
        };
        Plotly.newPlot("bar", traceData, layout);

        let trace2 = {
            x: data.samples[0].otu_ids,
            y: data.samples[0].sample_values,
            mode: 'markers',
            marker: {
                size: data.samples[0].sample_values,
                color: data.samples[0].otu_ids
            },
            text: data.samples[0].otu_labels
        };

        let traceData2 = [trace2];

        let layout2 = {
            xaxis: {title: "OTU IDs"},
        };

        Plotly.newPlot('bubble', traceData2, layout2);
    });

    d3.json(url).then(data => {
        let metaData = data.metadata;
        console.log('metadata:', metaData);

        let refined = metaData.filter(meta => meta.id.toString() === id)[0];
        console.log(refined)
        let demo = d3.select('#sample-metadata');
        demo.html("");
        Object.entries(result).forEach((key) => {
            demo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
        });
    });