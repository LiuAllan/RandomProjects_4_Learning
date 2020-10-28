<script>
import { Line } from 'vue-chartjs';
// no <template> because the chart is being rendered as a javascript

export default {
    extends: Line,
    props: {
        // label: {
        //     type: String
        // },
        chartData: {
            type: Array
        },
        options: {
            type: Object
        },
        chartColors: {
            type: Object
        }
    },
    mounted() {
        const country = this.chartData.map(d => d.country);
        const totalConfirmed = this.chartData.map(d => d.totalConfirmed);
        const totalDeaths = this.chartData.map(d => d.totalDeaths);
        const totalRecovered = this.chartData.map(d => d.totalRecoverd);
        const newConfirmed = this.chartData.map(d => d.newConfirmed);
        const newDeaths = this.chartData.map(d => d.newDeaths);
        const newRecovered = this.chartData.map(d => d.newRecovered);
 
        this.renderChart({
            labels: country,
            datasets: [
                {
                    label: "Total Confirmed",
                    data: totalConfirmed,
                    borderColor: '#B5CA8D',
                    pointBorderColor: '#333',
                    backgroundColor: '#B5CA8D'
                },
                {
                    label: "Total Deaths",
                    data: totalDeaths,
                    borderColor: '#9AD2CB',
                    pointBorderColor: '#333',
                    backgroundColor: '#9AD2CB'
                },
                {
                    label: "Total Recovered",
                    data: totalRecovered,
                    borderColor: '#333',
                    pointBorderColor: '#333',
                    backgroundColor: '#333'
                },
                {
                    label: "New Confirmed",
                    data: newConfirmed,
                    borderColor: '#FF4365',
                    pointBorderColor: '#FF4365',
                    backgroundColor: '#FF4365'
                },
                {
                    label: "New Deaths",
                    data: newDeaths,
                    borderColor: '#471323',
                    pointBorderColor: '#471323',
                    backgroundColor: '#471323'
                },
                {
                    label: "New Recovered",
                    data: newRecovered,
                    borderColor: '#DE6B48',
                    pointBorderColor: '#DE6B48',
                    backgroundColor: '#DE6B48'
                },
            ],
        }, this.options);
    }
}
</script>
