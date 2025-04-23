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
    const wordCloudDiv = document.getElementById('wordCloud');
    if (wordCloudDiv && typeof d3 !== 'undefined' && typeof d3.layout !== 'undefined' && typeof d3.layout.cloud !== 'undefined') {

        const wordData = [
            {text: 'experience', size: 25},
            {text: 'value', size: 20},
            {text: 'price', size: 18},
            {text: 'chocolate', size: 15},
            {text: 'tasting menu', size: 14},
            {text: 'unique', size: 13},
            {text: 'service', size: 12},
            {text: 'underwhelming', size: 11},
            {text: 'pacing', size: 10},
            {text: 'slow', size: 9},
            {text: 'Colombian', size: 8},
            {text: 'Michelin', size: 8},
            {text: 'booking', size: 7},
            {text: 'ambiance', size: 6},
            {text: 'whimsical', size: 5}
        ].map(d => ({ text: d.text, size: d.size })); // Ensure size property exists

        const width = wordCloudDiv.clientWidth || 500;
        const height = wordCloudDiv.clientHeight || 400;
        
        // Slightly adjusted size scale for better visibility in D3
        const fontSizeScale = d3.scaleSqrt()
            .domain([d3.min(wordData, d => d.size), d3.max(wordData, d => d.size)])
            .range([10, 60]); // Min/Max font size

        const layout = d3.layout.cloud()
            .size([width, height])
            .words(wordData)
            .padding(5)
            .rotate(() => (~~(Math.random() * 6) - 3) * 30) // Random rotation -90, -60, -30, 0, 30, 60
            .fontSize(d => fontSizeScale(d.size))
            .on("end", draw);

        layout.start();

        function draw(words) {
            d3.select(wordCloudDiv).append("svg")
                .attr("width", layout.size()[0])
                .attr("height", layout.size()[1])
              .append("g")
                .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
              .selectAll("text")
                .data(words)
              .enter().append("text")
                .style("font-size", d => d.size + "px")
                .style("font-family", "Impact, sans-serif") // Example font
                .style("fill", (d, i) => d3.schemeCategory10[i % 10]) // Example color scheme
                .attr("text-anchor", "middle")
                .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
                .text(d => d.text);
        }
    } else {
         if (wordCloudDiv) {
            wordCloudDiv.innerHTML = "Failed to load D3 or d3-cloud library.";
            console.error("D3 or d3-cloud library not found or loaded correctly.");
         } else {
             console.error("wordCloud div not found.");
         }
    }

    // --- Occupancy Factor Analysis Charts --- 
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
            type: 'bar',
            data: {
                labels: ['Visibility (Booking Platforms, SEO)', 'Value Proposition (Menu, Pricing)', 'Guest Experience (Service, Pacing)', 'Brand & Marketing (Social, PR)', 'Competition Intensity', 'Booking Friction'], // Example Drivers
                datasets: [{
                    label: 'Estimated Positive Impact on Occupancy (%)',
                    data: [25, 20, 15, 10, -5, -10], // Hypothetical impact percentages
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)', // Blue
                        'rgba(75, 192, 192, 0.6)', // Green
                        'rgba(255, 206, 86, 0.6)', // Yellow
                        'rgba(153, 102, 255, 0.6)', // Purple
                        'rgba(255, 99, 132, 0.6)', // Red
                        'rgba(255, 159, 64, 0.6)' // Orange
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y', // Make it a horizontal bar chart
                responsive: true,
                maintainAspectRatio: false,
                 scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Hypothesized Impact on Occupancy Rate (%)'
                        }
                    },
                    y: {
                         ticks: {
                             autoSkip: false // Ensure all labels are shown
                         }
                    }
                },
                plugins: {
                    legend: {
                        display: false // Hide legend as label describes the bar
                    },
                    title: {
                        display: true,
                        text: 'Chart 10: Hypothesized Impact of Occupancy Drivers'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.x !== null) {
                                    label += context.parsed.x + '%';
                                }
                                return label;
                            }
                        }
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

});
