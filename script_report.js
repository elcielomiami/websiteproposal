// --- Basic Authentication --- 
(function() {
    const correctUser = 'elcielo';
    // WARNING: This password is visible in the source code!
    const correctPass = 'miami2025'; 

    let enteredUser = prompt('Username:');
    let enteredPass = prompt('Password:');

    if (enteredUser !== correctUser || enteredPass !== correctPass) {
        alert('Access Denied');
        // Hide page content if authentication fails
        document.addEventListener('DOMContentLoaded', function() {
            if (document.body) {
                 document.body.style.display = 'none';
            }
        });
        // Stop further script execution if possible (though hiding body is primary)
        throw new Error("Authentication failed"); 
    }
})(); // Immediately invoke the function

document.addEventListener('DOMContentLoaded', () => {
    console.log("Report Script Loaded");

    // --- Competitive Landscape Charts ---    
    const competitorPositioningMapCtx = document.getElementById('positioningMap')?.getContext('2d');
    if (competitorPositioningMapCtx) {
        new Chart(competitorPositioningMapCtx, {
            type: 'scatter',
            data: {
                datasets: [
                    { label: 'Elcielo D.C.', data: [{x: 7, y: 8}], backgroundColor: 'red', pointRadius: 8 },
                    { label: 'Minibar', data: [{x: 9, y: 9}], backgroundColor: 'blue', pointRadius: 6 },
                    { label: 'Jônt', data: [{x: 8.5, y: 9.5}], backgroundColor: 'green', pointRadius: 6 },
                    { label: 'The Dabney', data: [{x: 6, y: 7}], backgroundColor: 'purple', pointRadius: 6 },
                    { label: 'Roses Luxury', data: [{x: 5, y: 7.5}], backgroundColor: 'orange', pointRadius: 6 },
                    // Add other competitors
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Competitor Positioning Map (Illustrative)'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.x !== null) {
                                    label += `(Price/Exclusivity: ${context.parsed.x}, Perceived Quality/Hype: ${context.parsed.y})`;
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Price Perception / Exclusivity'
                        },
                        min: 0,
                        max: 10
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Perceived Quality / Hype'
                        },
                         min: 0,
                        max: 10
                    }
                }
            }
        });
    }

    const competitorRadarChartCtx = document.getElementById('radarChart')?.getContext('2d');
    if (competitorRadarChartCtx) {
        new Chart(competitorRadarChartCtx, {
            type: 'radar',
            data: {
                labels: ['Cuisine Innovation', 'Service', 'Ambiance', 'Value', 'Booking Ease', 'Online Buzz'],
                datasets: [
                    { label: 'Elcielo D.C.', data: [8, 7, 9, 6, 5, 8], fill: true, backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgb(255, 99, 132)', pointBackgroundColor: 'rgb(255, 99, 132)' },
                    { label: 'Competitor Avg (Top Tier)', data: [9, 9, 8, 8, 9, 9], fill: true, backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgb(54, 162, 235)', pointBackgroundColor: 'rgb(54, 162, 235)' }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Competitor Attribute Comparison (Illustrative)'
                    }
                },
                scales: {
                    r: {
                        angleLines: { display: true },
                        suggestedMin: 0,
                        suggestedMax: 10
                    }
                }
            }
        });
    }

    // --- D.C. Diner Behavior Analysis Charts --- 
    const weekdayWeekendChartCtx = document.getElementById('weekdayWeekendChart')?.getContext('2d');
    if (weekdayWeekendChartCtx) {
        new Chart(weekdayWeekendChartCtx, {
            type: 'bar',
            data: {
                labels: ['Mon-Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Reported Fine Dining Preference % (Illustrative)',
                    data: [15, 30, 65, 75, 40], // Example data
                    backgroundColor: 'rgba(75, 192, 192, 0.6)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Weekday vs. Weekend Dining Preference'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Preference Index / % Diners' }
                    }
                }
            }
        });
    }

    const decisionFactorsChartCtx = document.getElementById('decisionFactorsChart')?.getContext('2d');
    if (decisionFactorsChartCtx) {
        new Chart(decisionFactorsChartCtx, {
            type: 'bar',
            data: {
                labels: ['Cuisine/Quality', 'Value', 'Social Proof/Hype', 'Location', 'Chef', 'Ambiance', 'Booking Ease'],
                datasets: [{
                    label: 'Importance Ranking (1=Highest)',
                    data: [1, 2, 3, 4, 5, 6, 7], // Example ranking data
                    backgroundColor: 'rgba(153, 102, 255, 0.6)'
                }]
            },
            options: {
                indexAxis: 'y', // Horizontal bar chart
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Diner Decision-Making Factors (Ranked)'
                    },
                    legend: { display: false }
                },
                scales: {
                    x: {
                        reverse: true, // Higher rank (lower number) is better
                        beginAtZero: true,
                        title: { display: true, text: 'Rank (Lower is More Important)' }
                    }
                }
            }
        });
    }
    
    const seasonalityChartCtx = document.getElementById('seasonalityChart')?.getContext('2d');
    if (seasonalityChartCtx) {
        new Chart(seasonalityChartCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Estimated Fine Dining Demand Index',                    
                    data: [60, 65, 75, 85, 90, 80, 70, 75, 85, 95, 100, 80], // Example data
                    borderColor: 'rgb(255, 159, 64)',
                    tension: 0.1
                }]
            },
             options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Seasonal Demand Fluctuations (Illustrative)'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Demand Index' }
                    }
                }
            }
        });
    }
    
    const bookingPatternsChartCtx = document.getElementById('bookingPatternsChart')?.getContext('2d');
    if (bookingPatternsChartCtx) {
        new Chart(bookingPatternsChartCtx, {
            type: 'doughnut',
            data: {
                labels: ['Same Week', '1-2 Weeks Out', '2-4 Weeks Out', '1 Month+ Out'],
                datasets: [{
                    label: 'Booking Lead Time',                    
                    data: [30, 45, 15, 10], // Example data
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)'
                    ],
                    hoverOffset: 4
                }]
            },
             options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Typical Booking Lead Times'
                    }
                }
            }
        });
    }

    // --- Price Sensitivity --- 
    const priceSensitivityHeatmapCtx = document.getElementById('priceSensitivityHeatmap')?.getContext('2d');
    if (priceSensitivityHeatmapCtx) {
        new Chart(priceSensitivityHeatmapCtx, {
            type: 'scatter',
            data: {
                datasets: [
                    { label: 'Elcielo D.C.', data: [{x: 250, y: 4.1}], backgroundColor: 'red', pointRadius: 8 }, 
                    { label: 'Minibar', data: [{x: 335, y: 4.5}], backgroundColor: 'blue', pointRadius: 6 }, 
                    { label: 'Jônt', data: [{x: 300, y: 4.5}], backgroundColor: 'green', pointRadius: 6 }, 
                    { label: 'The Dabney', data: [{x: 125, y: 4.3}], backgroundColor: 'purple', pointRadius: 6 }, 
                    { label: 'Roses Luxury', data: [{x: 100, y: 4.5}], backgroundColor: 'orange', pointRadius: 6 }, 
                    { label: 'Imperfecto', data: [{x: 200, y: 3.8}], backgroundColor: 'cyan', pointRadius: 6 }, 
                    { label: 'Cranes', data: [{x: 150, y: 4.3}], backgroundColor: 'magenta', pointRadius: 6 }, 
                    { label: 'Bresca', data: [{x: 125, y: 4.2}], backgroundColor: 'yellow', pointRadius: 6 }, 
                    { label: 'Pineapple & Pearls', data: [{x: 250, y: 4.4}], backgroundColor: 'lime', pointRadius: 6 }, 
                    { label: 'Rooster & Owl', data: [{x: 95, y: 4.5}], backgroundColor: 'grey', pointRadius: 6 } 
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Chart 6: Price Point vs. Perceived Value (Yelp Rating)'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) { label += ': '; }
                                if (context.parsed.x !== null && context.parsed.y !== null) {
                                    label += `(~$${context.parsed.x}, ${context.parsed.y}★ Yelp)`;
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Approximate Price Per Person ($)'
                        },
                        min: 50,
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Average Yelp Rating (★)'
                        },
                         min: 3.5,
                         max: 5
                    }
                }
            }
        });
    }

    // --- Elcielo Perception Analysis Charts --- 
    const ratingsComparisonChartCtx = document.getElementById('ratingsComparisonChart')?.getContext('2d');
    if (ratingsComparisonChartCtx) {
         new Chart(ratingsComparisonChartCtx, {
            type: 'bar',
            data: {
                labels: ['Yelp', 'TripAdvisor', 'Google (Est.)'],
                datasets: [
                    { label: 'Elcielo D.C.', data: [4.1, 3.7, 4.0], backgroundColor: 'rgba(255, 99, 132, 0.6)' },
                    { label: 'Top Competitor Avg.', data: [4.4, 4.5, 4.6], backgroundColor: 'rgba(54, 162, 235, 0.6)' }
                ]
            },
             options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Platform Rating Comparison'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 3.0,
                        max: 5.0,
                        title: { display: true, text: 'Average Rating' }
                    }
                }
            }
        });
    }
    
    // --- Word Cloud --- NOTE: Now using d3-cloud
    function drawWordCloud(containerElement, words) { 
        if (!containerElement) {
            console.error("Word cloud container element not provided");
            return;
        }
        containerElement.innerHTML = ''; // Clear previous cloud if any

        const width = containerElement.clientWidth || 500; // Use container width or default
        const height = 300; // Fixed height

        // Define a professional grayscale color scale
        const colorScale = d3.scaleLinear()
                             .domain([0, 1]) // Input range for random value
                             .range(["#999999", "#111111"]); // Output range (medium gray to near black)

        // Find max frequency for font size scaling
        const maxFrequency = d3.max(words, d => d.frequency);
        const minFrequency = d3.min(words, d => d.frequency) || 1; // Avoid division by zero if all frequencies are 0
        const fontSizeScale = d3.scaleSqrt() // Using square root scale for less extreme size differences
                               .domain([minFrequency, maxFrequency])
                               .range([12, 55]); // Min/max font size (adjust as needed)

        const layout = d3.layout.cloud()
            .size([width, height])
            // Ensure input words have frequency for size calculation
            .words(words.map(d => ({ text: d.text, size: fontSizeScale(d.frequency || 1) })))
            .padding(5)
            // Limit rotation: Mostly horizontal, occasional 90 degrees
            .rotate(() => (Math.random() < 0.9 ? 0 : 90))
            .font("Arial, sans-serif") // Using a more standard font
            .fontSize(d => d.size)
            .on("end", draw);

        layout.start();

        function draw(mappedWords) {
            d3.select(containerElement).append("svg") // Use the passed containerElement
                .attr("width", layout.size()[0])
                .attr("height", layout.size()[1])
                .append("g")
                .attr("transform", `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`)
                .selectAll("text")
                .data(mappedWords)
                .enter().append("text")
                .style("font-size", d => `${d.size}px`)
                .style("font-family", "Arial, sans-serif") // Match font used in layout
                // Apply the grayscale color scale using a random value for variation
                .style("fill", () => colorScale(Math.random()))
                .attr("text-anchor", "middle")
                .attr("transform", d => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
                .text(d => d.text);
        }
    }

    // --- Call Word Cloud --- 
    const wordCloudElement = document.getElementById('wordCloud'); // Declare only ONCE here
    if (wordCloudElement && typeof d3 !== 'undefined' && typeof d3.layout !== 'undefined' && typeof d3.layout.cloud !== 'undefined') {
        // Actual word data with frequencies
        const wordData = [
            { text: 'experiencia', frequency: 28 },
            { text: 'valor', frequency: 22 },
            { text: 'precio', frequency: 20 },
            { text: 'servicio', frequency: 18 },
            { text: 'menú', frequency: 16 },
            { text: 'único', frequency: 15 },
            { text: 'chocolate', frequency: 14 }, // 'chocoterapia'
            { text: 'lento', frequency: 12 }, // 'pacing', 'slow'
            { text: 'ambiente', frequency: 11 },
            { text: 'reserva', frequency: 10 }, // 'booking'
            { text: 'colombiano', frequency: 9 },
            { text: 'Michelin', frequency: 8 },
            { text: 'mejorable', frequency: 7 }, // 'underwhelming', 'consistency'
            { text: 'platos', frequency: 6 },
            { text: 'innovador', frequency: 5 }
        ];
        drawWordCloud(wordCloudElement, wordData); // Call the function with the element and data
    } else {
         if (!wordCloudElement) {
            console.error("wordCloud element not found");
         } else {
             console.error("D3 or d3-cloud library not found or loaded correctly.");
             wordCloudElement.innerHTML = "Error al cargar la biblioteca de visualización (D3/d3-cloud)." 
         }
    }


    // Chart 9: Occupancy Factor Model (Placeholder/Simple Bar Chart)
    const occupancyFactorModelCtx = document.getElementById('occupancyFactorModel')?.getContext('2d');
     if (occupancyFactorModelCtx) {
        new Chart(occupancyFactorModelCtx, {
            type: 'bar',
            data: {
                labels: ['Value Perception', 'Booking Ease', 'Competition', 'Seasonality', 'Marketing', 'Service Consistency', 'Unique Concept'],
                datasets: [{
                    label: 'Estimated Impact Weight (Illustrative)',
                    data: [25, 20, 18, 12, 10, 8, 7], // Example weights
                    backgroundColor: 'rgba(255, 159, 64, 0.6)'
                }]
            },
            options: {
                indexAxis: 'y', 
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Weighted Occupancy Driver Model'
                    },
                     legend: { display: false }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: { display: true, text: 'Impact Weight (%)' }
                    }
                }
            }
        });
    }

    const correlationMatrixCtx = document.getElementById('correlationMatrix')?.getContext('2d');
    if (correlationMatrixCtx) {
        new Chart(correlationMatrixCtx, {
            type: 'bar',
            data: {
                labels: ['Value Perception', 'Quality/Concept', 'Social Proof/Buzz', 'Ease of Booking', 'Location/Convenience', 'Chef Reputation'],
                datasets: [{
                    label: 'Hypothesized Impact on Occupancy',
                    data: [5, 5, 4, 4, 3, 3], // Assigning relative scores: 5=High, 4=Medium, 3=Moderate/Lower
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)', 
                        'rgba(54, 162, 235, 0.6)', 
                        'rgba(255, 206, 86, 0.6)', 
                        'rgba(75, 192, 192, 0.6)', 
                        'rgba(153, 102, 255, 0.6)', 
                        'rgba(255, 159, 64, 0.6)'  
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y', 
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Chart 10: Hypothesized Impact of Drivers on Elcielo D.C. Occupancy'
                    },
                    legend: { display: false } 
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Relative Impact Strength (1-5)'
                        },
                        beginAtZero: true,
                        max: 5
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    const occupancyFluctuationsChartCtx = document.getElementById('occupancyFluctuationsChart')?.getContext('2d');
     if (occupancyFluctuationsChartCtx) {
        new Chart(occupancyFluctuationsChartCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                 {
                    label: 'Estimated Weekend Occupancy %',
                    data: [75, 80, 85, 90, 90, 85, 80, 80, 85, 90, 95, 85], 
                    borderColor: 'rgb(54, 162, 235)',
                    tension: 0.1
                 },
                 {
                    label: 'Estimated Midweek Occupancy %',
                    data: [50, 55, 60, 65, 60, 55, 50, 50, 60, 65, 70, 60], 
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                 }
                ]
            },
             options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Estimated Occupancy Fluctuations (Weekday vs. Weekend)'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: { display: true, text: 'Occupancy %' }
                    }
                }
            }
        });
    }

    const paretoChartCtx = document.getElementById('paretoChart')?.getContext('2d');
     if (paretoChartCtx) {
         const issues = ['Value Perception', 'Booking Friction', 'Competition', 'Inconsistency', 'Pacing', 'Other'];
         const issueImpact = [45, 25, 15, 8, 5, 2]; 
         let cumulativeImpact = 0;
         const cumulativeData = issueImpact.map(d => cumulativeImpact += d);

        new Chart(paretoChartCtx, {
            type: 'bar',
            data: {
                labels: issues,
                datasets: [
                    {
                        label: 'Issue Impact %',
                        data: issueImpact,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        yAxisID: 'y'
                    },
                    {
                        label: 'Cumulative Impact %',
                        data: cumulativeData,
                        borderColor: 'rgb(255, 99, 132)',
                        type: 'line',
                        tension: 0,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Pareto Analysis of Occupancy Issues (Illustrative)'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        type: 'linear',
                        display: true,
                        position: 'left',
                         title: { display: true, text: 'Individual Impact %' }
                    },
                    y1: {
                         beginAtZero: true,
                        type: 'linear',
                        display: true,
                        position: 'right',
                        max: 100,
                        grid: {
                            drawOnChartArea: false, 
                        },
                         title: { display: true, text: 'Cumulative Impact %' }
                    }
                }
            }
        });
    }

    // --- Occupancy Factor Analysis Charts --- 

    // Chart 10: Hypothesized Impact of Occupancy Drivers (Horizontal Bar Chart)
    const occupancyDriverImpactCtx = document.getElementById('occupancyDriverImpactChart')?.getContext('2d'); 
    if (occupancyDriverImpactCtx) {
        new Chart(occupancyDriverImpactCtx, {
            type: 'bar', // Changed back to 'bar' for horizontal display via indexAxis
            data: {
                labels: [
                    'Visibilidad (Plataformas Reserva, SEO)', 
                    'Propuesta de Valor (Menú, Precio)', 
                    'Experiencia del Comensal (Ritmo, Servicio)', 
                    'Facilidad de Reserva (Plataforma Actual)', 
                    'Reputación/Marketing (Reseñas, Redes)',
                    'Competencia (-)','Sensibilidad Precio (-)'
                ],
                datasets: [{
                    label: 'Impacto Positivo Estimado en Ocupación (%)',
                    // Sample Data - REPLACE WITH ACTUAL ESTIMATES
                    data: [25, 20, 15, 12, 10, -5, -8], 
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.7)', 
                        'rgba(75, 192, 192, 0.7)', 
                        'rgba(75, 192, 192, 0.7)', 
                        'rgba(75, 192, 192, 0.7)', 
                        'rgba(75, 192, 192, 0.7)', 
                        'rgba(255, 99, 132, 0.7)', // Negative impact 
                        'rgba(255, 99, 132, 0.7)'  // Negative impact
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y', // Makes the bar chart horizontal
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Cambio Estimado en Ocupación (%)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false // Hide legend as label is descriptive
                    },
                    title: {
                        display: true,
                        text: 'Impacto Estimado de Impulsores en Ocupación'
                    }
                }
            }
        });
    }


    // --- Sentiment Analysis Charts --- 

    // Chart 7: Overall Sentiment Comparison (Bar Chart)
    const sentimentComparisonChartCtx = document.getElementById('sentimentComparisonChart')?.getContext('2d');
    if (sentimentComparisonChartCtx) {
        new Chart(sentimentComparisonChartCtx, {
            type: 'bar',
            data: {
                labels: ['Elcielo D.C.', 'Competitor 1', 'Competitor 2', 'Competitor 3'],
                datasets: [{
                    label: 'Average Sentiment Score (Illustrative)',
                    data: [4.2, 4.0, 4.1, 3.9], // Example sentiment scores
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)', // Red
                        'rgba(54, 162, 235, 0.6)', // Blue
                        'rgba(255, 206, 86, 0.6)', // Yellow
                        'rgba(75, 192, 192, 0.6)' // Green
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Chart 7: Overall Sentiment Comparison'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Average Sentiment Score' }
                    }
                }
            }
        });
    }

    // --- Recommendations Charts --- 
    const roiChartCtx = document.getElementById('roiChart')?.getContext('2d');
    if (roiChartCtx) {
        new Chart(roiChartCtx, {
            type: 'line',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4 (Projection)'],
                datasets: [
                    {
                        label: 'Projected Occupancy Rate Increase (%)',
                        data: [0, 5, 10, 15], 
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Estimated Cumulative ROI (%)',
                        data: [0, 50, 120, 200], 
                        borderColor: 'rgb(153, 102, 255)',
                        tension: 0.1,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Projected ROI and Occupancy Impact of Recommendations'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: { display: true, text: 'Occupancy Increase (%)' }
                    },
                    y1: {
                        beginAtZero: true,
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: { display: true, text: 'Cumulative ROI (%)' },
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        });
    }

    // --- Sentiment Analysis Chart (Example - Modify as needed) ---
    const sentimentCtx = document.getElementById('sentimentChart')?.getContext('2d');
    if (sentimentCtx) {
        new Chart(sentimentCtx, {
            type: 'doughnut',
            data: {
                labels: ['Positivo', 'Negativo', 'Neutral/Mixto'],
                datasets: [{
                    label: 'Análisis de Sentimiento',
                    // Update with actual sentiment distribution percentages if available
                    data: [55, 30, 15], 
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.7)', // Positive (Teal)
                        'rgba(255, 99, 132, 0.7)',  // Negative (Red)
                        'rgba(201, 203, 207, 0.7)'  // Neutral (Gray)
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(201, 203, 207, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Distribución General de Sentimiento (Ilustrativo)'
                    }
                }
            }
        });
    }

    // --- Gantt Chart Placeholder/Initialization ---
    // NOTE: Gantt chart functionality removed as per previous instructions
    // If needed later, Frappe Gantt or similar library integration required.
    const ganttChartElement = document.getElementById('ganttChart');
    if (ganttChartElement) {
        // Gantt chart initialization code would go here if re-added
        // Example using Frappe Gantt (requires library inclusion):
        /*
        const tasks = [
            { id: '1', name: 'Optimizar Reservas SevenRooms', start: '2025-05-01', end: '2025-05-15', progress: 0 },
            { id: '2', name: 'Evaluar OpenTable/Resy', start: '2025-05-05', end: '2025-05-20', progress: 0, dependencies: '1' },
            { id: '3', name: 'Refinar Menú Midweek', start: '2025-05-15', end: '2025-06-15', progress: 0, dependencies: '1' },
            { id: '4', name: 'Capacitación Servicio Narrativa', start: '2025-05-20', end: '2025-06-10', progress: 0 },
            { id: '5', name: 'Campaña Marketing Digital', start: '2025-06-01', end: '2025-07-31', progress: 0, dependencies: '2,3' },
            // Add more tasks based on recommendations
        ];
        const gantt = new Gantt(ganttChartElement, tasks, {
            header_height: 50,
            column_width: 30,
            step: 24,
            view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
            bar_height: 20,
            bar_corner_radius: 3,
            arrow_curve: 5,
            padding: 18,
            view_mode: 'Week',
            date_format: 'YYYY-MM-DD',
            language: 'es', // Set language if available
            custom_popup_html: function(task) {
              return `
                <div class="gantt-popup">
                  <strong>${task.name}</strong><br>
                  Fechas: ${task.start} - ${task.end}<br>
                  Progreso: ${task.progress}%
                </div>
              `;
            }
        });
        */
       ganttChartElement.innerHTML = '<p><i>Visualización de Gantt pendiente de implementación.</i></p>'; // Placeholder text
    }

    // Add other chart initializations here...

    // Example: Initialize Occupancy Fluctuations Chart (Placeholder Data)
    const occupancyFluctuationsCtx = document.getElementById('occupancyFluctuationsChart')?.getContext('2d');
    if (occupancyFluctuationsCtx) {
        new Chart(occupancyFluctuationsCtx, {
            type: 'line',
            data: {
                // Example: Monthly average occupancy trend
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    label: 'Ocupación Promedio Estimada (%)',
                    data: [60, 65, 70, 68, 75, 72, 65, 68, 78, 85, 88, 80], // Sample data
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    tension: 0.1
                }]
            },
             options: {
                 responsive: true,
                 maintainAspectRatio: false,
                 scales: {
                    y: { 
                        beginAtZero: false,
                        suggestedMin: 50,
                        suggestedMax: 100,
                        title: {
                            display: true,
                            text: 'Ocupación (%)'
                        }
                    }
                 },
                 plugins: {
                    legend: { position: 'top' },
                    title: {
                        display: true,
                        text: 'Tendencia Estimada de Ocupación Mensual'
                    }
                }
            }
        });
    }

    // Example: Initialize Pareto Chart (Placeholder Data)
    const paretoCtx = document.getElementById('paretoChart')?.getContext('2d');
    if (paretoCtx) {
        // Pareto requires calculating cumulative percentage, often done server-side or pre-calculated
        // Simple bar chart illustration of factor frequency:
        const paretoLabels = ['Percepción Valor', 'Fricción Reserva', 'Competencia', 'Consistencia', 'Visibilidad Otros'];
        const paretoData = [45, 25, 15, 10, 5]; // Example frequency/impact score

        new Chart(paretoCtx, {
            type: 'bar',
            data: {
                labels: paretoLabels,
                datasets: [{
                    label: 'Impacto Relativo en Ocupación (Ilustrativo)',
                    data: paretoData,
                    backgroundColor: 'rgba(255, 159, 64, 0.7)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Puntuación de Impacto Relativo'
                        }
                    }
                },
                 plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Factores Principales que Impactan la Ocupación (Ilustrativo)'
                    }
                }
            }
        });
        // Note: A true Pareto chart would overlay a line graph of cumulative percentage.
        // This requires more complex data setup or a dedicated chart type/library.
    }
});
