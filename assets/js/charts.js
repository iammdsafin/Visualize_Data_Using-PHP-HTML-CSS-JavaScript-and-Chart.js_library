function showPlanetInformation(selectedProperty) {
    fetch("fetchplanetdata.php")
        .then((response) => response.json())
        .then((planetData) => {
            const processedData = forSelectedPropertyTemperature(planetData, selectedProperty);
            displayPlanetInformationChart(selectedProperty, Object.values(processedData), Object.keys(processedData));
            //console.log(planetData);
            //console.log(processedData);
        })
        .catch((error) => console.error(error));
    //console.log(selectedProperty);
}

function forSelectedPropertyTemperature(planetData, selectedProperty) {
    const processedData = {};
    for (const planetName in planetData) {
        let propertyValue = planetData[planetName][selectedProperty];
        if (selectedProperty === 'temperature') {
            propertyValue = parseFloat(propertyValue.replace('°C', ''));
            //console.log(propertyValue);
        }
        processedData[planetName] = propertyValue;
    }
    //console.log(processedData);
    return processedData;
}

function displayPlanetInformationChart(planetProperty, planetPropertyData, planetName) {
    const planetInfo = document.getElementById("planet-information");
    planetInfo.innerHTML =
        `<div class="planet-data chart-container">
            <canvas id="${planetProperty}" width="800" height="800"></canvas>
        </div>`;

    const dataObject = {};
    for (let i = 0; i < planetName.length; i++) {
        dataObject[planetName[i]] = planetPropertyData[i];
    }

    switch (planetProperty) {
        case 'gravity':
            showGravityChart(planetProperty, dataObject);
            break;
        case 'temperature':
            showTemperatureChart(planetProperty, dataObject);
            break;
        case 'orbit_days':
            showOrbitChart(planetProperty, dataObject);
            break;
        case 'human_population':
            showPopulationChart(planetProperty, dataObject);
            break;
        default:
            console.error();
    }
    planetInfo.style.display = "block";
}


//---------------------------------Bar Chart for Gravity Start---------------------------------//
function showGravityChart(canvasId, data) {
    const showChart = document.getElementById(canvasId).getContext("2d");
    new Chart(showChart, {
        type: 'bar',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: "#8F192D",
                borderColor: "#ffffff",
                borderWidth: 5,
            }]
        },

        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Gravity of Different Planets',
                    font: {
                        size: 30,
                        family: 'monospace'
                    },
                    color: 'White',
                    padding: {
                        top: 100,
                        bottom: 50
                    }
                },
                legend: {
                    display: false
                }
            },

            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Gravity (m/s²)",
                        font: {
                            size: 20,
                            family: "monospace",
                        },
                        color: 'White'
                    },
                    ticks: {
                        font: {
                            size: 20,
                            family: 'monospace'
                        },
                        color: 'White'
                    }
                },

                x: {
                    title: {
                        display: true,
                        text: "Planet's Name",
                        font: {
                            size: 20,
                            family: "monospace",
                        },
                        color: 'White'
                    },
                    ticks: {
                        font: {
                            size: 20,
                            family: 'monospace'
                        },
                        color: 'White'
                    }
                },
            },
        }
    });
}
//---------------------------------Bar Chart for Gravity End------------------------------------//


//------------------------------Line Chart for Temperature Start--------------------------------//
function showTemperatureChart(canvasId, data) {
    const showChart = document.getElementById(canvasId).getContext("2d");
    new Chart(showChart, {
        type: 'line',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: "#ff0000",
                borderColor: "#ff0000",
                borderWidth: 3
            }]
        },

        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Temperature of Different Planets',
                    font: {
                        size: 30,
                        family: 'monospace'
                    },
                    color: 'White',
                    padding: {
                        top: 100,
                        bottom: 50
                    }
                },
                legend: {
                    display: false
                }
            },

            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Temperature (°C)",
                        font: {
                            size: 20,
                            family: "monospace",
                        },
                        color: 'White'
                    },
                    ticks: {
                        font: {
                            size: 20,
                            family: 'monospace'
                        },
                        color: 'White'
                    }
                },

                x: {
                    title: {
                        display: true,
                        text: "Planet's Name",
                        font: {
                            size: 20,
                            family: "monospace",
                        },
                        color: 'White'
                    },
                    ticks: {
                        font: {
                            size: 20,
                            family: 'monospace'
                        },
                        color: 'White'
                    }
                },
            },
        }
    });
}
//------------------------------Line Chart for Temperature End--------------------------------//



//-------------------------------Pie Chart for Orbit (Days )Start------------------------------//
function showOrbitChart(canvasId, data) {
    const showChart = document.getElementById(canvasId).getContext("2d");
    new Chart(showChart, {
        type: 'pie',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#ffcd56',
                    '#4bc0c0',
                    '#9966ff'
                ],
                borderColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#ffcd56',
                    '#4bc0c0',
                    '#9966ff'
                ],
                borderWidth: 5
            }]
        },

        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Orbit Days of Different Planets',
                    font: {
                        size: 30,
                        family: 'monospace'
                    },
                    color: 'White',
                    padding: {
                        top: 100,
                        bottom: 50
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 20,
                            family: 'monospace'
                        },
                        color: 'White',
                        padding: 35
                    }
                }
            },
        }
    });
}
//-------------------------------Pie Chart for Orbit (Days )End--------------------------------//